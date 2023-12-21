import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        <div className="flex flex-col gap-4">
          <p className="text-6xl capitalize font-semibold">
        مهارت 
        <br />
            <span className="text-purple-500 pl-2 capitalize">خود را بالا </span> {" "}
            <br /> ببرید{" "}
            <span className="text-purple-500 pl-2 capitalize">برای پشبرد</span>{" "}
            شما <br />{" "}
            <span className="text-purple-500 pl-2 capitalize">و مسیر </span> شغلی 
          </p>
          <p className="text-lg text-gray-600">
          جدیدترین سیستم و مطالب آموزشی آنلاین را در اختیار شما قرار می دهد {" "}
            <br />
            که به رشد دانش شما کمک می کند.
          </p>
          <div className="flex gap-4">
            <button className="btn bg-purple-500 border-none capitalize btn-lg">
            شروع کنید
            </button>
            <button className="btn bg-purple-100 text-purple-500 border-none capitalize btn-lg ">
            آزمایشی رایگان
            </button>
          </div>
          <div className="flex gap-6 items-center pt-6">
            <div className="flex gap-2 items-center">
                {/* <img src="/assets/public.svg" alt="" /> */}
                <p>Public Speaking</p>
            </div>
            <div className="flex gap-2 items-center">
                {/* <img src="/assets/career.svg" alt="" /> */}
                <p>Career Oriented</p>
            </div>
            <div className="flex gap-2 items-center">
                {/* <img src="/assets/think.svg" alt="" /> */}
                <p>Creative Thinking</p>
            </div>
          </div>
        </div>

        <img src="/assets/hero.png" alt="" />
      </div>
      {/* <img src="/assets/company.svg" alt="" /> */}
    </div>
  );
};

export default Hero;