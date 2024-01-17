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
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "mass-dependent skarn",
              label: " کانسار های تیپ اسکارن وابسته به توده ها  ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "Polymetallic gold",
              label: " کانسار های تیپ طلای پلی متال وابسته به توده ها ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: " Sulfide",
              label: " کانسار تیپ سولفید توده ایی ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "aluminium ",
              label: "  کانسار های تیپ المینیوم وابسته به بوکسیت ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "copper _ silver",
              label: "کانسا های مس _نقره  تیپ مانیتو ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "Striped polymetal",
              label: "کانسار های تیپ پلی متال رگه ایی گرمابی ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "Sedimentary phosphate",
              label: " کانسار های تیپ فسفات رسوبی  ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "Low sulfidation",
              label: "  کانسار ها تیپ اپی  ترمینال با سولفیداسیون پایین",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: " Storage chromite ",
              label: "کانسار های تیپ کرومیت انبانه ایی ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: " Infiltrating skarn ",
              label: "کانسار های تیپ اسکارن وابسته به توده های نفوذی ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "Medium and high sulphidation",
              label: "کانسار های تیپ اپی ترمال با سلفیداسیون متوسط و بالا ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "Sedimentary lead and zinc",
              label: "کانسار های تیپ سرب و روی روسوبی _بروندمی (سدکس)",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "Ferrous iron",
              label: "کانسار های تیپ آهن بروندمی ",
              url: "https://www.google.com/search?q=dog",
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
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "roy",
              label: "ناهنجاری ژئوشیمیایی روی  ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "Zirconia",
              label: " ناهنجاری ژئوشیمیایی زیرکونیم ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "titanium",
              label: " ناهنجاری ژئوشیمیایی تیتانیوم ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "ethereum",
              label: " ناهنجاری ژئوشیمیایی ایترییم  ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "barim",
              label: "  ناهنجاری ژئوشیمیایی باریم  ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "beryllium",
              label: " ناهنجای ژئوشیمیایی بریلیوم ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "bismuth",
              label: " ناهنجاری ژئوشیمیایی بیسموت ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "cadmium",
              label: " ناهنجای ژئوشیمیایی کادمیوم  ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "sirim",
              label: " ناهنجاری ژئوشیمیایی سریم ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "cobalt",
              label: "ناهنجاری ژئوشیمیایی کبالت ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: " cesium",
              label: " ناهنجاری ژئوشیمیایی سزیم  ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: " chrome",
              label: " ناهنجاری ژئوشیمیایی کروم  ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "calcium",
              label: " ناهنجاری ژئوشیمیایی کلسیم  ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "brome",
              label: " ناهنجاری ژئوشیمیایی  برم ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "arsenic",
              label: "ناهنجاری ژئوشیمیایی ارسنیک",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "gold",
              label: "ناهنجاری های ژئوشیمیایی طلا ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "bor",
              label: "ناهنجاری ژئوشیمیایی بور ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "yttrium",
              label: "ناهنجاری ژئوشیمیایی ایتریم ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "copper",
              label: "ناهنجاری ژئوشیمیایی مس ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "germanium",
              label: "ناهنجاری شیمیایی ژرمانیم ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "galium",
              label: "ناهنجاری ژئوشیمیایی گالیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "iron",
              label: "ناهنجاری  ژئوشیمیایی آهن",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "fluorine",
              label: "ناهنجاری  ژئوشیمیایی فلوئور",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "europium",
              label: "ناهنجاری ژوشیمیایی یروپیم ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "hafnium",
              label: " ناهنجاری ژئوشیمیایی هافنیوم ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },    {
              key: "mercury",
              label: "ناهنجاری ژوشیمیایی جیوه ",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "potassium",
              label: "  ناهنجاری ژوشیمیایی پتاسیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "latnan",
              label: "ناهنجاری ژوشیمیایی لاتنان",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "lithium",
              label: "ناهنجاری ژئوشیمیایی لیتیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "magnesium",
              label: "ناهنجاری ژئوشیمیایی منیزیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "manganese",
              label: "ناهنجاری ژئوشیمیایی منگنز",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "molybdenum",
              label: "ناهنجاری ژئوشیمیایی مولیبدن",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "sodium",
              label: "ناهنجاری ژئوشیمیایی سدیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "nivium",
              label: "ناهنجاری ژئوشیمیایی نیوییوم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "neodymium",
              label: "ناهنجاری ژئوشیمیایی نئودیمیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "nickel",
              label: "ناهنجاری ژئوشیمیایی نیکل",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "esmeem",
              label: "ناهنجاری ژئوشیمیایی اسمیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "phosphorus",
              label: "ناهنجاری ژئوشیمیایی فسفر",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "lead",
              label: "ناهنجاری ژئوشیمیایی سرب",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "praseodymium",
              label: "ناهنجاری ژئوشیمیایی پرازئودیمیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "scandium",
              label: "ناهنجاری ژئوشیمیایی اسکاندیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "thallium",
              label: "ناهنجاری ژئوشیمیایی تالیوم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "uranium",
              label: "ناهنجاری ژئوشیمیایی اورانیوم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "vanadium",
              label: "ناهنجاری ژئوشیمیایی وانادیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "tungsten",
              label: "ناهنجاری ژئوشیمیایی تنگستن",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "rubidim",
              label: "ناهنجاری ژئوشیمیایی روبیدیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "rhenium",
              label: "ناهنجاری ژئوشیمیایی رنیوم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "ruthenium",
              label: "ناهنجاری ژئوشیمیاییوروتنیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "sulfur",
              label: "ناهنجاری ژئوشیمیایی گوگرد",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "antimony",
              label: "ناهنجاری ژئوشیمیایی آنتیموان",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "silicon",
              label: "ناهنجاری ژئوشیمیایی سیلسیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "tin",
              label: "ناهنجاری ژئوشیمیایی قلع",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "strontium",
              label: "ناهنجاری ژئوشیمیایی استرانسیم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "dog",
              label: "ناهنجاری ژئوشیمیایی سلنیوم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "selenium",
              label: "ناهنجاری ژئوشیمیایی تاتنالم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "tatnalam",
              label: "ناهنجاری ژئوشیمیایی تاتنالم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "tellurium",
              label: "ناهنجاری ژئوشیمیایی تلوریم",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "silver",
              label: "ناهنجاری ژئوشیمیایی نقره",
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "aluminum",
              label: "ناهنجاری ژئوشیمیایی المینیوم",
              url: "https://www.google.com/search?q=dog",
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
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "alonite",
              label: "الونیت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "hematite",
              label: "هماتیت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: " xaosite ",
              label: "ژاروسیت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "montmorillonite",
              label: "مونت موریلونیت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "gothite",
              label: "گوتیت  ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "pyrophyllite",
              label: "پیروفیلیت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "kaolinite",
              label: "کائولینیت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "silica",
              label: "سیلیس ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "muscovites",
              label: "موسکویت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "epidote",
              label: "اپیدوت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "elite",
              label: " ایلیت ",
              url: "https://www.google.com/search?q=fox",
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
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "bauxite1",
              label: "بوکسیت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "phosphate1",
              label: "فسفات ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "manzanita1",
              label: "منزنیت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "sodiumSulfate1",
              label: "سولفات سدیم ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "coal1",
              label: "زغال سنگ ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "arsenic1",
              label: "آرسنیک ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "alonite1",
              label: "آلونیت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "celestine1",
              label: "سلستین ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "bettonite1",
              label: "بتتونیت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "potash1",
              label: "پتاس ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "talk1",
              label: "تالک ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "silica1",
              label: "سیلیس  ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "kaolin1",
              label: "کائولن ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "florin1",
              label: "فلورین ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "sulfur1",
              label: " گوگرد",
              url: "https://www.google.com/search?q=fox",
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
              url: "https://www.google.com/search?q=dog",
              nodes: []
            },
            {
              key: "lead and zinc2",
              label: "سرب و روی ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "tin and tungsten2",
              label: "قلع و تنگستن ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "manganese2",
              label: "منگنز  ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "titanium2",
              label: "تیتانیوم ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "mercury2",
              label: " جیوه",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "polymetal2",
              label: "پلی متال ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "fox",
              label: "آهن ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "iron2",
              label: "آهن ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "cobaltNickel2",
              label: "کبالت _نیکل ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },  
            {
              key: "antimony2",
              label: "آنتیموان ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "chromite2",
              label: "کرومیت ",
              url: "https://www.google.com/search?q=fox",
              nodes: []
            },
            {
              key: "gold2",
              label: "طلا ",
              url: "https://www.google.com/search?q=fox",
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
          <RxHamburgerMenu size={28}  onClick={selectedValue} />
          
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
                <ItemComponent key={key} {...props} />
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



