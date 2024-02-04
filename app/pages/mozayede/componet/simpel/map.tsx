"use Client"
import {MapContainer,TileLayer,Marker,Popup ,Polygon ,GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "../../../../../node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
interface DynamicMapProps {
  geoJsonData: any; 
}
const DynamicMap: React.FC<DynamicMapProps> = ({ geoJsonData }) => {  
  const center = geoJsonData?.features[0]?.geometry?.coordinates.reverse() || [31.624841207959147, 59.09743605115858];
  const zoom = 12;
return(
<MapContainer
style={
  {
    height:" 20rem",
    width:"83.333333%"
  }
  
}
center={center}
zoom={zoom}
scrollWheelZoom={true}>
  {geoJsonData && <GeoJSON data={geoJsonData} />}  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[31.983292, 54.262546]}>

    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer> 
);   
};
export default DynamicMap;

