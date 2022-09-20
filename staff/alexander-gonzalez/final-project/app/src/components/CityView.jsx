import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import retrieveCity from "../logic/retrieveCity";
import Loggito from "../utils/Loggito";
import withContext from "../utils/withContext";

import "./CityView.css";

const CityView = ({ context: { handleFeedback } }) => {
  const logger = new Loggito("CityView");
  const params = useParams();
  const [city, setCity] = useState();
  // const [place, setPlace] = useState();
  const cityId = params.cityId;

  useEffect(() => {
    logger.info('"componentDidMount"');

    try {
      return retrieveCity(sessionStorage.token, cityId, (error, city) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);
        }

        setCity(city);

        logger.debug("setCity", city);
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  }, []);

  const handlePlaceClick = (placeId) => setPlace(placeId);

  return (
    <>
      {city && (
        <>
          <MapContainer
            key={city.id}
            center={{ lat: city.coords[0], lng: city.coords[1] }}
            zoom={13}
          >
            {" "}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {city.places.map((place) => {
              return (
                <Marker
                  key={place._id}
                  position={{ lat: place.coords[0], lng: place.coords[1] }}
                  eventHandlers={{ click: () => handlePlaceClick(place) }}
                />
              );
            })}
          </MapContainer>

          <h1></h1>
        </>
      )}
      {/* {place && <PlaceModal place={place} />} */}
    </>
  );
};

export default withContext(CityView);
