"use client"

import { useState, useEffect } from 'react'
import "./style.css"
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { useRouter } from 'next/navigation';

const page = () => {
  const [photo, setPhoto] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [education, setEducation] = useState('');
  const [mobile, setMobile] = useState('');
  const router = useRouter();
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleChangeFullName = (e: any) => {
    setFullName(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleChangeCity = (e: any) => {
    setCity(e.target.value);
  };

  const handleChangeEducation = (e: any) => {
    setEducation(e.target.value);
  };

  const handleChangeMobile = (e: any) => {
    setMobile(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      photo,
      fullName,
      email,
      city,
      education,
      mobile,
    };

    const jsonData = JSON.stringify(formData);

    console.log('Form Data (JSON):', jsonData);
    setPhoto(null);
    setFullName('');
    setEmail('');
    setCity('');
    setEducation('');
    setMobile('');

    try {
      const response = await axios.post(process.env.BaseUrl + '/registerJob', {

      },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: localStorage.getItem('token'),
          },

        });
      const accountStatus = response.data.status;
      if (accountStatus === 200) {
        router.push('/accounts/login');
      } else if (accountStatus === 220) {
        alert('تغییرات انجام شد');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.BaseUrl + '/Cats');
        setOptions(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
   useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(process.env.BaseUrl + '/showStates');
        const data = await response.json();
        console.log('API response:', data); 
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












  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div className="card" >
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center"> {photo ? (
              <img src={URL.createObjectURL(photo)} alt="Uploaded" className="mx-auto h-64 w-64 text-gray-300" />
            ) : (
              <svg className="mx-auto h-64 w-64 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clip-rule="evenodd" />
              </svg>
            )}
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='flex  justify-center'>
          <div className="col-md-8 ">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">
                      نام و نام خانوادگی
                    </h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" name="last-name" id="last-name" value={fullName} onChange={handleChangeFullName} autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">
                      ایمیل
                    </h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" name="last-name" id="last-name" value={email} onChange={handleChangeEmail} autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">
                      موبایل
                    </h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" name="last-name" id="last-name" value={mobile} onChange={handleChangeMobile} autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">
                      تحصیلات
                    </h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" name="last-name" id="last-name" value={education} onChange={handleChangeEducation} autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">شهر</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" name="last-name" id="last-name" value={city} onChange={handleChangeCity} autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <hr />
                <div className="row">

                  <label htmlFor="selectOption">شغل خود را انتخاب کنید:</label>
                  <select
                    id="selectOption"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className='text-black'
                  >
                    {options.map((option) => (
                      <option key={option.id} value={option.value} className="text-black">
                        {option.name}
                      </option>
                    ))}
                  </select>

                  <p>{selectedOption}</p>



                </div>
                <div className="row">
                  <label htmlFor="state">
                    استان خود را انتخاب کنید 
                  </label>
                  <select id="state" value={selectedState} onChange={handleStateChange}>
                    <option value="">
                      استان
                    </option>
                    {states.map((state) => (
                      <option key={state.id} value={state.id} className='text-black	'>
                        {state.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="row">
                  <label htmlFor="city">
                    شهر خود را اتخاب کنید 
                  </label>
                  <select id="city" value={selectedCity} onChange={handleCityChange}>
                    <option value="">
                      شهر 
                    </option>
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

        </div>
        <button type="submit" className="text-white place-items-center  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"  >
          ذخیره
        </button>
      </form>
    </div>

  )
}

export default page;