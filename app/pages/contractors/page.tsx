import React from 'react'
import Contractors from './component/contractors'
const ContratorData = [
  {
    img: "/images/engineerMen.jpg",
    name: "محمد  اسلامی ",
    desc: " سلام من محمد اسلامی هستم با 8 سال سابقه کار در ابطه با معدن دارای مدرک کارشناسی ارشد از دانشگاه بریتیش کلنبیا از ونکور کانادا .سه سال سابقه کار در معادن طلا افریقا ",
    desc1: " در رزومه کاری من 2 سال کار در معدن  الماس سه سال در معدن طلا در افریقا بودم . به ابزار حفاری کاملا اشنا ام و میتونم به شما برای پیدا کردن  ابزار مورد نیاز کمک کنم همچنین قررارداد همکاری با چند دانشگاه بین المللی برای پیدا کردن کانی های کمیاب را در حوضه کاری خود دارم با اعتماد به من ضرر نخواهید کرد ",
    expertise: "استخراج ",
    price: "30$",
    email: "p.exampel@gmai.com",
    phone: "098930...1213",
    skils:"....",
    Company:"معدن گلاب کوه",
    city:"تهران"
  },
  {
    img: "/images/engineerWomen.jpg",
    name: "زهرا  نیکو ",
    desc: "من زهرا نیکو هستم 4 ساله در زمینه شناسایی سنگ های معدنی تجربه کار دارم. مدرک کارشناسی ارشد در حوضه کانی از دانشگاه تهران سال 1399 هستم . ",
    desc1: " در معادن نمک  یزد 1 سال سابقه کار دارم در سه جشنواره برنده جایزه شدم ",
    expertise: "فراوری ",
    price: "20$",
    email: "p.exampel@gmail .com",
    phone: "098930....1213",
    skils:"....",
    Company:"معدن گلاب کوه",
    city:"تهران"

  },
  {
    img: "/images/engineerMen.jpg",
    name: "محمد  اسلامی ",
    desc: " سلام من محمد اسلامی هستم با 8 سال سابقه کار در ابطه با معدن دارای مدرک کارشناسی ارشد از دانشگاه بریتیش کلنبیا از ونکور کانادا .سه سال سابقه کار در معادن طلا افریقا ",
    desc1: " در رزومه کاری من 2 سال کار در معدن  الماس سه سال در معدن طلا در افریقا بودم . به ابزار حفاری کاملا اشنا ام و میتونم به شما برای پیدا کردن  ابزار مورد نیاز کمک کنم همچنین قررارداد همکاری با چند دانشگاه بین المللی برای پیدا کردن کانی های کمیاب را در حوضه کاری خود دارم با اعتماد به من ضرر نخواهید کرد ",
    expertise: "استخراج ",
    price: "30$",
    email: "p.exampel@gmai.com",
    phone: "098930...1213",
    skils:"....",
    Company:"معدن گلاب کوه",
    city:"تهران"

    
  },
  {
    img: "/images/engineerWomen.jpg",
    name: "زهرا  نیکو ",
    desc: "من زهرا نیکو هستم 4 ساله در زمینه شناسایی سنگ های معدنی تجربه کار دارم. مدرک کارشناسی ارشد در حوضه کانی از دانشگاه تهران سال 1399 هستم . ",
    desc1: " در معادن نمک  یزد 1 سال سابقه کار دارم در سه جشنواره برنده جایزه شدم ",
    expertise: "فراوری ",
    price: "20$",
    email: "p.exampel@gmail .com",
    phone: "098930....1213",
    skils:"....",
    Company:"معدن گلاب کوه",
    city:"تهران"
  },
  {
    img: "/images/engineerMen.jpg",
    name: "محمد  اسلامی ",
    desc: " سلام من محمد اسلامی هستم با 8 سال سابقه کار در ابطه با معدن دارای مدرک کارشناسی ارشد از دانشگاه بریتیش کلنبیا از ونکور کانادا .سه سال سابقه کار در معادن طلا افریقا ",
    desc1: " در رزومه کاری من 2 سال کار در معدن  الماس سه سال در معدن طلا در افریقا بودم . به ابزار حفاری کاملا اشنا ام و میتونم به شما برای پیدا کردن  ابزار مورد نیاز کمک کنم همچنین قررارداد همکاری با چند دانشگاه بین المللی برای پیدا کردن کانی های کمیاب را در حوضه کاری خود دارم با اعتماد به من ضرر نخواهید کرد ",
    expertise: "استخراج ",
    price: "30$",
    email: "p.exampel@gmai.com",
    phone: "098930...1213",
    skils:"....",
    Company:"معدن گلاب کوه",
    city:"تهران"
  },
  {
    img: "/images/engineerWomen.jpg",
    name: "زهرا  نیکو ",
    desc: "من زهرا نیکو هستم 4 ساله در زمینه شناسایی سنگ های معدنی تجربه کار دارم. مدرک کارشناسی ارشد در حوضه کانی از دانشگاه تهران سال 1399 هستم . ",
    desc1: " در معادن نمک  یزد 1 سال سابقه کار دارم در سه جشنواره برنده جایزه شدم ",
    expertise: "فراوری ",
    price: "20$",
    email: "p.exampel@gmail .com",
    phone: "098930....1213",
    skils:"....",
    Company:"معدن گلاب کوه",
    city:"تهران"
  },
  {
    img: "/images/engineerMen.jpg",
    name: "محمد  اسلامی ",
    desc: " سلام من محمد اسلامی هستم با 8 سال سابقه کار در ابطه با معدن دارای مدرک کارشناسی ارشد از دانشگاه بریتیش کلنبیا از ونکور کانادا .سه سال سابقه کار در معادن طلا افریقا ",
    desc1: " در رزومه کاری من 2 سال کار در معدن  الماس سه سال در معدن طلا در افریقا بودم . به ابزار حفاری کاملا اشنا ام و میتونم به شما برای پیدا کردن  ابزار مورد نیاز کمک کنم همچنین قررارداد همکاری با چند دانشگاه بین المللی برای پیدا کردن کانی های کمیاب را در حوضه کاری خود دارم با اعتماد به من ضرر نخواهید کرد ",
    expertise: "استخراج ",
    price: "30$",
    email: "p.exampel@gmai.com",
    phone: "098930...1213",
    skils:"....",
    Company:"معدن گلاب کوه",
    city:"تهران"
  },
  {
    img: "/images/engineerWomen.jpg",
    name: "زهرا  نیکو ",
    desc: "من زهرا نیکو هستم 4 ساله در زمینه شناسایی سنگ های معدنی تجربه کار دارم. مدرک کارشناسی ارشد در حوضه کانی از دانشگاه تهران سال 1399 هستم . ",
    desc1: " در معادن نمک  یزد 1 سال سابقه کار دارم در سه جشنواره برنده جایزه شدم ",
    expertise: "فراوری ",
    price: "20$",
    email: "p.exampel@gmail .com",
    phone: "098930....1213",
    skils:"....",
    Company:"معدن گلاب کوه",
    city:"تهران"
  },
  {
    img: "/images/engineerMen.jpg",
    name: "محمد  اسلامی ",
    desc: " سلام من محمد اسلامی هستم با 8 سال سابقه کار در ابطه با معدن دارای مدرک کارشناسی ارشد از دانشگاه بریتیش کلنبیا از ونکور کانادا .سه سال سابقه کار در معادن طلا افریقا ",
    desc1: " در رزومه کاری من 2 سال کار در معدن  الماس سه سال در معدن طلا در افریقا بودم . به ابزار حفاری کاملا اشنا ام و میتونم به شما برای پیدا کردن  ابزار مورد نیاز کمک کنم همچنین قررارداد همکاری با چند دانشگاه بین المللی برای پیدا کردن کانی های کمیاب را در حوضه کاری خود دارم با اعتماد به من ضرر نخواهید کرد ",
    expertise: "استخراج ",
    price: "30$",
    email: "p.exampel@gmai.com",
    phone: "098930...1213",
    skils:"....",
    Company:"معدن گلاب کوه",
    city:"تهران"
  },
  {
    img: "/images/engineerWomen.jpg",
    name: "زهرا  نیکو ",
    desc: "من زهرا نیکو هستم 4 ساله در زمینه شناسایی سنگ های معدنی تجربه کار دارم. مدرک کارشناسی ارشد در حوضه کانی از دانشگاه تهران سال 1399 هستم . ",
    desc1: " در معادن نمک  یزد 1 سال سابقه کار دارم در سه جشنواره برنده جایزه شدم ",
    expertise: "فراوری ",
    price: "20$",
    email: "p.exampel@gmail .com",
    phone: "098930....1213",
    skils:"....",
    Company:"معدن گلاب کوه",
city:"تهران"

  },

];

const page = () => {
  return (
    <div className=' min-h-screen from-pink-200 via-purple-300 to-blue-500 bg-gradient-to-br '>
    <div className='flex items-center justify-center w-10/12 py-8 ml-2 mr-2'>
        <div className="grid grid-cols-1 gap-2 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3  lg:grid-col-3 xl:grid-cols-3  xl:gap-x-20 xl:gap-y-10 pt-6">

        {ContratorData.length === 0 && <p> صفحه ایی پیدا نشود </p>}
          {ContratorData.map((item, index) => (
            <Contractors
            key={index}
            img={item.img}
            name={item.name}
            desc={item.desc}
            desc1={item.desc1}
            expertise={item.expertise}
            price={item.price}
            email={item.email}
            phone ={item.phone}
            skils={item.skils}
            Company={item.Company}
            city={item.city}
               />
            ))}
      </div>
    </div>
    </div>
  )
}

export default page