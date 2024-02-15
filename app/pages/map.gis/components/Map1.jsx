"use client"

import React, { useEffect, useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup, LayersControl, useMap } from "react-leaflet";
import "../../../../node_modules/leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import HeatmapLayer from "react-leaflet-heatmap-layer-v3/lib/HeatmapLayer";
import { geojson } from "../services/atd";
import DrawTools from "./DrawTools";
import proj4 from "proj4"
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
import CheckTree from 'rsuite/CheckTree';
import "../../../../node_modules/rsuite/dist/rsuite-no-reset.min.css"
import { GiHamburgerMenu } from "react-icons/gi";
const data = [
  {
    value: "mammal",
    label: " اکتشاف",
    children: [
      {
        value: "mineral potential",
        label: "پتانسیل مواد معدنی ",
        children: [
          {
            value: " Lead",
            label: "کانسار های تیپ سرب و روی با میزبان کبنات",
            gmt:{
              "type": "Feature",
              "geometry": {
                 "type": "Point",
                 "coordinates":   [53.6880, 32.4279]
              },
              "properties": {
              "rating":3.2,
              "restaurant_name":"Sonu Da Dhaba"
              }
            },                                                            
            children: []
          },
          {
            value: "golden",
            label: "  کانسار های طلای کوهزایی  ",
            gmt: {
              "type": "Feature",
              "geometry": {
                 "type": "Point",
                 "coordinates":  [53.7880, 32.5279]
              },
              "properties": {
              "rating":3.8,
              "restaurant_name":"S.K Fast Food & Tiffin Centre"
              }
            },
            children: []
          },
          {
            value: "iron",
            label: " کانسار های تیب اکسید آهن  ",
            gmt: {
              "type": "Feature",
              "geometry": {
                 "type": "Point",
                 "coordinates":  [53.3880, 36.4279]
              },
              "properties": {
              "rating":2.6,
              "restaurant_name":"House Boat"
              }
            },
            children: []
          },
          {
            value: "  manganese  ",
            label: " کانسار های تیپ منگنز بروندمی ",
            children: []
          },
          {
            value: " manganeseStone ",
            label: " کانسار تیپ منیزیت وابسته به سنگ ها ",
            children: []
          },
          {
            value: "porphyry",
            label: " کانسار های تیپ پورفیری  ",

            children: []
          },
          {
            value: "mass-dependent skarn",
            label: " کانسار های تیپ اسکارن وابسته به توده ها  ",
            children: []
          },
          {
            value: "Polymetallic gold",
            label: " کانسار های تیپ طلای پلی متال وابسته به توده ها ",
            children: []
          },
          {
            value: " Sulfide",
            label: " کانسار تیپ سولفید توده ایی ",
            children: []
          },
          {
            value: "aluminium ",
            label: "  کانسار های تیپ المینیوم وابسته به بوکسیت ",
            children: []
          },
          {
            value: "copper _ silver",
            label: "کانسا های مس _نقره  تیپ مانیتو ",
            children: []
          },
          {
            value: "Striped polymetal",
            label: "کانسار های تیپ پلی متال رگه ایی گرمابی ",
            children: []
          },
          {
            value: "Sedimentary phosphate",
            label: " کانسار های تیپ فسفات رسوبی  ",
            children: []
          },
          {
            value: "Low sulfidation",
            label: "  کانسار ها تیپ اپی  ترمینال با سولفیداسیون پایین",
            children: []
          },
          {
            value: " Storage chromite ",
            label: "کانسار های تیپ کرومیت انبانه ایی ",
            children: []
          },
          {
            value: " Infiltrating skarn ",
            label: "کانسار های تیپ اسکارن وابسته به توده های نفوذی ",
            children: []
          },
          {
            value: "Medium and high sulphidation",
            label: "کانسار های تیپ اپی ترمال با سلفیداسیون متوسط و بالا ",
            children: []
          },
          {
            value: "Sedimentary lead and zinc",
            label: "کانسار های تیپ سرب و روی روسوبی _بروندمی (سدکس)",
            children: []
          },
          {
            value: "Ferrous iron",
            label: "کانسار های تیپ آهن بروندمی ",
            children: []
          },

        ]
      },
      {
        value: "Geochemical anomalies",
        label: "ناهنجاریهای ژئوشیمیایی",
        children: [
          {
            value: " thorium ",
            label: " ناهنجای ژئوشیمیایی  توریوم ",
            children: []
          },
          {
            value: "roy",
            label: "ناهنجاری ژئوشیمیایی روی  ",
            children: []
          },
          {
            value: "Zirconia",
            label: " ناهنجاری ژئوشیمیایی زیرکونیم ",
            children: []
          },
          {
            value: "titanium",
            label: " ناهنجاری ژئوشیمیایی تیتانیوم ",
            children: []
          },
          {
            value: "ethereum",
            label: " ناهنجاری ژئوشیمیایی ایترییم  ",
            children: []
          },
          {
            value: "barim",
            label: "  ناهنجاری ژئوشیمیایی باریم  ",
            children: []
          },
          {
            value: "beryllium",
            label: " ناهنجای ژئوشیمیایی بریلیوم ",
            children: []
          },
          {
            value: "bismuth",
            label: " ناهنجاری ژئوشیمیایی بیسموت ",
            children: []
          },
          {
            value: "cadmium",
            label: " ناهنجای ژئوشیمیایی کادمیوم  ",
            children: []
          },
          {
            value: "sirim",
            label: " ناهنجاری ژئوشیمیایی سریم ",
            children: []
          },
          {
            value: "cobalt",
            label: "ناهنجاری ژئوشیمیایی کبالت ",
            children: []
          },
          {
            value: " cesium",
            label: " ناهنجاری ژئوشیمیایی سزیم  ",
            children: []
          },
          {
            value: " chrome",
            label: " ناهنجاری ژئوشیمیایی کروم  ",
            children: []
          },
          {
            value: "calcium",
            label: " ناهنجاری ژئوشیمیایی کلسیم  ",
            children: []
          },
          {
            value: "brome",
            label: " ناهنجاری ژئوشیمیایی  برم ",
            children: []
          },
          {
            value: "arsenic",
            label: "ناهنجاری ژئوشیمیایی ارسنیک",
            children: []
          },
          {
            value: "gold",
            label: "ناهنجاری های ژئوشیمیایی طلا ",
            children: []
          },
          {
            value: "bor",
            label: "ناهنجاری ژئوشیمیایی بور ",
            children: []
          },
          {
            value: "yttrium",
            label: "ناهنجاری ژئوشیمیایی ایتریم ",
            children: []
          },
          {
            value: "copper",
            label: "ناهنجاری ژئوشیمیایی مس ",
            children: []
          },
          {
            value: "germanium",
            label: "ناهنجاری شیمیایی ژرمانیم ",
            children: []
          },
          {
            value: "galium",
            label: "ناهنجاری ژئوشیمیایی گالیم",
            children: []
          },
          {
            value: "iron",
            label: "ناهنجاری  ژئوشیمیایی آهن",
            children: []
          },
          {
            value: "fluorine",
            label: "ناهنجاری  ژئوشیمیایی فلوئور",
            children: []
          },
          {
            value: "europium",
            label: "ناهنجاری ژوشیمیایی یروپیم ",
            children: []
          },
          {
            value: "hafnium",
            label: " ناهنجاری ژئوشیمیایی هافنیوم ",
            children: []
          }, {
            value: "mercury",
            label: "ناهنجاری ژوشیمیایی جیوه ",
            children: []
          },
          {
            value: "potassium",
            label: "  ناهنجاری ژوشیمیایی پتاسیم",
            children: []
          },
          {
            value: "latnan",
            label: "ناهنجاری ژوشیمیایی لاتنان",
            children: []
          },
          {
            value: "lithium",
            label: "ناهنجاری ژئوشیمیایی لیتیم",
            children: []
          },
          {
            value: "magnesium",
            label: "ناهنجاری ژئوشیمیایی منیزیم",
            children: []
          },
          {
            value: "manganese",
            label: "ناهنجاری ژئوشیمیایی منگنز",
            children: []
          },
          {
            value: "molybdenum",
            label: "ناهنجاری ژئوشیمیایی مولیبدن",
            children: []
          },
          {
            value: "sodium",
            label: "ناهنجاری ژئوشیمیایی سدیم",
            children: []
          },
          {
            value: "nivium",
            label: "ناهنجاری ژئوشیمیایی نیوییوم",
            children: []
          },
          {
            value: "neodymium",
            label: "ناهنجاری ژئوشیمیایی نئودیمیم",
            children: []
          },
          {
            value: "nickel",
            label: "ناهنجاری ژئوشیمیایی نیکل",
            children: []
          },
          {
            value: "esmeem",
            label: "ناهنجاری ژئوشیمیایی اسمیم",
            children: []
          },
          {
            value: "phosphorus",
            label: "ناهنجاری ژئوشیمیایی فسفر",
            children: []
          },
          {
            value: "lead",
            label: "ناهنجاری ژئوشیمیایی سرب",
            children: []
          },
          {
            value: "praseodymium",
            label: "ناهنجاری ژئوشیمیایی پرازئودیمیم",
            children: []
          },
          {
            value: "scandium",
            label: "ناهنجاری ژئوشیمیایی اسکاندیم",
            children: []
          },
          {
            value: "thallium",
            label: "ناهنجاری ژئوشیمیایی تالیوم",
            children: []
          },
          {
            value: "uranium",
            label: "ناهنجاری ژئوشیمیایی اورانیوم",
            children: []
          },
          {
            value: "vanadium",
            label: "ناهنجاری ژئوشیمیایی وانادیم",
            children: []
          },
          {
            value: "tungsten",
            label: "ناهنجاری ژئوشیمیایی تنگستن",
            children: []
          },
          {
            value: "rubidim",
            label: "ناهنجاری ژئوشیمیایی روبیدیم",
            children: []
          },
          {
            value: "rhenium",
            label: "ناهنجاری ژئوشیمیایی رنیوم",
            children: []
          },
          {
            value: "ruthenium",
            label: "ناهنجاری ژئوشیمیاییوروتنیم",
            children: []
          },
          {
            value: "sulfur",
            label: "ناهنجاری ژئوشیمیایی گوگرد",
            children: []
          },
          {
            value: "antimony",
            label: "ناهنجاری ژئوشیمیایی آنتیموان",
            children: []
          },
          {
            value: "silicon",
            label: "ناهنجاری ژئوشیمیایی سیلسیم",
            children: []
          },
          {
            value: "tin",
            label: "ناهنجاری ژئوشیمیایی قلع",
            children: []
          },
          {
            value: "strontium",
            label: "ناهنجاری ژئوشیمیایی استرانسیم",
            children: []
          },
          {
            value: "dog",
            label: "ناهنجاری ژئوشیمیایی سلنیوم",
            children: []
          },
          {
            value: "selenium",
            label: "ناهنجاری ژئوشیمیایی تاتنالم",
            children: []
          },
          {
            value: "tatnalam",
            label: "ناهنجاری ژئوشیمیایی تاتنالم",
            children: []
          },
          {
            value: "tellurium",
            label: "ناهنجاری ژئوشیمیایی تلوریم",
            children: []
          },
          {
            value: "silver",
            label: "ناهنجاری ژئوشیمیایی نقره",
            children: []
          },
          {
            value: "aluminum",
            label: "ناهنجاری ژئوشیمیایی المینیوم",
            children: []
          },
        ]
      },
      {
        value: "mineralMap",
        label: " نگاشت کانی  ",
        children: [
          {
            value: "chlorite",
            label: " کلریت",
            children: []
          },
          {
            value: "alonite",
            label: "الونیت ",
            children: []
          },
          {
            value: "hematite",
            label: "هماتیت ",
            children: []
          },
          {
            value: " xaosite ",
            label: "ژاروسیت ",
            children: []
          },
          {
            value: "montmorillonite",
            label: "مونت موریلونیت ",
            children: []
          },
          {
            value: "gothite",
            label: "گوتیت  ",
            children: []
          },
          {
            value: "pyrophyllite",
            label: "پیروفیلیت ",
            children: []
          },
          {
            value: "kaolinite",
            label: "کائولینیت ",
            children: []
          },
          {
            value: "silica",
            label: "سیلیس ",
            children: []
          },
          {
            value: "muscovites",
            label: "موسکویت ",
            children: []
          },
          {
            value: "epidote",
            label: "اپیدوت ",
            children: []
          },
          {
            value: "elite",
            label: " ایلیت ",
            children: []
          },
        ]
      },
      {
        value: "non-metallic minerals",
        label: " مواد معدنی غیر فلزی  ",
        children: [
          {
            value: "barite1",
            label: "باریت ",
            children: []
          },
          {
            value: "bauxite1",
            label: "بوکسیت ",
            children: []
          },
          {
            value: "phosphate1",
            label: "فسفات ",
            children: []
          },
          {
            value: "manzanita1",
            label: "منزنیت ",
            children: []
          },
          {
            value: "sodiumSulfate1",
            label: "سولفات سدیم ",
            children: []
          },
          {
            value: "coal1",
            label: "زغال سنگ ",
            children: []
          },
          {
            value: "arsenic1",
            label: "آرسنیک ",
            children: []
          },
          {
            value: "alonite1",
            label: "آلونیت ",
            children: []
          },
          {
            value: "celestine1",
            label: "سلستین ",
            children: []
          },
          {
            value: "bettonite1",
            label: "بتتونیت ",
            children: []
          },
          {
            value: "potash1",
            label: "پتاس ",
            children: []
          },
          {
            value: "talk1",
            label: "تالک ",
            children: []
          },
          {
            value: "silica1",
            label: "سیلیس  ",
            children: []
          },
          {
            value: "kaolin1",
            label: "کائولن ",
            children: []
          },
          {
            value: "florin1",
            label: "فلورین ",
            children: []
          },
          {
            value: "sulfur1",
            label: " گوگرد",
            children: []
          }
        ]
      },

      {
        value: "metallicMinerals",
        label: " مواد معدنی فلزی ",
        children: [
          {
            value: "copper2",
            label: "مس",
            children: []
          },
          {
            value: "lead and zinc2",
            label: "سرب و روی ",
            children: []
          },
          {
            value: "tin and tungsten2",
            label: "قلع و تنگستن ",
            children: []
          },
          {
            value: "manganese2",
            label: "منگنز  ",
            children: []
          },
          {
            value: "titanium2",
            label: "تیتانیوم ",
            children: []
          },
          {
            value: "mercury2",
            label: " جیوه",
            children: []
          },
          {
            value: "polymetal2",
            label: "پلی متال ",
            children: []
          },
          {
            value: "iron2",
            label: "آهن ",
            children: []
          },

          {
            value: "cobaltNickel2",
            label: "کبالت _نیکل ",
            children: []
          },
          {
            value: "antimony2",
            label: "آنتیموان ",
            children: []
          },
          {
            value: "chromite2",
            label: "کرومیت ",
            children: []
          },
          {
            value: "gold2",
            label: "طلا ",
            children: []
          },

        ]
      },
      {
        value: "nationalScale",
        label: " مقیاس ملی  ",
        children: [
          {
            value: "magneticRock",
            label: "عمق پی سنگ مغناطیسی",
            children: []
          },
          {
            value: "magneticAnomalies",
            label: "ناهنجاری های مغناطیسی ",
            children: []
          },
          {
            value: "clayMinerals",
            label: "پراکندگی کانی های رسی ",
            children: []
          },

        ]
      },
    ]
  },
  
];
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
  const [isVisible, setIsVisible] = useState(true);
  const [mapWidth, setMapWidth] = React.useState('87%'); // Initial width for the map
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setMapWidth(isVisible ? '90%' : '40%');
  };

  const handleClose = () => {
    setIsVisible(false);
    setMapWidth('90%');
  };

  useEffect(() => {
    const closeDivOnMapTouch = () => {
      if (isVisible) {
        setIsVisible(true);
      }
    };


  }, [isVisible]);



  useEffect(() => {
    if (map) {
      map.on("zoomend", function () {
        const bounds = map.getBounds();
        const southwest = bounds.getSouthWest();
        const northeast = bounds.getNorthEast();
        const source = new proj4.Proj('EPSG:4326'); // WGS84
        const dest = new proj4.Proj('EPSG:3857');  // Web Mercator

        const minPoint = proj4(source, dest, { x: southwest.lng, y: southwest.lat });
        const maxPoint = proj4(source, dest, { x: northeast.lng, y: northeast.lat });

        console.log('Min Point (Latitude, Longitude):', minPoint);
        console.log('Max Point (Latitude, Longitude):', maxPoint);

        const bboxString = `${minPoint.x},${minPoint.y},${maxPoint.x},${maxPoint.y}`;
        setBbox(bboxString);

        const url = ``;

        console.log('Updated URL:', url);
        const fetchData = async () => {

          try {
            const response = await axios.get(url);
            console.log(response);
            // setApiData(.data.data);
            console.log('Fetched data:', response.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchData();
        axios.get(url)
          .then(response => {


            console.log('Response:', response.data)
          })
          .catch(error => {
            console.error('Error:', error);
          });

        fetch(url)
          .then((response) => {
            console.log("dsdfsf", response)
            if (response.ok) {

              return response.blob();
            } else {
              throw new Error('Network response was not ok');
            }
          })
          .then((blob) => {
            const imageUrl = URL.createObjectURL(blob);


            map.eachLayer((layer) => {
              if (layer instanceof ImageOverlay) {
                map.removeLayer(layer);
              }
            });


            const imageBounds = [[southwest.lat, southwest.lng], [northeast.lat, northeast.lng]];
            const imageOverlay = new ImageOverlay(imageUrl, imageBounds);
            imageOverlay.addTo(map);
          })
          .catch((error) => {
            console.error('Error fetching PNG image:', error);
          });
        console.log('Updated BBOX:', bboxString);
      });
    }
  }, [map, ii]);

  const [heatmapVisible, setHeatmapVisible] = useState(false); 


  const handleCheckboxChange = ( value) => {
 console.log(value);
 value.map((item) => {
  console.log(item);
  
        setHeatmapVisible(true);
     
 });

  };
  const [geologicUnitData, setGeologicUnitData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (map) {
      map.on("click", async function (ev) {
        const { lat, lng } = ev.latlng;
        
        console.log({ lat, lng });
        const zoom = map.getZoom();
        try {
          setIsLoading(true);
          const response = await axios.get(
            `https://macrostrat.org/api/v2/geologic_units/map?lat=${lng}&lng=${lat}`
          );
          setGeologicUnitData(response.data.success.data[0,1]);
          L.marker([lat, lng]).addTo(map);

          map.setView([lat, lng]);
  
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false); 
        }
      });
    }
  }, [map]);
  useEffect(() => {
    console.log(geologicUnitData); // Log the updated value
  }, [geologicUnitData]);

  return (

    <div className="relative">
      
      <button
        className={`bg-blue-500 text-white absolute right-0 py-2 px-4 rounded ${isVisible ? 'hidden sm:block' : 'block sm:hidden'}`}
        onClick={toggleVisibility}
      >
     <GiHamburgerMenu />
      </button>

      {isVisible && (
        <div className="w-64 absolute right-0 h-h-64 bg-white">
            <CheckTree
        data={data}
        defaultExpandAll
        className="text-right absolute right-0 h-full"
        onChange={handleCheckboxChange}

      />
      <div className='w-auto pl-14 top-[400px]'> 
     
      {geologicUnitData && (
  <div >
     {isLoading && (
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-75 bg-gray-900 flex justify-center items-center">
        <div className="text-white"> 
        درحال  دریافت 
         </div>
      </div>
    )}
    <p className='text-black'>
      Name:<span>
      {geologicUnitData.name}{geologicUnitData.lith}</span>
      </p>
      <p className='text-black'>
      Age:<span>
      {geologicUnitData.b_age}</span>
      </p>
      <p className='text-black'>
      Lithology:<span>
      {geologicUnitData.lith}
      </span>
      </p>
      <h4>Lines </h4>
      <p className='text-black'>
      Type:<span>
      {geologicUnitData.b_int_name}</span>
      </p>
      <p className='text-black'>
      Description:<span>
      {geologicUnitData.descrip}</span>
      </p>
  </div>
)}
    </div>
  
          <button
            className={`absolute top-2 right-2 text-gray-500 sm:hidden`}
            onClick={handleClose}
          >
      <IoMdClose />
          </button>
        </div>
      )}
       <div  style={{ width: mapWidth }}>
        <MapContainer
          style={{
            height: "100vh",
            width: "100%",
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
          <Marker position={[31.983292, 54.262546]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="زمین شناسی ایران ">
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
          {heatmapVisible && (
  <HeatmapLayer
    points={[{ geometry: { coordinates: [53.6880, 32.4279] } }]}
    // points={geojson.features}
    longitudeExtractor={(m) => m.geometry.coordinates[0]}
    latitudeExtractor={(m) => m.geometry.coordinates[1]}
    intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
    max={100}
    minOpacity={0.2}
  />
)}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* <LocationMarker /> */}
        </MapContainer>
     </div>
    </div>
  );
};

export default Map;