'use client'
import { FormEvent } from 'react';
const Form = () => {
    const handelSubmit=async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData=new FormData(e.currentTarget)
        const response =await fetch(`../../api/auth/register`,{
      method:'POST',
      body:JSON.stringify({ 
        email:formData.get("email"),
        password:formData.get("password"),
      }),
      });
      console.log({response});
      };
  return (
    <div className="lg:m-10">
          <form  onSubmit={handelSubmit}  className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10" id='sing'>
            <h1 className="mb-6 text-xl font-semibold lg:text-2xl">عضو شوید </h1>

            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label className="" htmlFor='name'> نام</label>
                <input type="text" placeholder="نام شما " id='name' name='name' className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />

              </div>
              <div>
                <label className="" htmlFor='lastname'> نام خانوادگی </label>
                <input type="text" id='lastname' name='lastname' placeholder="نام خانوادگی " className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
              </div>
            </div>
            <div>
              <label className="" id='username'> نام کاربری  </label>
              <input type="text" id="username" name="username" placeholder="نام کاربری " className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
            </div>
            <div>
              <label className="" id='email'> آدرس ایمیل  </label>
              <input type="email" id='email' name='email' placeholder="Info@example.com" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
            </div>
            <div>
              <input type='password' className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              <div>
                <label className="" id='gender'> جنسیت  </label>
                <div className="relative w-56 mt-2 bg-gray-100 rounded-lg">
                  <input className="peer hidden" type="checkbox" name="select-1" id="select-1" />
                  <label htmlFor="select-1" className="flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring">انتخاب  </label>
                  <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-5 top-3 h-4 text-gray-600 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                    <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">مرد</li>
                    <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">زن </li>
                    <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">دیگر </li>
                  </ul>
                </div>
              </div>
              <div>
                <label className="" id='phone'> تلفن: <span className="text-sm text-gray-400">(optional)</span> </label>
                <input type="text" id='phone' name='phone' placeholder="+98 935 745 8575" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
              </div>
            </div>
            <p className="font-medium mb-1 text-gray-500">عنوان کاربر </p>
            <div className="flex gap-x-4">
              <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input className="peer hidden" type="radio" name="radio" id="radio1" checked />
                <label className="peer-checked:border-blue-400 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" htmlFor="radio1"> </label>
                <div className="peer-checked:border-transparent peer-checked:bg-blue-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-400 ring-offset-2"></div>
                <span className="pointer-events-none z-10">کاربر  ساده</span>
              </div>
              <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input className="peer hidden" type="radio" name="radio" id="radio3" checked />
                <label className="peer-checked:border-blue-400 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" htmlFor="radio3"> </label>
                <div className="peer-checked:border-transparent peer-checked:bg-blue-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-400 ring-offset-2"></div>
                <span className="pointer-events-none z-10">مهندس معدن </span>
              </div>
            </div>
            <div className="checkbox">

              <label htmlFor="checkbox1">I agree to the <a href="/" target="_blank" className="text-blue-600"> Terms and Conditions </a> </label>
            </div>

            <div>

              <button id='submit' type="button" className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white">ایجاد</button>
            </div>
          </form>
{/* onClick={(e) => { showMassege; submitData(); }}  */}
        </div>
  )
}

export default Form