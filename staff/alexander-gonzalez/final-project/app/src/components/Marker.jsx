import React from "react";
import {Marker} from "react-leaflet"
import IconButton from "./IconButton";

function Marker () {

}

const Marker= () => {
    return (
        
        <Marker position = {{ lat: '48.85312', lng: '2.35034'}} />,
        <IconButton text = 'room' />
    )

}

//-------------en caso de que no funcione probar con MAPBOX ---------------------------

/* let myMap = L.map('mapa').setView([ 48.8032, 2.3511],15); 
L.tileLayer('http://.....TODO)
attribution:'Paris. Map &copy; <a href="https:// TODO...." 
maxZoom:20,
id:'mapbox.comic'
accesToken:'kajhskjhajhakhakjajkjhTODO......
}).addTo(myMap);
let stylePopup = {
    'maxWidth': '500'
}
let marker = L.marker([ 48.85859,2.29436 ]).addTo(myMap)
marker.bindPopup("<h1>Eiffel Tower</h1><img src...TODO")
let popup = L.popup();

*/  


export default Marker
