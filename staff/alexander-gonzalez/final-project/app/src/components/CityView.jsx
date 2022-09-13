import React from "react";

//import PlacesMarker from "./PlacesMarker";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

//import '.leaflet/dist/leaflet.css';

import "./CityView.css";

const CityView = ({cities}) => {
    debugger
  return (
    <>
      {cities && cities.map((city) => {
        return (
          <MapContainer key={city.id} center={[48.856944444444, 2.3513888888889]} zoom={13}>
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
                />
              );
            })}
            {/* <PlacesMarker data ={TODO}/>   */}
          </MapContainer>
        );
      })}
    </>
  );
};

export default CityView;
