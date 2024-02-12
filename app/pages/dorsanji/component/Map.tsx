"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useState,useEffect } from "react";
import CheckTree from 'rsuite/CheckTree';
import "../../../../node_modules/rsuite/dist/rsuite-no-reset.min.css"
import { GiHamburgerMenu } from "react-icons/gi";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import HeatmapLayer from "react-leaflet-heatmap-layer-v3/lib/HeatmapLayer";
import { IoMdClose } from "react-icons/io";
import {geojson} from  "../component/atd"
import axios from 'axios';
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
            children: []
          },
          {
            value: "golden",
            label: "  کانسار های طلای کوهزایی  ",
            children: []
          },
          {
            value: "iron",
            label: " کانسار های تیب اکسید آهن  ",
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
  const [inputCount, setInputCount] = useState(2); 
  const [inputs, setInputs] = useState(Array.from({ length: inputCount }, (_, index) => index + 1));
  const [isVisible, setIsVisible] = useState(true);
  const [mapWidth, setMapWidth] = React.useState('87%');
  const [inputValues, setInputValues] = useState([]); 
const [selectedData, setSelectedData] = useState(null);
  const handleAddInput = () => {
    const newInputCount = inputCount + 1;
    setInputCount(newInputCount);
    setInputs(Array.from({ length: newInputCount }, (_, index) => index + 1));
  };
  const handleTreeSelection = (selected ) => {
    setSelectedData(selected);
  };
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setMapWidth(isVisible ? '90%' : '40%');
  };
  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  }; 
  const sendDataToApi = async () => {
    try {
      const response = await axios.post('your-api-endpoint', {
        inputValues,
        selectedData,
      });
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
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
  return (
    <div className="w-full h-[1024px] bg-white justify-center items-start inline-flex">

      <div className="w-[1534px] h-full relative" >

        <MapContainer
          style={
            {
              height: "100%",
              width: "100%"
            }
          }
          center={[31.983292, 54.262546]} zoom={7} scrollWheelZoom={true}>
            <HeatmapLayer
          fitBoundsOnLoad
          fitBoundsOnUpdate
          points={geojson.features}
          longitudeExtractor={m => m.geometry.coordinates[0]}
          latitudeExtractor={m => m.geometry.coordinates[1]}
          intensityExtractor={m => parseFloat(m.geometry.coordinates[1])}
        />
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
      </div>
      <div className="w-[350px] h-[1024px] pl-0.5 pb-[439px] flex-col justify-start items-center inline-flex">
        <div className="self-stretch h-[585px] pr-[5px] pb-[292px] flex-col justify-start items-center inline-flex">
        <h3 className="text-center p-2">اضافه کردن مختصات</h3>
      <div className="w-[346px] h-[293px] text-center top-[60px] relative flex-row-reverse justify-start items-start inline-flex">
        <div className="flex flex-col gap-6 w-72">
          {inputs.map((index) => (
            <div key={index} className="relative w-full min-w-[200px] h-10">
              <input
                 value={inputValues[index]}
                 onChange={(e) => handleInputChange(index, e.target.value)}
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                placeholder=" "
                type="text"
              />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                {index}
              </label>
            </div>
          ))}
          <hr />
          <button className="text-right" onClick={handleAddInput}>
            اضافه کردن
          </button>
</div>
 </div>
 <br />
 <br />
 <hr />
 <br />
 <br />
 <h6 className="border-b-2 border-t-2 p-8 " >
  انتخاب ماده معدنی 
 </h6>
 <br />
 
            <div className="w-[346px] h-[317px] relative" >
            {isVisible && (
        <div className="w-64 absolute  right-0 h-h-64 bg-white">
            {/* <button
        className={`bg-blue-500 text-white absolute right-0 py-2 px-4 rounded ${isVisible ? 'hidden sm:block' : 'block sm:hidden'}`}
        onClick={toggleVisibility}
      >
     <GiHamburgerMenu />
      </button> */}
          <CheckTree data={data}   onChange={handleTreeSelection}  defaultExpandAll className="text-right absolute right-0 h-full" />
          {/* <button
            className={`absolute top-2 right-2 text-gray-500 sm:hidden`}
            onClick={handleClose}
          >
      <IoMdClose />
          </button> */}
        </div>
      )}
              </div>
              <div className="relative top-[423px]" >
              <button onClick={sendDataToApi} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
 بررسی 
</span>
</button>
</div>
        </div>
      </div>
    </div>
    
  );
};

export default Map;