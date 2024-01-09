
"use client"
import React, { useState } from "react";
import {
 
  FeatureGroup,

} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "../../../../node_modules/leaflet-draw/dist/leaflet.draw.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const DrawTools = () => {
	const [drawnShapes, setDrawnShapes] = useState([]);

	const _onEdited = (e) => {
	  let numEdited = 0;
	  e.layers.eachLayer((layer) => {
		numEdited += 1;
	  });
	  console.log(`_onEdited: edited ${numEdited} layers`, e);
  
	  _onChange();
	};
  
	const _onCreated = (e) => {
	  let type = e.layerType;
	  let layer = e.layer;
	  if (type === "marker") {
		// Do marker specific actions
		console.log("_onCreated: marker created", e);
	  } else {
		console.log("_onCreated: something else created:", type, e);
	  }
  
	  const newShape = {
		type: type,
		geoJSON: layer.toGeoJSON(),
		coords: layer.getLatLngs(),
	  };
  
	  setDrawnShapes((prevShapes) => [...prevShapes, newShape]);
  
	  _onChange();
	};
	const _onDeleted = async (e) => {
		let numDeleted = 0;
		const deletedShapes = [];
	  
		e.layers.eachLayer((layer) => {
		  numDeleted += 1;
		  const deletedShape = {
			type: layer.type,
			geoJSON: layer.toGeoJSON(),
			coords: layer.getLatLngs(),
		  };
		  deletedShapes.push(deletedShape);
		});
	  
		// console.log(`onDeleted: removed ${numDeleted} layers`, e);
	  
		_onChange();
	  
		try {
			const response = await axios.post(process.env.BaseUrl + '/', {
			  name,
			  mobile,
			  password,
			} ,{
				headers: {
				  'Content-Type': 'application/json',
				  Accept: 'application/json',
				  Authorization: localStorage.getItem('token'),
				},
			  });
			
		  if (response.ok) {
			console.log("Deleted shapes data successfully sent to the API.");
		  } else {
			console.error("Failed to send deleted shapes data to the API.");
		  }
		} catch (error) {
		  console.error("Error:", error);
		}
	  };
	  
	const _onChange = () => {
	  // Perform any other actions needed when the shapes change
	};
  
	const _onMounted = (drawControl) => {
	  console.log("_onMounted", drawControl);
	};
  
	const _onEditStart = (e) => {
	  console.log("_onEditStart", e);
	};
  
	const _onEditStop = (e) => {
	  console.log("_onEditStop", e);
	};
  
	const _onDeleteStart = (e) => {
	  console.log("_onDeleteStart", e);
	};
  
	const _onDeleteStop = (e) => {
	  console.log("_onDeleteStop", e);
	};
  
	const _onDrawStart = (e) => {
	  console.log("_onDrawStart", e);
	};
  

  
  return (

    <FeatureGroup >   

      <EditControl
        onDrawStart={_onDrawStart}
        position="topright"
        onEdited={_onEdited}
        onCreated={_onCreated}
        onDeleted={_onDeleted}
        draw={{
          polyline: {
            // ... (same as before)
          },
          rectangle: true,
          circlemarker: true,
          circle: true,
          polygon: true
        }}
      />
    </FeatureGroup>

  );
};

export default DrawTools;
