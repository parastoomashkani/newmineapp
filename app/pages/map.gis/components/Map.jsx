import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../../../node_modules/leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import DrawTools from "./DrawTools";
const Map = () => {

  return (
    <MapContainer
      style={{
        height: "100vh",
        width: "83.333333%",
      }}
      center={[31.983292, 54.262546]}
      zoom={7}
      scrollWheelZoom={false}
    >
      <Marker    position={[31.983292, 54.262546]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <DrawTools />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;