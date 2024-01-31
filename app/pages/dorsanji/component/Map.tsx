"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useState,useEffect } from "react";
import CheckTree from 'rsuite/CheckTree';
import "../../../../node_modules/rsuite/dist/rsuite-no-reset.min.css"
import { GiHamburgerMenu } from "react-icons/gi";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { IoMdClose } from "react-icons/io";

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
  const [inputCount, setInputCount] = useState(2); 
  const [inputs, setInputs] = useState(Array.from({ length: inputCount }, (_, index) => index + 1));
  const [isVisible, setIsVisible] = useState(true);
  const [mapWidth, setMapWidth] = React.useState('87%');
  const handleAddInput = () => {
    const newInputCount = inputCount + 1;
    setInputCount(newInputCount);
    setInputs(Array.from({ length: newInputCount }, (_, index) => index + 1));
  };
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
          center={[31.983292, 54.262546]} zoom={7} scrollWheelZoom={false}>
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
          <CheckTree data={data} defaultExpandAll className="text-right absolute right-0 h-full" />
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
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Cyan to blue
</span>
</button>
</div>
        </div>
      </div>
    </div>
    
  );
};

export default Map;