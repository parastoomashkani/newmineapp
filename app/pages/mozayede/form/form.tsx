"use client"


import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import axios from 'axios';
import Swal from 'sweetalert2'

const DynamicMap = dynamic(() => import('./map/map'), {
  ssr: false
});

const Form = () => {

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [fullName, setFullName] = useState("");
  const [mineral, setMineral] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [photo, setPhoto] = useState(null);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState(''); useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(process.env.BaseUrl + '/showStates');
        const data = await response.json();
        console.log('API response:', data); // Log the response to the console
        setStates(data);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);
  useEffect(() => {
    const fetchCities = async () => {
      if (selectedState) {
        try {
          const response = await fetch(process.env.BaseUrl + '/showCitiesOfState?id=' + selectedState);
          const data = await response.json();
          console.log(data);
          setCities(data);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      }
    };

    fetchCities();
  }, [selectedState]);

  const handleStateChange = (e: any) => {
    setSelectedState(e.target.value);
    setSelectedCity('')
  };

  const handleCityChange = (e: any) => {
    setSelectedCity(e.target.value);
  };




  const handleChange = (e: any) => {
    setTitle(e.target.value);

  }
  const handleChangeNote = (e: any) => {
    setNote(e.target.value);
  }
  const handleChangeFullName = (e: any) => {
    setFullName(e.target.value);
  }
  const handleChangeMineral = (e: any) => {
    setMineral(e.target.value);
  }
  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  }
  const handleChangeAddress = (e: any) => {
    setAddress(e.target.value);
  }
  const handleChangeCity = (e: any) => {
    setCity(e.target.value);
  }
  const handleChangeState = (e: any) => {
    setState(e.target.value);
  }

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setPhoto(file);
  };


  const handelsubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      title,
      note,
      fullName,
      mineral,
      email,
      address,
      city,
      state,
      photo: photo ? new FormData().append('photo', photo) : null,
    };

    try {
      const response = await axios.post(process.env.BaseUrl + '/submit_moz', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      });

      console.log('API Response:', response.data);
      setTitle('');
      setNote('');
      setFullName('');
      setMineral('');
      setEmail('');
      setAddress('');
      setCity('');
      setState('');
      setPhoto(null);
      const dataForme = response.data.statuse
      if (dataForme === 200) {
        Swal.fire({
          title: "ثبت شد ",
          text: " فرم شما ثبت شد ",
          icon: "success"
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: " ، وارد حساب کاربری خود شودید ثبت نشد !",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    } catch (error) {
      console.error('Error posting form data:', error);

    }

  };
  return (
    <div className='bg-slate-200'>
      <div className='container mx-auto px-4 bg-white  w-full m-8  '>
        {/* action={addItem}to form */}
        <form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-slate-200  inset-y-0 left-0 	 p-6 shadow-xl lg:p-10" onSubmit={handelsubmit} >
          <div className="space-y-12  ">
            <div className="border-b border-gray-900/10 pb-12 ">
              <h2 className=" font-semibold leading-7 text-gray-900  text-center text-6xl">   ثبت {""}<span className='text-indigo-500'>
                مزایده
              </span>  </h2>
              <p className=" text-sm leading-6 text-gray-600 text-center mt-10">
                این اطلاعات به صورت عمومی نمایش داده می شود، بنابراین مراقب آنچه به اشتراک می گذارید باشید.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6   ">
                <div className="sm:col-span-4 items-center">
                  <label htmlFor="titel" className="block text-lg font-medium leading-6 text-gray-900 ml-20 text-center " >
                    عنوان

                  </label>


                  <div className="mt-2 items-center">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input type="text" value={title} onChange={handleChange} name="username" id="titel" autoComplete="titel" className="block flex-1 border-0 bg-transparent items-center py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="  معدن طلا " />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="about" className="block text-lg font-medium leading-6 text-gray-900 ml-20">
                    توضیحات
                  </label>
                  <div className="mt-2">
                    <textarea id="about" name="about" value={note} onChange={handleChangeNote} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
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

            <div id="map" className="mt-20 justify-center">

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
                    نام و نام خانوادگی
                  </label>
                  <div className="mt-2">
                    <input type="text" name="first-name" id="first-name" value={fullName} onChange={handleChangeFullName} autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    فامیل
                  </label>
                  <div className="mt-2">
                    <input type="text" name="last-name" id="last-name" value={mineral} onChange={handleChangeMineral} autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    ایمیل
                  </label>
                  <div className="mt-2">
                    <input id="email" name="email" type="email" value={email} onChange={handleChangeEmail} autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>



                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900"> آدرس</label>
                  <div className="mt-2">
                    <input type="text" value={address} onChange={handleChangeAddress} name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  {/* <label htmlFor="city"     className="block text-sm font-medium leading-6 text-gray-900">
            استان 
          
          </label> */}
                  <div className="mt-2"> <label htmlFor="state">Select State:</label>
                    <select id="state" value={selectedState} onChange={handleStateChange}>
                      <option value="">Select a state</option>
                      {states.map((state) => (
                        <option key={state.id} value={state.id} className='text-black	'>
                          {state.title}
                        </option>
                      ))}
                    </select>

                  </div>
                </div>

                <div className="sm:col-span-2">
                  {/* <label htmlFor="region" className="block text-sm font-medium  leading-6 text-gray-900">
            شهر 
          </label> */}
                  <div className="mt-2">
                    <label htmlFor="city">Select City:</label>
                    <select id="city" value={selectedCity} onChange={handleCityChange}>
                      <option value="">Select a city</option>
                      {cities.map((city) => (
                        <option key={city.id} value={city.id} className='text-black'>
                          {city.title}
                        </option>
                      ))}
                    </select>

                  </div>

                </div>


              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12  ">
              <h2 className="text-base font-semibold leading-7 text-gray-900 text-right"> قوانین </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 text-right">
                ما همیشه تغییرات مهم را به شما اطلاع می‌دهیم، اما شما آنچه را که می‌خواهید درباره آن بشنوید انتخاب می‌کنید.
              </p>

              <div className="mt-10 space-y-10">

                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-right text-gray-900">
                    نوع پروانه
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-right text-gray-600">
                    نوع پروانه خود را مشخص کنید .
                  </p>
                  <div className="mt-6 space-y-6 text-right ">
                    <div className="flex items-center text-right gap-x-3">
                      <input id="push-everything" name="push-notifications" type="radio" className="h-4  text-right w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label htmlFor="push-everything" className="block text-sm font-medium text-right leading-6 text-gray-900">
                        پروانه اکتشاف
                      </label>
                    </div>
                    <div className="flex items-center text-right gap-x-3">
                      <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-right text-indigo-600 focus:ring-indigo-600" />
                      <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-right text-gray-900">
                        گواهی کشف
                      </label>
                    </div>
                    <div className="flex items-center text-right gap-x-3">
                      <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-right text-indigo-600 focus:ring-indigo-600" />
                      <label htmlFor="push-nothing" className="block text-sm text-right font-medium leading-6 text-gray-900">
                        پروانه بهره برداری
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

            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              ذخیره
            </button>
          </div>
        </form>
      </div></div>
  )
}

export default Form;