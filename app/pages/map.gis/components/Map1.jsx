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

import CheckTree from 'rsuite/CheckTree';
import "../../../../node_modules/rsuite/dist/rsuite-no-reset.min.css"
const data = [
  {
    value: "mammal",
    label: " اکتشاف",
    url: "https://www.google.com/search?q=mammal",
    children: [
      {
        value: "mineral potential",
        label: "پتانسیل مواد معدنی ",
        url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMBQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=7514065.6275,5009377.085,10018754.17,7514065.6275&WIDTH=512&HEIGHT=512",
        children: [
          {
            value: " Lead",
            label: "کانسار های تیپ سرب و روی با میزبان کبنات",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMBRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=10018754.17,5009377.085,12523442.7125,7514065.6275&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "golden",
            label: "  کانسار های طلای کوهزایی  ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMCQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=10018754.17,5009377.085,12523442.7125,7514065.6275&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "iron",
            label: " کانسار های تیب اکسید آهن  ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMCRA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=10018754.17,5009377.085,12523442.7125,7514065.6275&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "  manganese  ",
            label: " کانسار های تیپ منگنز بروندمی ",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMGQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,2504688.5425,7514065.6275,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: " manganeseStone ",
            label: " کانسار تیپ منیزیت وابسته به سنگ ها ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMCSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,2504688.5425,7514065.6275,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "porphyry",
            label: " کانسار های تیپ پورفیری  ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMGQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",

            children: []
          },
          {
            value: "mass-dependent skarn",
            label: " کانسار های تیپ اسکارن وابسته به توده ها  ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMCSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "Polymetallic gold",
            label: " کانسار های تیپ طلای پلی متال وابسته به توده ها ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQILRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: " Sulfide",
            label: " کانسار تیپ سولفید توده ایی ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMGRA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "aluminium ",
            label: "  کانسار های تیپ المینیوم وابسته به بوکسیت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQILRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "copper _ silver",
            label: "کانسا های مس _نقره  تیپ مانیتو ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMGSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "Striped polymetal",
            label: "کانسار های تیپ پلی متال رگه ایی گرمابی ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQIKQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "Sedimentary phosphate",
            label: " کانسار های تیپ فسفات رسوبی  ",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMBRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "Low sulfidation",
            label: "  کانسار ها تیپ اپی  ترمینال با سولفیداسیون پایین",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQIKRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: " Storage chromite ",
            label: "کانسار های تیپ کرومیت انبانه ایی ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMAQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: " Infiltrating skarn ",
            label: "کانسار های تیپ اسکارن وابسته به توده های نفوذی ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMDQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "Medium and high sulphidation",
            label: "کانسار های تیپ اپی ترمال با سلفیداسیون متوسط و بالا ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMDRA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "Sedimentary lead and zinc",
            label: "کانسار های تیپ سرب و روی روسوبی _بروندمی (سدکس)",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMASA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "Ferrous iron",
            label: "کانسار های تیپ آهن بروندمی ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMDSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },

        ]
      },
      {
        value: "Geochemical anomalies",
        label: "ناهنجاریهای ژئوشیمیایی",
        url: "https://www.google.com/search?q=canidae",
        children: [
          {
            value: " thorium ",
            label: " ناهنجای ژئوشیمیایی  توریوم ",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYKRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "roy",
            label: "ناهنجاری ژئوشیمیایی روی  ",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQcKQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "Zirconia",
            label: " ناهنجاری ژئوشیمیایی زیرکونیم ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQcKQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "titanium",
            label: " ناهنجاری ژئوشیمیایی تیتانیوم ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYKQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "ethereum",
            label: " ناهنجاری ژئوشیمیایی ایترییم  ",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQcLSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,2504688.5425,6261721.35625,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "barim",
            label: "  ناهنجاری ژئوشیمیایی باریم  ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQACRw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "beryllium",
            label: " ناهنجای ژئوشیمیایی بریلیوم ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQACSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "bismuth",
            label: " ناهنجاری ژئوشیمیایی بیسموت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQABQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "cadmium",
            label: " ناهنجای ژئوشیمیایی کادمیوم  ",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEASA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "sirim",
            label: " ناهنجاری ژئوشیمیایی سریم ",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEHQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "cobalt",
            label: "ناهنجاری ژئوشیمیایی کبالت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEHRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: " cesium",
            label: " ناهنجاری ژئوشیمیایی سزیم  ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEHRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: " chrome",
            label: " ناهنجاری ژئوشیمیایی کروم  ",
            url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEHQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512 ",
            children: []
          },
          {
            value: "calcium",
            label: " ناهنجاری ژئوشیمیایی کلسیم  ",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQABSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "brome",
            label: " ناهنجاری ژئوشیمیایی  برم ",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQABRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "arsenic",
            label: "ناهنجاری ژئوشیمیایی ارسنیک",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQABRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,2504688.5425,6261721.35625,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "gold",
            label: "ناهنجاری های ژئوشیمیایی طلا ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMERw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "bor",
            label: "ناهنجاری ژئوشیمیایی بور ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQABRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "yttrium",
            label: "ناهنجاری ژئوشیمیایی ایتریم ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQABRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "copper",
            label: "ناهنجاری ژئوشیمیایی مس ",
            url: "   http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEFQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "germanium",
            label: "ناهنجاری شیمیایی ژرمانیم ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEGRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,2504688.5425,7514065.6275,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "galium",
            label: "ناهنجاری ژئوشیمیایی گالیم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEGSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "iron",
            label: "ناهنجاری  ژئوشیمیایی آهن",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEGSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "fluorine",
            label: "ناهنجاری  ژئوشیمیایی فلوئور",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEFQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "europium",
            label: "ناهنجاری ژوشیمیایی یروپیم ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEFQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "hafnium",
            label: " ناهنجاری ژئوشیمیایی هافنیوم ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEKSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,2504688.5425,7514065.6275,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          }, {
            value: "mercury",
            label: "ناهنجاری ژوشیمیایی جیوه ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEKSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "potassium",
            label: "  ناهنجاری ژوشیمیایی پتاسیم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYDQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,2504688.5425,7514065.6275,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "latnan",
            label: "ناهنجاری ژوشیمیایی لاتنان",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYDQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,3757032.81375,5009377.085,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "lithium",
            label: "ناهنجاری ژئوشیمیایی لیتیم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYDSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,3757032.81375,5009377.085,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "magnesium",
            label: "ناهنجاری ژئوشیمیایی منیزیم",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYCQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,3757032.81375,5009377.085,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "manganese",
            label: "ناهنجاری ژئوشیمیایی منگنز",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYCQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,3757032.81375,5009377.085,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "molybdenum",
            label: "ناهنجاری ژئوشیمیایی مولیبدن",
            url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYCRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "sodium",
            label: "ناهنجاری ژئوشیمیایی سدیم",
            url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYCRw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "nivium",
            label: "ناهنجاری ژئوشیمیایی نیوییوم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYBRA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "neodymium",
            label: "ناهنجاری ژئوشیمیایی نئودیمیم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYBRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512 ",
            children: []
          },
          {
            value: "nickel",
            label: "ناهنجاری ژئوشیمیایی نیکل",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYBSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "esmeem",
            label: "ناهنجاری ژئوشیمیایی اسمیم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYAQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "phosphorus",
            label: "ناهنجاری ژئوشیمیایی فسفر",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYAQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "lead",
            label: "ناهنجاری ژئوشیمیایی سرب",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYARA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "praseodymium",
            label: "ناهنجاری ژئوشیمیایی پرازئودیمیم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYARg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "scandium",
            label: "ناهنجاری ژئوشیمیایی اسکاندیم",
            url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYGSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "thallium",
            label: "ناهنجاری ژئوشیمیایی تالیوم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYKRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "uranium",
            label: "ناهنجاری ژئوشیمیایی اورانیوم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQcASA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "vanadium",
            label: "ناهنجاری ژئوشیمیایی وانادیم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQcHQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "tungsten",
            label: "ناهنجاری ژئوشیمیایی تنگستن",
            url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQcHRw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "rubidim",
            label: "ناهنجاری ژئوشیمیایی روبیدیم",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYHQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512 ",
            children: []
          },
          {
            value: "rhenium",
            label: "ناهنجاری ژئوشیمیایی رنیوم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYHQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "ruthenium",
            label: "ناهنجاری ژئوشیمیاییوروتنیم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYGQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "sulfur",
            label: "ناهنجاری ژئوشیمیایی گوگرد",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYGRA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "antimony",
            label: "ناهنجاری ژئوشیمیایی آنتیموان",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYGRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "silicon",
            label: "ناهنجاری ژئوشیمیایی سیلسیم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYFRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "tin",
            label: "ناهنجاری ژئوشیمیایی قلع",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYFSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "strontium",
            label: "ناهنجاری ژئوشیمیایی استرانسیم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYEQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "dog",
            label: "ناهنجاری ژئوشیمیایی سلنیوم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYESQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "selenium",
            label: "ناهنجاری ژئوشیمیایی تاتنالم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYLRw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "tatnalam",
            label: "ناهنجاری ژئوشیمیایی تاتنالم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYLSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "tellurium",
            label: "ناهنجاری ژئوشیمیایی تلوریم",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYLSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "silver",
            label: "ناهنجاری ژئوشیمیایی نقره",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMFRw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "aluminum",
            label: "ناهنجاری ژئوشیمیایی المینیوم",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMFSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
        ]
      },
      {
        value: "mineralMap",
        label: " نگاشت کانی  ",
        url: "https://www.google.com/search?q=canidae",
        children: [
          {
            value: "chlorite",
            label: " کلریت",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwALQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "alonite",
            label: "الونیت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQHQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "hematite",
            label: "هماتیت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgUCQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: " xaosite ",
            label: "ژاروسیت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwAFQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "montmorillonite",
            label: "مونت موریلونیت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwAGRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "gothite",
            label: "گوتیت  ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwAERg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "pyrophyllite",
            label: "پیروفیلیت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwAHRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "kaolinite",
            label: "کائولینیت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgUDRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "silica",
            label: "سیلیس ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUGQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "muscovites",
            label: "موسکویت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgUDSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "epidote",
            label: "اپیدوت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwAFQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "elite",
            label: " ایلیت ",
            url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwAFQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
        ]
      },
      {
        value: "non-metallic minerals",
        label: " مواد معدنی غیر فلزی  ",
        url: "https://www.google.com/search?q=canidae",
        children: [
          {
            value: "barite1",
            label: "باریت ",
            url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgcKQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "bauxite1",
            label: "بوکسیت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwQKQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "phosphate1",
            label: "فسفات ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQDRw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "manzanita1",
            label: "منزنیت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUDQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "sodiumSulfate1",
            label: "سولفات سدیم ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUDQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "coal1",
            label: "زغال سنگ ",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgcKRA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "arsenic1",
            label: "آرسنیک ",
            url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwULQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "alonite1",
            label: "آلونیت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQHSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "celestine1",
            label: "سلستین ",
            url: "   http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQAQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "bettonite1",
            label: "بتتونیت ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQBRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "potash1",
            label: "پتاس ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQHSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512 ",
            children: []
          },
          {
            value: "talk1",
            label: "تالک ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUHRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "silica1",
            label: "سیلیس  ",
            url: "   http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQAQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "kaolin1",
            label: "کائولن ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUKRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "florin1",
            label: "فلورین ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQARQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "sulfur1",
            label: " گوگرد",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUFRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          }
        ]
      },

      {
        value: "metallicMinerals",
        label: " مواد معدنی فلزی ",
        url: "https://www.google.com/search?q=canidae",
        children: [
          {
            value: "copper2",
            label: "مس",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUAQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "lead and zinc2",
            label: "سرب و روی ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUHQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "tin and tungsten2",
            label: "قلع و تنگستن ",
            url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQARw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "manganese2",
            label: "منگنز  ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQCSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,2504688.5425,7514065.6275,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "titanium2",
            label: "تیتانیوم ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQCSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "mercury2",
            label: " جیوه",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUEQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "polymetal2",
            label: "پلی متال ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQHQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "iron2",
            label: "آهن ",
            url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUARA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },

          {
            value: "cobaltNickel2",
            label: "کبالت _نیکل ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwQERA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "antimony2",
            label: "آنتیموان ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwoDQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "chromite2",
            label: "کرومیت ",
            url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQCQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },
          {
            value: "gold2",
            label: "طلا ",
            url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQCQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
            children: []
          },

        ]
      },
      {
        value: "nationalScale",
        label: " مقیاس ملی  ",
        url: "https://www.google.com/search?q=canidae",
        children: [
          {
            value: "magneticRock",
            label: "عمق پی سنگ مغناطیسی",
            url: "https://www.google.com/search?q=dog",
            children: []
          },
          {
            value: "magneticAnomalies",
            label: "ناهنجاری های مغناطیسی ",
            url: "https://www.google.com/search?q=fox",
            children: []
          },
          {
            value: "clayMinerals",
            label: "پراکندگی کانی های رسی ",
            url: "https://www.google.com/search?q=fox",
            children: []
          },

        ]
      },
    ]
  },
  // {
  //   value: "reptile",
  //   label: "غیرآهنی",
  //   url: "https://www.google.com/search?q=reptile",
  //   children: [
  //     {
  //       value: "squamata",
  //       label: " غیر فلزی",
  //       url: "https://www.google.com/search?q=squamata",
  //       children: [
  //         {
  //           value: "lizard",
  //           label: " پتاس",
  //           url: "https://www.google.com/search?q=lizard"
  //         },
  //         {
  //           value: "snake",
  //           label: "میکا ",
  //           url: "https://www.google.com/search?q=snake"
  //         },
  //         {
  //           value: "gekko",
  //           label: "نمک",
  //           url: "https://www.google.com/search?q=gekko"
  //         }
  //       ]
  //     },
  //     {
  //       value: "expensive",
  //       label: "سنگ‌های گرانبها",
  //       url: "https://www.google.com/search?q=squamata",
  //       children: [
  //         {
  //           value: "golden",
  //           label: "طلا",
  //           url: "https://www.google.com/search?q=lizard"
  //         },
  //         {
  //           value: "diamond",
  //           label: "الماس ",
  //           url: "https://www.google.com/search?q=snake"
  //         },
  //         {
  //           value: "silver",
  //           label: "نقره",
  //           url: "https://www.google.com/search?q=gekko"
  //         }
  //       ]
  //     }
  //   ],
  // }
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
  const [mapWidth, setMapWidth] = React.useState('40%'); // Initial width for the map

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
        setIsVisible(false);
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

        const url = `http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=${ii}&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=${bboxString}&WIDTH=512&HEIGHT=512`;

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




  return (

    <div className="relative">
      <button
        className={`bg-blue-500 text-white absolute right-0 py-2 px-4 rounded ${isVisible ? 'hidden sm:block' : 'block sm:hidden'}`}
        onClick={toggleVisibility}
      >
        Toggle
      </button>

      {isVisible && (
        <div className="w-64 absolute right-0 h-h-64 bg-white">
          <CheckTree data={data} defaultExpandAll className="text-right absolute right-0 h-full" />
          <button
            className={`absolute top-2 right-2 text-gray-500 sm:hidden`}
            onClick={handleClose}
          >
            Close
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
     </div>
    </div>
  );
};

export default Map;