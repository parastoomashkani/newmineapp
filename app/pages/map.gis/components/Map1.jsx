"use client"

import React,{ useEffect, useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup, LayersControl,useMap  } from "react-leaflet";
import "../../../../node_modules/leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import  HeatmapLayer from"react-leaflet-heatmap-layer-v3/lib/HeatmapLayer";
import { geojson } from "../services/atd";
import DrawTools from "./DrawTools";

import icon from "./constants";


const Map = () => {

  // const [map, setMap] = useState(null);
  // const [ii, setIi] = useState('initial_value'); // Set initial_value to your default value
  // const [bbox, setBbox] = useState('');

  // useEffect(() => {
  //   if (map) {
  //     const bounds = map.getBounds();
  //     const southwest = bounds.getSouthWest();
  //     const northeast = bounds.getNorthEast();

  //     const bboxString = `${southwest.lng},${southwest.lat},${northeast.lng},${northeast.lat}`;
  //     setBbox(bboxString);

  //     const url = `http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=${ii}&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=${bboxString}&WIDTH=512&HEIGHT=512`;

  //     console.log('Updated URL:', url);
  //   }
  // }, [map, ii]);

  // useEffect(() => {
  //   if (map) {
    
  //     map.on("zoomend", function () {
  //       const bounds = map.getBounds();
  //       const southwest = bounds.getSouthWest();
  //       const northeast = bounds.getNorthEast();
  //       const bboxString = `${southwest.lng},${southwest.lat},${northeast.lng},${northeast.lat}`;
  //       setBbox(bboxString);

  //       console.log('Updated BBOX:', bboxString);
  //     });
  //   }
  // }, [map]);
  const [map, setMap] = useState(null);
  const [ii, setIi] = useState('BQMCSQ%3D%3D'); // Set your initial value
  const [bbox, setBbox] = useState('6261721.35625,2504688.5425,7514065.6275,3757032.81375');

  useEffect(() => {
    if (map) {
      const bounds = map.getBounds();
      const southwest = bounds.getSouthWest();
      const northeast = bounds.getNorthEast();
      const bboxString = `${southwest.lng},${southwest.lat},${northeast.lng},${northeast.lat}`;
      setBbox(bboxString);

      const url = `http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=${ii}&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=${bboxString}&WIDTH=512&HEIGHT=512`;

      console.log('Updated URL:', url);

      // Fetch the PNG image and display it on the map
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.blob();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then((blob) => {
          const imageUrl = URL.createObjectURL(blob);

          // Remove the previous image overlay (if any)
          map.eachLayer((layer) => {
            if (layer instanceof ImageOverlay) {
              map.removeLayer(layer);
            }
          });

          // Add the new image overlay to the map
          const imageBounds = [[southwest.lat, southwest.lng], [northeast.lat, northeast.lng]];
          const imageOverlay = new ImageOverlay(imageUrl, imageBounds);
          imageOverlay.addTo(map);
        })
        .catch((error) => {
          console.error('Error fetching PNG image:', error);
        });
    }
  }, [map, ii]);

  useEffect(() => {
    if (map) {
      map.on("zoomend", function () {
        const bounds = map.getBounds();
        const southwest = bounds.getSouthWest();
        const northeast = bounds.getNorthEast();
        const bboxString = `${southwest.lng},${southwest.lat},${northeast.lng},${northeast.lat}`;
        setBbox(bboxString);

        console.log('Updated BBOX:', bboxString);
      });
    }
  }, [map]);

  return (
    <MapContainer
      style={{
        height: "100vh",
        width: "98%",
      }}
      center={[31.983292, 54.262546]}
      zoom={7}
      scrollWheelZoom={true}
      ref={setMap}
    >
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

{/* <LocationMarker /> */}
    </MapContainer>


  );
};

export default Map;