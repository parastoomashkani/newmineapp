"use client"
import React from 'react';
import Mozayede from './componet/list/page';
import { useRouter } from 'next/navigation';

const productsData = [
    {
      img:"/images/construction-site-featuring-front-dumper-truck.jpg",
      title: "معدن زغال سنگ ",
      desc: " ذخایر معدنی و زیر زمینی بسیار غنی است که با دارا بودن ۳۷ بیلیون تن ذخایر کشف شده، ۵۷ بیلیون تن ذخایر بالقوه و حدود ۶۸ نوع ماده معدنی غیرنفتی در بین ۱۵ قدرت معدنی جهان قرار گرفته است. ",
      desc1:"پیریت: نام پیریت از لغت یونانی پیر به معنی آتش اخذ شده‌ است و بر اثر برخورد آن با سنگ‌های دیگر، جرقه تولید می‌شود. این سنگ آهن رایج‌ترین سولفید آهن می‌باشد.",
      rating: 4,
      price: "450.00",
      
    },
    {
      img: "/images/rough-surface-stone.jpg",
      title: "معدن آهن ",
      desc: "ذخایر معدنی و زیر زمینی بسیار غنی است که با دارا بودن ۳۷ بیلیون تن ذخایر کشف شده، ۵۷ بیلیون تن ذخایر بالقوه و حدود ۶۸ نوع ماده معدنی غیرنفتی در بین ۱۵ قدرت معدنی جهان قرار گرفته است. ",
      desc1:"پیریت: نام پیریت از لغت یونانی پیر به معنی آتش اخذ شده‌ است و بر اثر برخورد آن با سنگ‌های دیگر، جرقه تولید می‌شود. این سنگ آهن رایج‌ترین سولفید آهن می‌باشد.",
      rating: 4,
      price: "100.00",
    },
    {
      img: "/images/omid-roshan-Btc4MDN0MtU-unsplash.jpg",
      title: "معدن طلا ",
      desc: " 2 ذخایر معدنی و زیر زمینی بسیار غنی است که با دارا بودن ۳۷ بیلیون تن ذخایر کشف شده، ۵۷ بیلیون تن ذخایر بالقوه و حدود ۶۸ نوع ماده معدنی غیرنفتی در بین ۱۵ قدرت معدنی جهان قرار گرفته است. ",
      desc1:"پیریت: نام پیریت از لغت یونانی پیر به معنی آتش اخذ شده‌ است و بر اثر برخورد آن با سنگ‌های دیگر، جرقه تولید می‌شود. این سنگ آهن رایج‌ترین سولفید آهن می‌باشد.",
      rating: 5,
      price: "5500.00",
    },
    {
      img: "/images/male-worker-with-bulldozer-sand-quarry.jpg",
      title: "معدن الماس ",
      desc: " ذخایر معدنی و زیر زمینی بسیار غنی است که با دارا بودن ۳۷ بیلیون تن ذخایر کشف شده، ۵۷ بیلیون تن ذخایر بالقوه و حدود ۶۸ نوع ماده معدنی غیرنفتی در بین ۱۵ قدرت معدنی جهان قرار گرفته است. ",
      desc1:"پیریت: نام پیریت از لغت یونانی پیر به معنی آتش اخذ شده‌ است و بر اثر برخورد آن با سنگ‌های دیگر، جرقه تولید می‌شود. این سنگ آهن رایج‌ترین سولفید آهن می‌باشد.",
      rating: 3,
      price: "2500.00",
    },
    {
      img: "/images/stone-wall-background.jpg",
      title: "معدن نمک ",
      desc: "ذخایر معدنی و زیر زمینی بسیار غنی است که با دارا بودن ۳۷ بیلیون تن ذخایر کشف شده، ۵۷ بیلیون تن ذخایر بالقوه و حدود ۶۸ نوع ماده معدنی غیرنفتی در بین ۱۵ قدرت معدنی جهان قرار گرفته است. ",
      desc1:"پیریت: نام پیریت از لغت یونانی پیر به معنی آتش اخذ شده‌ است و بر اثر برخورد آن با سنگ‌های دیگر، جرقه تولید می‌شود. این سنگ آهن رایج‌ترین سولفید آهن می‌باشد.",
      rating: 4,
      price: "45.00",
    },
    {
      img: "/images/person-working-building-construction.jpg",
      title: "معدن مس ",
      desc:"ذخایر معدنی و زیر زمینی بسیار غنی است که با دارا بودن ۳۷ بیلیون تن ذخایر کشف شده، ۵۷ بیلیون تن ذخایر بالقوه و حدود ۶۸ نوع ماده معدنی غیرنفتی در بین ۱۵ قدرت معدنی جهان قرار گرفته است. ",
      desc1:"پیریت: نام پیریت از لغت یونانی پیر به معنی آتش اخذ شده‌ است و بر اثر برخورد آن با سنگ‌های دیگر، جرقه تولید می‌شود. این سنگ آهن رایج‌ترین سولفید آهن می‌باشد.",
      rating: 3,
      price: "580.00",
    },
    {
      img: "/images/rough-surface-stone.jpg",
      title: "معدن آهن ",
      desc: "ذخایر معدنی و زیر زمینی بسیار غنی است که با دارا بودن ۳۷ بیلیون تن ذخایر کشف شده، ۵۷ بیلیون تن ذخایر بالقوه و حدود ۶۸ نوع ماده معدنی غیرنفتی در بین ۱۵ قدرت معدنی جهان قرار گرفته است. ",
      desc1:"پیریت: نام پیریت از لغت یونانی پیر به معنی آتش اخذ شده‌ است و بر اثر برخورد آن با سنگ‌های دیگر، جرقه تولید می‌شود. این سنگ آهن رایج‌ترین سولفید آهن می‌باشد.",
      rating: 4,
      price: "100.00",
    },
    {
      img: "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
      title: "معدن زمرد ",
      desc: "ذخایر معدنی و زیر زمینی بسیار غنی است که با دارا بودن ۳۷ بیلیون تن ذخایر کشف شده، ۵۷ بیلیون تن ذخایر بالقوه و حدود ۶۸ نوع ماده معدنی غیرنفتی در بین ۱۵ قدرت معدنی جهان قرار گرفته است. ",
      desc1:"پیریت: نام پیریت از لغت یونانی پیر به معنی آتش اخذ شده‌ است و بر اثر برخورد آن با سنگ‌های دیگر، جرقه تولید می‌شود. این سنگ آهن رایج‌ترین سولفید آهن می‌باشد.",
      rating: 4,
      price: "120.00",
    },
    {
      img: "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
      title: "معدن زمرد ",
      desc: "ذخایر معدنی و زیر زمینی بسیار غنی است که با دارا بودن ۳۷ بیلیون تن ذخایر کشف شده، ۵۷ بیلیون تن ذخایر بالقوه و حدود ۶۸ نوع ماده معدنی غیرنفتی در بین ۱۵ قدرت معدنی جهان قرار گرفته است. ",
      desc1:"پیریت: نام پیریت از لغت یونانی پیر به معنی آتش اخذ شده‌ است و بر اثر برخورد آن با سنگ‌های دیگر، جرقه تولید می‌شود. این سنگ آهن رایج‌ترین سولفید آهن می‌باشد.",
      rating: 4,
      price: "120.00",
    },
    {
      img: "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
      title: "معدن زمرد ",
      desc: "ذخایر معدنی و زیر زمینی بسیار غنی است که با دارا بودن ۳۷ بیلیون تن ذخایر کشف شده، ۵۷ بیلیون تن ذخایر بالقوه و حدود ۶۸ نوع ماده معدنی غیرنفتی در بین ۱۵ قدرت معدنی جهان قرار گرفته است. ",
      desc1:"پیریت: نام پیریت از لغت یونانی پیر به معنی آتش اخذ شده‌ است و بر اثر برخورد آن با سنگ‌های دیگر، جرقه تولید می‌شود. این سنگ آهن رایج‌ترین سولفید آهن می‌باشد.",
      rating: 4,
      price: "120.00",
    },
    {
      img: "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
      title: "معدن زمرد ",
      desc: "ذخایر معدنی و زیر زمینی بسیار غنی است که با دارا بودن ۳۷ بیلیون تن ذخایر کشف شده، ۵۷ بیلیون تن ذخایر بالقوه و حدود ۶۸ نوع ماده معدنی غیرنفتی در بین ۱۵ قدرت معدنی جهان قرار گرفته است. ",
      desc1:"پیریت: نام پیریت از لغت یونانی پیر به معنی آتش اخذ شده‌ است و بر اثر برخورد آن با سنگ‌های دیگر، جرقه تولید می‌شود. این سنگ آهن رایج‌ترین سولفید آهن می‌باشد.",
      rating: 4,
      price: "120.00",
    },
    {
      img: "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
      title: "معدن زمرد ",
      desc: "ذخایر معدنی و زیر زمینی بسیار غنی است که با دارا بودن ۳۷ بیلیون تن ذخایر کشف شده، ۵۷ بیلیون تن ذخایر بالقوه و حدود ۶۸ نوع ماده معدنی غیرنفتی در بین ۱۵ قدرت معدنی جهان قرار گرفته است. ",
      desc1:"پیریت: نام پیریت از لغت یونانی پیر به معنی آتش اخذ شده‌ است و بر اثر برخورد آن با سنگ‌های دیگر، جرقه تولید می‌شود. این سنگ آهن رایج‌ترین سولفید آهن می‌باشد.",
      rating: 4,
      price: "120.00",
    },
  ];
const NewProducts = () => {
  const router = useRouter();
  const formList=()=>{
    router.push('/pages/mozayede/form');
  }
  const showSimpel=()=>{
    router.push('/pages/mozayede/componet/simpel');
  }
  const showList=()=>{
    router.push('/pages/mozayede/componet/list');
  }
  return (
    <div className='bg-slate-50'> 
  
    <div >
    <div className="container p-8 "> 
   
       <div className='  gap-4 space-y-4   md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center'> 
   <h2 className="font-bold text-7xl text-center text-slate-600 ">مزایده ها     </h2> 
    
    
  
   
</div>
      <div className="grid grid-cols-1 place-items-center xl:grid-cols-3  pt-10">
  
      
<button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"  onClick={showSimpel}>
  نمایش ساده 
</button>
<button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={showList}>
لیست مزایده ها 
  </button> 
    <button  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
       onClick={formList}>
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        ثبت  مزایده
    </span> 
     </button>
     </div>
      </div>
    </div>
  </div> 
  );
};

export default NewProducts ;
