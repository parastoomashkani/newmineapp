import React from 'react';
import Image from 'next/image';
import Icon2 from '../../../public/images/icon 2.png'
import Mozayede from './componet/mozayede';

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
  return (
    <div className='bg-emerald-900'> 
  
    <div >
    <div className="container p-8 ">
       <div className='bg-green-950 grid grid-cols-3 gap-4 '> 
     
        <Image 
      src={Icon2}
      width={100}
      height={100}
      alt='مزایده '
    
      />
      <h2 className="font-bold text-7xl text-center text-slate-200 ">مزایده ها 
      </h2> 
   
</div>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 pt-6">
        {productsData.length===0 && <p> صفحه ایی پیدا نشود </p>}
        {productsData.map((item, index) => (
          <Mozayede
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            desc1={item.desc1}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
    </div>
  </div> </div>
  );
};

export default NewProducts ;