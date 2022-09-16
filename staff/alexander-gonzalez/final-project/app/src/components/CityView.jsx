import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";
import { useState } from "react";

import "./CityView.css";

const CityView = () => {
  const params = useParams();
  const [city, setCity] = useState();

  useEffect(() => {
    try {
      retrieveCity(token, cityId)
        .then((city) => setCity(city))
        .cath((error) => {
          // TODO error hanlding
        });
    } catch (error) {
      // TODO error handling
    }
  }, []);

  return (
    <>
      {
        city && <>
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
              // const popupItem  = popup().setLatLng( city.coords[0], city.coords[1])

              return (
                <Marker
                  key={place._id}
                  position={{ lat: place.coords[0], lng: place.coords[1] }}
                />
              );
            })}
            {/* <PlacesMarker data ={TODO}/>   */}
          </MapContainer>
          <h1>TODO show city description, photo, places...</h1>
        </>
      }
    </>
  );
};

export default CityView;
