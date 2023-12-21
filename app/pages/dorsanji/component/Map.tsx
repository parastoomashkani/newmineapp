import {MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const Map = () => {
return(
<MapContainer
style={
  {
    height:"100vh",
    width:"83.333333%"
  }
}
center={[31.983292, 54.262546 ]} zoom={7} scrollWheelZoom={false}>
  <TileLayer
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

export default Map;