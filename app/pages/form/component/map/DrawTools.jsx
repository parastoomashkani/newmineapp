
"use client"
import React, { useState } from "react";
import L from "leaflet";
import {
 
  FeatureGroup,

} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "../../../../../node_modules/leaflet-draw/dist/leaflet.draw.css";
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
	  convertAndPostToApi();
	};
  
	const _onCreated = async (e) => {
  let type = e.layerType;
  let layer = e.layer;

  const newShape = {
    type: type,
    geoJSON: layer.toGeoJSON(),
    coords: layer.getLatLngs(),
  };

  console.log("Geojson", layer.toGeoJSON());
  console.log("coords", layer.getLatLngs());

  setDrawnShapes((prevShapes) => [...prevShapes, newShape]);

  _onChange();

  await postShapeDataToApi(newShape);
};

const postShapeDataToApi = async (geoJSON) => {
  const geoJSONString = JSON.stringify(geoJSON);

  try {
    const response = await fetch(process.env.BaseUrl + '/registerVerify', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: geoJSONString,
    });

    if (response.ok) {
      console.log("GeoJSON data successfully sent to the API.");
    } else {
      console.error("Failed to send GeoJSON data to the API.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
	const _onDeleted = (e) => {
	  let numDeleted = 0;
	  e.layers.eachLayer((layer) => {
		numDeleted += 1;
	  });
	//   console.log(`onDeleted: removed ${numDeleted} layers`, e);
  
	  _onChange();
	  convertAndPostToApi();
	};
  
	const _onChange = () => {
	  // Perform any other actions needed when the shapes change
	};
	const _onMounted = (drawControl) => {
	//   console.log("_onMounted", drawControl);
	};
  
	const _onEditStart = (e) => {
	//   console.log("_onEditStart", e);
	};
  
	const _onEditStop = (e) => {
	  console.log("_onEditStop", e);
	};
  
	const _onDeleteStart = (e) => {
	//   console.log("_onDeleteStart", e);
	};
  
	const _onDeleteStop = (e) => {
	//   console.log("_onDeleteStop", e);
	};
  
	const _onDrawStart = (e) => {
	//   console.log("_onDrawStart", e);
	};
	

	// const convertAndPostToApi = async () => {
	// 	const shapesJson = JSON.stringify(drawnShapes);
	// 	console.log("Drawn Shapes JSON:", drawnShapes);
	
	// 	try {
	// 		const response = await axios.post(
	// 		  process.env.BaseUrl + '/',
	// 		  {
	// 			shapesJson,
	// 		  },
	// 		  {
	// 			headers: {
	// 			  'Content-Type': 'application/json',
	// 			  Accept: 'application/json',
	// 			  Authorization: localStorage.getItem('token'),
	// 			},
	// 		  }
	// 		);
	// 	  if (response.ok) {
	// 		console.log("Shapes data successfully sent to the API.");
	// 	  } else {
	// 		console.error("Failed to send shapes data to the API.");
	// 	  }
	// 	} catch (error) {
	// 	  console.error("Error:", error);
	// 	}
	//   };
  
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
