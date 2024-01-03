"use client"


import React, { useState } from 'react';
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import('./component/map/map'), {
  ssr: false
});

const Form = () => {

const [title,setTitle]=useState("");
const [note,setNote]=useState("");
const [firstName,setFirstName]=useState("");
const [familyName,setFamilyName]=useState("");
const [email,setEmail]=useState("");
const [address,setAddress]=useState("");
const [city,setCity]=useState("");
const [state,setState]=useState("");
const [photo, setPhoto] = useState(null);




const handleChange = (e:any) => {
  setTitle(e.target.value);

}
 const handleChangeNote=(e:any)=>{
    setNote(e.target.value);
}
const handleChangeFirstName =(e:any)=>{
  setFirstName(e.target.value);
}
const handleChangeFamilyName=(e:any)=>{
    setFamilyName(e.target.value);
}
const handleChangeEmail=(e:any)=>{
    setEmail(e.target.value);
}
const handleChangeAddress =(e:any)=>{
setAddress(e.target.value);
}
const handleChangeCity=(e:any)=>{
setCity(e.target.value);
}
const handleChangeState=(e:any)=>{
  setState(e.target.value);
}

const handleFileChange = (e:any) => {
  const file = e.target.files[0];
  setPhoto(file);
};

 const handelsubmit=( e:any)=>{
e.preventDefault();


const formData = {
  title,
  note,
  firstName,
  familyName,
  email,
  address,
  city,
  state,
  photo,

 }

 const jsonData = JSON.stringify(formData);

 console.log("Form Data (JSON):", jsonData);

 setTitle("");
 setNote("");
 setFirstName("");
 setFamilyName("");
 setEmail("");
 setAddress("");
 setCity("");
 setState("");
 setPhoto(null);

}
  return (
    <div className='bg-slate-200'>
    <div className='container mx-auto px-4 bg-white  w-full m-8  '>
    {/* action={addItem}to form */}
<form  className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-slate-300	 p-6 shadow-xl lg:p-10" onSubmit={handelsubmit} >
  <div className="space-y-12  ">
    <div className="border-b border-gray-900/10 pb-12 ">
      <h2 className=" font-semibold leading-7 text-gray-900  text-center text-6xl">   ثبت {""}<span className='text-indigo-500'>
        آگهی 
        </span>  </h2>
      <p className=" text-sm leading-6 text-gray-600 text-center mt-10">
      این اطلاعات به صورت عمومی نمایش داده می شود، بنابراین مراقب آنچه به اشتراک می گذارید باشید.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="titel" className="block text-lg font-medium leading-6 text-gray-900 ml-20 " >
            عنوان
           
          </label>
       
   
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input type="text" value={title} onChange={handleChange} name="username" id="titel" autoComplete="titel" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="  معدن طلا "/>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="about"   className="block text-lg font-medium leading-6 text-gray-900 ml-20">
            توضیحات 
          </label>
          <div className="mt-2">
            <textarea id="about" name="about"  value={note} onChange={handleChangeNote} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
       
        </div>

        <div className="col-span-full">
      <label htmlFor="cover-photo" className="block text-lg text-center font-medium leading-6 text-gray-900">
        عکس را قرار دهید
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          {photo ? (
            <img src={URL.createObjectURL(photo)} alt="Uploaded" className="mx-auto h-20 w-20 text-gray-300" />
          ) : (
            <svg className="mx-auto h-20 w-20 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clip-rule="evenodd"
              />
            </svg>
          )}
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
      </div>
    </div>

    <div id="map"  className="mt-20 justify-center">

<DynamicMap />

</div>
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">  
      اطلاعات شخصی
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
      از یک آدرس دائمی استفاده کنید تا بتوانید ایمیل  دریافت کنید.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
            نام
          </label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" value={firstName} onChange={handleChangeFirstName} autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
            فامیل
          </label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" value={familyName}  onChange={handleChangeFamilyName} autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            ایمیل
          </label>
          <div className="mt-2">
            <input id="email" name="email" type="email" value={email} onChange={handleChangeEmail} autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

      

        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900"> آدرس</label>
          <div className="mt-2">
            <input type="text" value={address} onChange={handleChangeAddress}   name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city"     className="block text-sm font-medium leading-6 text-gray-900">شهر </label>
          <div className="mt-2">
            <input type="text" name="city" id="city" value={city}  onChange={handleChangeCity} autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="region" className="block text-sm font-medium  leading-6 text-gray-900">
            استان 
          </label>
          <div className="mt-2">
            <input type="text"  value={state} onChange={handleChangeState}  name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
          
        </div>

   
      </div>
    </div>

    <div className="border-b border-gray-900/10 pb-12 ">
      <h2 className="text-base font-semibold leading-7 text-gray-900"> قوانین </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
      ما همیشه تغییرات مهم را به شما اطلاع می‌دهیم، اما شما آنچه را که می‌خواهید درباره آن بشنوید انتخاب می‌کنید.
      </p>

      <div className="mt-10 space-y-10">
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900"> 
          با ایمیل
          </legend>
          <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                نظرات
                </label>
                <p className="text-gray-500">
                هنگامی که شخصی نظری را در مورد یک پست ارسال می کند مطلع شوید.
                </p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="candidates" className="font-medium text-gray-900">
                    پیشنهادات 
                </label>
                <p className="text-gray-500">
                هنگامی که یک پیشنهاد برای مزایده درخواست داده میشود، مطلع شوید.
                </p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="offers" className="font-medium text-gray-900"> لغودرخواست</label>
                <p className="text-gray-500">
                    هنگامی که دخواست و پیشنهاد لغو میشود مطلع شوید 
            .</p>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900"> پیام ها</legend>
          <p className="mt-1 text-sm leading-6 text-gray-600">
    
اینها از طریق پیامک به تلفن همراه شما تحویل داده می شود.
          </p>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-3">
              <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
              همه چيز
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                فقط مبایل
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
بدون پوش نوتیفیکیشن
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
        لغو 
    </button>

    <button type="submit"  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        ذخیره
    </button>
  </div>
  </form>
    </div></div>
  )
}

export default Form