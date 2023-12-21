import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlinePhoneEnabled } from "react-icons/md";

const HederTop = () => {
    return (

        <div className="border-b bg-green-950 hidden sm:block ">
            <div className="container py-1">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header-dropdown	 ">
                            <select
                                className=" text-[13px] w-[180px] block py-0 px-0 bg-teal-50 border-gray-300 text-orange-950	 text-sm rounded-lg focus:ring-blue-500
                                 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600
                                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                "
                                name="currency"
                                id="currency"
                            >
                                <option value="فارسی">فارسی </option>
                                <option value="انگلیسی">انگلیسی </option>
                            </select>
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaFacebookF />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaTwitter />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaInstagram />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaPinterestP />
                        </div>
                    </div>

                    

                    <div className="flex gap-4 text-[12px] text-teal-50			">
                      
تلفن تماس :0930....8978 
<MdOutlinePhoneEnabled  className="text-[17px]"/>               
    </div>
                </div>
            </div>
        </div>


    );
};

export default HederTop;