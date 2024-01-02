'use client'
import { FormEvent } from 'react';
import Logo from "../../../public/images/logoNew (1).png"
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const Form = () => {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        const router = useRouter();
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await signIn('credentials', {
          email: formData.get('email'),
          password: formData.get('password'),
          redirect: false,
        });
    
        console.log({ response });
        if (!response?.error) {
          router.push('/');
          router.refresh();
        }
      };
  return (
    <div className="flex items-center min-h-screen p-4  lg:justify-center bg-white">
        <div
          className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
        >
          <div
            className="p-4 py-6 text-white bg-green-800	 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
          >
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <Link href="/">
                <Image
                  src={Logo}
                  width={100}
                  height={100}
                  alt='لگو '
                />
              </Link>
            </div>
            <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
              سایت معدن بهترین سایت برای  پیدا کردن مهندسین خبره و شرکت در مزایده ها
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>آیا شما کاربر این سایت  هستید ؟</span>
              <Link href="/accounts/sing" className="underline text-amber-400">! ساخت حساب کاربری </Link>
            </p>

          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">ورود به حساب کاربری</h3>
            <form action="/" className="flex flex-col space-y-5"onSubmit={handleSubmit} >
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-gray-500"> تلفن</label>
                <input
                  type="text"
                  id="text"
                  autoFocus
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-semibold text-gray-500">رمز عبور </label>
                  <Link href="/" className="text-sm text-blue-600 hover:underline focus:text-blue-800">!! مز عبور را فراموش کردم </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                />
                <label htmlFor="remember" className="text-sm font-semibold text-gray-500">مرا به خاطر بسپار</label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-green-800 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
               ورود
                </button>
              </div>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-500"> ورود با </span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex flex-col space-y-4">
                  <a
                    href="/"
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                  >
                    <span>
                      <svg
                        className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                        viewBox="0 0 16 16"
                        version="1.1"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-white">ادامه دادن با Google</span>
                  </a>
          
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

  )};
  export default Form;