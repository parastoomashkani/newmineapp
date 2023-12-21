import React from 'react'
import Image from 'next/image';
import EEE from "../../../public/images/Annotation 2023-12-03 214500.png";

const page = () => {
  return (
    <div>

        <div className="w-full border-b flex flex-row flex-wrap items-center p-1">
            <div className="w-1/5 p-3">
            </div>
            <div className="w-3/5 p-3 text-right">
                <center>گروه تجهيزات و ماشين آلات</center>
            </div>
            
        </div>

        <div className="w-full md:w-2/5 text-right mx-auto">
          
            <div className="w-full text-gray-800 text-right text-4xl px-5 font-bold leading-none">
            دریل واگن یا
         یک نوع ماشین حفاری 
         
            </div>
            
            <div className="w-full text-gray-500 px-5 pb-5 pt-2">
            در این مقاله دستگاه‌ها و تجهیزاتی که در پروژه‌های معدن مورد استفاده قرار میگیرند توضیح داده می‌شود.
            </div>
            
            <div className="mx-5">
            <Image src={EEE} height={500} width={800} alt="Placeholder Image"  />

            </div>
            
            <div className="w-full text-gray-600 text-normal mx-5">
                <p className="border-b py-3"> این نوع دریل واگن‌ ها معمولاً برای حفر چاه‌ های زمینی در صنایع نفت و گاز طبیعی، معدنی و آب استفاده می‌ شوند.</p>
            </div>
            
          
            
            <div className="px-5 w-full mx-auto">
                <p className="my-5">
ابزار انفجار یکی از عناصر اصلی صنعت معدن است. از این ابزارها برای شکستن مواد بزرگ از طریق استفاده از مواد منفجره برای جدا کردن کالای مورد نظر از مواد زاید استفاده می‌شود. برای به حداقل رساندن هزینه‌های حمل و نقل مواد، دکل‌های مته بدون سرنشین سوراخ‌های از پیش تعیین شده را روی صورت انفجار سوراخ می‌کنند. این تضمین می‌کند که یک بخش از اندازه خاص از مواد به دست می‌آید و بار اضافی آزاد شده را تا حد ممکن به حداقل می‌رساند.</p>
                <p className="my-5">
                پس از اتمام این فرآیند، سنگ‌های منفجر شده و مواد دیگر توسط بیل مکانیکی بازیابی می‌شوند. سپس مواد به یک سیستم انتقال مرکزی منتقل می‌شوند که در آنجا به سطح یا از طریق سیستم پرش و بالابر منتقل می‌شوند. ابزارهای انفجار نیز برای عملیات استخراج از گودال باز لازم است. عملیات موفقیت آمیز معدن به طرح‌های انفجار خوب متکی است زیرا مواد منفجره بیش از حد و عملکرد نادرست می‌تواند به آسیب ساختاری سنگ‌ها کمک کند و منجر به غارنوردی ناخواسته شود.
</p>
            </div>
        </div>
        
        
   </div>
  )
}

export default page