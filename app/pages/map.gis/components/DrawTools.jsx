
"use client"
import React, { useState } from "react";
import L from "leaflet";
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
  
	const _onDeleted = (e) => {
	  let numDeleted = 0;
	  e.layers.eachLayer((layer) => {
		numDeleted += 1;
	  });
	  console.log(`onDeleted: removed ${numDeleted} layers`, e);
  
	  _onChange();
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
  
	const convertShapesToJson = async () => {
	  const shapesJson = JSON.stringify(drawnShapes);
	  console.log("Drawn Shapes JSON:", shapesJson);
  
	  try {
		const response = await fetch("your-api-endpoint", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: shapesJson,
		});
  
		if (response.ok) {
		  console.log("Shapes data successfully sent to the API.");
		} else {
		  console.error("Failed to send shapes data to the API.");
		}
	  } catch (error) {
		console.error("Error:", error);
	  }
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
	   <button onClick={convertShapesToJson}>Convert to JSON</button>
    </FeatureGroup>

  );
};

export default DrawTools;
