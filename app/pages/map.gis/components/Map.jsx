

import React from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from "react-leaflet";
import "../../../../node_modules/leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import  HeatmapLayer from"react-leaflet-heatmap-layer-v3/lib/HeatmapLayer";
import { geojson } from "../services/atd";
import DrawTools from "./DrawTools";


const Map = () => {

  return (
    <MapContainer
      style={{
        height: "100vh",
        width: "98%",
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
      
<LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        </LayersControl>

        <DrawTools />
      <HeatmapLayer
          points={geojson.features}
          longitudeExtractor={(m) => m.geometry.coordinates[0]}
          latitudeExtractor={(m) => m.geometry.coordinates[1]}
          intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
          max={100}
          minOpacity={0.2}
        />
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}


    </MapContainer>


  );
};

export default Map;