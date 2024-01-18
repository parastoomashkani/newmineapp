'use client'
import React, { useState, useMemo } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import TreeMenu, { ItemComponent } from "react-simple-tree-menu";
import "../../../../node_modules/react-simple-tree-menu/dist/main.css"
import { RxHamburgerMenu } from "react-icons/rx";
interface Node {
    key: string;
    label: string;
    url: string;
    nodes?: Node[];
  } 

  
const dataInArray: Node[] = [
    {
      key: "mammal",
      label: " اکتشاف",
      url: "https://www.google.com/search?q=mammal",
      nodes: [
        {
          key: "mineral potential",
          label: "پتانسیل مواد معدنی ",
          url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMBQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=7514065.6275,5009377.085,10018754.17,7514065.6275&WIDTH=512&HEIGHT=512",
          nodes: [
            {
              key: " Lead",
              label: "کانسار های تیپ سرب و روی با میزبان کبنات",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMBRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=10018754.17,5009377.085,12523442.7125,7514065.6275&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "golden",
              label: "  کانسار های طلای کوهزایی  ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMCQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=10018754.17,5009377.085,12523442.7125,7514065.6275&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "iron",
              label: " کانسار های تیب اکسید آهن  ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMCRA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=10018754.17,5009377.085,12523442.7125,7514065.6275&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "  manganese  ",
              label: " کانسار های تیپ منگنز بروندمی ",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMGQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,2504688.5425,7514065.6275,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: " manganeseStone ",
              label: " کانسار تیپ منیزیت وابسته به سنگ ها ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMCSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,2504688.5425,7514065.6275,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "porphyry",
              label: " کانسار های تیپ پورفیری  ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMGQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              
              nodes: []
            },
            {
              key: "mass-dependent skarn",
              label: " کانسار های تیپ اسکارن وابسته به توده ها  ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMCSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "Polymetallic gold",
              label: " کانسار های تیپ طلای پلی متال وابسته به توده ها ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQILRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: " Sulfide",
              label: " کانسار تیپ سولفید توده ایی ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMGRA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "aluminium ",
              label: "  کانسار های تیپ المینیوم وابسته به بوکسیت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQILRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "copper _ silver",
              label: "کانسا های مس _نقره  تیپ مانیتو ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMGSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "Striped polymetal",
              label: "کانسار های تیپ پلی متال رگه ایی گرمابی ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQIKQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "Sedimentary phosphate",
              label: " کانسار های تیپ فسفات رسوبی  ",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMBRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "Low sulfidation",
              label: "  کانسار ها تیپ اپی  ترمینال با سولفیداسیون پایین",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQIKRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: " Storage chromite ",
              label: "کانسار های تیپ کرومیت انبانه ایی ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMAQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: " Infiltrating skarn ",
              label: "کانسار های تیپ اسکارن وابسته به توده های نفوذی ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMDQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "Medium and high sulphidation",
              label: "کانسار های تیپ اپی ترمال با سلفیداسیون متوسط و بالا ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMDRA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "Sedimentary lead and zinc",
              label: "کانسار های تیپ سرب و روی روسوبی _بروندمی (سدکس)",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMASA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "Ferrous iron",
              label: "کانسار های تیپ آهن بروندمی ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMDSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
          
          ]
        },
        {
          key: "Geochemical anomalies",
          label: "ناهنجاریهای ژئوشیمیایی",
          url: "https://www.google.com/search?q=canidae",
          nodes: [
            {
              key: " thorium ",
              label: " ناهنجای ژئوشیمیایی  توریوم ",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYKRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "roy",
              label: "ناهنجاری ژئوشیمیایی روی  ",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQcKQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "Zirconia",
              label: " ناهنجاری ژئوشیمیایی زیرکونیم ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQcKQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "titanium",
              label: " ناهنجاری ژئوشیمیایی تیتانیوم ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYKQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "ethereum",
              label: " ناهنجاری ژئوشیمیایی ایترییم  ",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQcLSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,2504688.5425,6261721.35625,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "barim",
              label: "  ناهنجاری ژئوشیمیایی باریم  ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQACRw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "beryllium",
              label: " ناهنجای ژئوشیمیایی بریلیوم ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQACSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "bismuth",
              label: " ناهنجاری ژئوشیمیایی بیسموت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQABQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "cadmium",
              label: " ناهنجای ژئوشیمیایی کادمیوم  ",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEASA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "sirim",
              label: " ناهنجاری ژئوشیمیایی سریم ",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEHQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "cobalt",
              label: "ناهنجاری ژئوشیمیایی کبالت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEHRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: " cesium",
              label: " ناهنجاری ژئوشیمیایی سزیم  ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEHRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: " chrome",
              label: " ناهنجاری ژئوشیمیایی کروم  ",
              url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEHQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512 ",
              nodes: []
            },
            {
              key: "calcium",
              label: " ناهنجاری ژئوشیمیایی کلسیم  ",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQABSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "brome",
              label: " ناهنجاری ژئوشیمیایی  برم ",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQABRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "arsenic",
              label: "ناهنجاری ژئوشیمیایی ارسنیک",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQABRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,2504688.5425,6261721.35625,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "gold",
              label: "ناهنجاری های ژئوشیمیایی طلا ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMERw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "bor",
              label: "ناهنجاری ژئوشیمیایی بور ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQABRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "yttrium",
              label: "ناهنجاری ژئوشیمیایی ایتریم ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQABRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "copper",
              label: "ناهنجاری ژئوشیمیایی مس ",
              url: "   http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEFQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "germanium",
              label: "ناهنجاری شیمیایی ژرمانیم ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEGRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,2504688.5425,7514065.6275,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "galium",
              label: "ناهنجاری ژئوشیمیایی گالیم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEGSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "iron",
              label: "ناهنجاری  ژئوشیمیایی آهن",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEGSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "fluorine",
              label: "ناهنجاری  ژئوشیمیایی فلوئور",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEFQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,3757032.81375,7514065.6275,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "europium",
              label: "ناهنجاری ژوشیمیایی یروپیم ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEFQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "hafnium",
              label: " ناهنجاری ژئوشیمیایی هافنیوم ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEKSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,2504688.5425,7514065.6275,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },    {
              key: "mercury",
              label: "ناهنجاری ژوشیمیایی جیوه ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQEKSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "potassium",
              label: "  ناهنجاری ژوشیمیایی پتاسیم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYDQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,2504688.5425,7514065.6275,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "latnan",
              label: "ناهنجاری ژوشیمیایی لاتنان",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYDQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,3757032.81375,5009377.085,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "lithium",
              label: "ناهنجاری ژئوشیمیایی لیتیم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYDSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,3757032.81375,5009377.085,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "magnesium",
              label: "ناهنجاری ژئوشیمیایی منیزیم",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYCQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,3757032.81375,5009377.085,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "manganese",
              label: "ناهنجاری ژئوشیمیایی منگنز",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYCQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,3757032.81375,5009377.085,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "molybdenum",
              label: "ناهنجاری ژئوشیمیایی مولیبدن",
              url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYCRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "sodium",
              label: "ناهنجاری ژئوشیمیایی سدیم",
              url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYCRw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "nivium",
              label: "ناهنجاری ژئوشیمیایی نیوییوم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYBRA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "neodymium",
              label: "ناهنجاری ژئوشیمیایی نئودیمیم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYBRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512 ",
              nodes: []
            },
            {
              key: "nickel",
              label: "ناهنجاری ژئوشیمیایی نیکل",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYBSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "esmeem",
              label: "ناهنجاری ژئوشیمیایی اسمیم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYAQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "phosphorus",
              label: "ناهنجاری ژئوشیمیایی فسفر",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYAQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "lead",
              label: "ناهنجاری ژئوشیمیایی سرب",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYARA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "praseodymium",
              label: "ناهنجاری ژئوشیمیایی پرازئودیمیم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYARg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "scandium",
              label: "ناهنجاری ژئوشیمیایی اسکاندیم",
              url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYGSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "thallium",
              label: "ناهنجاری ژئوشیمیایی تالیوم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYKRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "uranium",
              label: "ناهنجاری ژئوشیمیایی اورانیوم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQcASA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "vanadium",
              label: "ناهنجاری ژئوشیمیایی وانادیم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQcHQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "tungsten",
              label: "ناهنجاری ژئوشیمیایی تنگستن",
              url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQcHRw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "rubidim",
              label: "ناهنجاری ژئوشیمیایی روبیدیم",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYHQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512 ",
              nodes: []
            },
            {
              key: "rhenium",
              label: "ناهنجاری ژئوشیمیایی رنیوم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYHQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "ruthenium",
              label: "ناهنجاری ژئوشیمیاییوروتنیم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYGQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "sulfur",
              label: "ناهنجاری ژئوشیمیایی گوگرد",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYGRA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "antimony",
              label: "ناهنجاری ژئوشیمیایی آنتیموان",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYGRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "silicon",
              label: "ناهنجاری ژئوشیمیایی سیلسیم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYFRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "tin",
              label: "ناهنجاری ژئوشیمیایی قلع",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYFSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "strontium",
              label: "ناهنجاری ژئوشیمیایی استرانسیم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYEQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "dog",
              label: "ناهنجاری ژئوشیمیایی سلنیوم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYESQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "selenium",
              label: "ناهنجاری ژئوشیمیایی تاتنالم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYLRw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "tatnalam",
              label: "ناهنجاری ژئوشیمیایی تاتنالم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYLSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "tellurium",
              label: "ناهنجاری ژئوشیمیایی تلوریم",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQYLSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "silver",
              label: "ناهنجاری ژئوشیمیایی نقره",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMFRw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "aluminum",
              label: "ناهنجاری ژئوشیمیایی المینیوم",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=BQMFSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
          ]
        },
        {
          key: "mineralMap",
          label: " نگاشت کانی  ",
          url: "https://www.google.com/search?q=canidae",
          nodes: [
            {
              key: "chlorite",
              label: " کلریت",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwALQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "alonite",
              label: "الونیت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQHQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "hematite",
              label: "هماتیت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgUCQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: " xaosite ",
              label: "ژاروسیت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwAFQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "montmorillonite",
              label: "مونت موریلونیت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwAGRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "gothite",
              label: "گوتیت  ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwAERg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "pyrophyllite",
              label: "پیروفیلیت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwAHRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "kaolinite",
              label: "کائولینیت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgUDRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "silica",
              label: "سیلیس ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUGQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "muscovites",
              label: "موسکویت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgUDSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "epidote",
              label: "اپیدوت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwAFQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "elite",
              label: " ایلیت ",
              url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwAFQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },     
          ]
        },
        {
          key: "non-metallic minerals",
          label: " مواد معدنی غیر فلزی  ",
          url: "https://www.google.com/search?q=canidae",
          nodes: [
            {
              key: "barite1",
              label: "باریت ",
              url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgcKQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "bauxite1",
              label: "بوکسیت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwQKQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "phosphate1",
              label: "فسفات ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQDRw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "manzanita1",
              label: "منزنیت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUDQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "sodiumSulfate1",
              label: "سولفات سدیم ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUDQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "coal1",
              label: "زغال سنگ ",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgcKRA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "arsenic1",
              label: "آرسنیک ",
              url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwULQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=5009377.085,3757032.81375,6261721.35625,5009377.085&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "alonite1",
              label: "آلونیت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQHSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "celestine1",
              label: "سلستین ",
              url: "   http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQAQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "bettonite1",
              label: "بتتونیت ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQBRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "potash1",
              label: "پتاس ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQHSA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512 ",
              nodes: []
            },
            {
              key: "talk1",
              label: "تالک ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUHRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "silica1",
              label: "سیلیس  ",
              url: "   http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQAQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "kaolin1",
              label: "کائولن ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUKRg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "florin1",
              label: "فلورین ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQARQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "sulfur1",
              label: " گوگرد",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUFRQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            }
          ]
        },
    
        {
          key: "metallicMinerals",
          label: " مواد معدنی فلزی ",
          url: "https://www.google.com/search?q=canidae",
          nodes: [
            {
              key: "copper2",
              label: "مس",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUAQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "lead and zinc2",
              label: "سرب و روی ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUHQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "tin and tungsten2",
              label: "قلع و تنگستن ",
              url: " http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQARw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "manganese2",
              label: "منگنز  ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQCSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=6261721.35625,2504688.5425,7514065.6275,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "titanium2",
              label: "تیتانیوم ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQCSQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "mercury2",
              label: " جیوه",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUEQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "polymetal2",
              label: "پلی متال ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQHQQ%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "iron2",
              label: "آهن ",
              url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwUARA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
      
            {
              key: "cobaltNickel2",
              label: "کبالت _نیکل ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwQERA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },  
            {
              key: "antimony2",
              label: "آنتیموان ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AwoDQg%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "chromite2",
              label: "کرومیت ",
              url: "  http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQCQA%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
            {
              key: "gold2",
              label: "طلا ",
              url: "http://webgis.ngdir.ir/admin/index.php/Guest/Tree/getLayer?ll=AgQCQw%3D%3D&LAYERS=l&TRANSPARENT=true&ALPHA=true&FORMAT=agg_png&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&SRS=EPSG%3A3857&BBOX=3757032.81375,2504688.5425,5009377.085,3757032.81375&WIDTH=512&HEIGHT=512",
              nodes: []
            },
          
          ]
        },
        {
          key: "nationalScale",
          label: " مقیاس ملی  ",
          url: "https://www.google.com/search?q=canidae",
          nodes: [
            {
              key: "magneticRock",
              label: "عمق پی سنگ مغناطیسی",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "magneticAnomalies",
              label: "ناهنجاری های مغناطیسی ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "clayMinerals",
              label: "پراکندگی کانی های رسی ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
          
          ]
        },
      ]
    },
    {
      key: "reptile",
      label: "غیرآهنی",
      url: "https://www.google.com/search?q=reptile",
      nodes: [
        {
          key: "squamata",
          label: " غیر فلزی",
          url: "https://www.google.com/search?q=squamata",
          nodes: [
            {
              key: "lizard",
              label: " پتاس",
              url: "https://www.google.com/search?q=lizard"
            },
            {
              key: "snake",
              label: "میکا ",
              url: "https://www.google.com/search?q=snake"
            },
            {
              key: "gekko",
              label: "نمک",
              url: "https://www.google.com/search?q=gekko"
            }
          ]
        },
        {
          key: "expensive",
          label: "سنگ‌های گرانبها",
          url: "https://www.google.com/search?q=squamata",
          nodes: [
            {
              key: "golden",
              label: "طلا",
              url: "https://www.google.com/search?q=lizard"
            },
            {
              key: "diamond",
              label: "الماس ",
              url: "https://www.google.com/search?q=snake"
            },
            {
              key: "silver",
              label: "نقره",
              url: "https://www.google.com/search?q=gekko"
            }
          ]
        }
      ],
    }
  ];
  
export default function Menu() {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const [data, setData] = useState<Node[]>(dataInArray);
  const [openNodes, setOpenNodes] = useState<string[]>(["mammal"]);

  const update = () => {
    setData((data) => [
      ...data,
      {
        key: "foo",
        label: "Foo",
        url: "https://www.google.com/search?q=foo",
        nodes: [
          {
            key: "bar",
            label: "Bar",
            url: "https://www.google.com/search?q=bar"
          }
        ]
      }
    ]);
    setOpenNodes(["mammal"]);
  };
  return (
    <div className="absolute  right-0 ">
    <Dropdown  >
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize  border	  rounded-b-lg  "
      
        >
          <RxHamburgerMenu size={28}  onClick={selectedValue}  />
          
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        disallowEmptySelection
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        // onSelectionChange={setSelectedKeys}
        className=" mr-0 flex justify-end   "
      >
        <DropdownItem key="text" className=" bg-white	 mr-1  w-87 ">  
          <TreeMenu
          data={data}
          resetOpenNodesOnDataUpdate
          initialOpenNodes={openNodes}
        >
          {({ items }) => (
            <ul className="tree-item-group	">
              {items.map(({ key, onClickItem, ...props }) => (
                <ItemComponent key={key} {...props}    />
              ))}
            </ul>
          )}
        </TreeMenu>
         </DropdownItem>
    
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}



