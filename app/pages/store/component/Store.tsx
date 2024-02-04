"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/app/accounts/login/page';
import ApplyModal from './ApplyModal';
import { IoOpenOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import Image from 'next/image';
import ImageD from "../../../../public/images/none.png"
import { Item } from 'devextreme-react/cjs/data-grid';
interface TreeDataItem {
  id: number;
  img: string;
  title: string;
  name: string;
  txt: string;
  // ... other properties
}
function Store() {
  const [treeData, setTreeData] = useState<TreeDataItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedAd, setSelectedAd] = useState<TreeDataItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(process.env.BaseUrl + '/ads?');
      setTreeData(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

const openModal = (adId: number) => {
  // Find the selected ad from the treeData
  const item = treeData?.find((item) => item.id === adId) || null;
  setSelectedAd(item);
  setIsModalOpen(true);
};

const closeModal = () => {
  setSelectedAd(null); // Clear the selected ad when closing the modal
  setIsModalOpen(false);
};





if (loading) {
  return <Loading />;
}
function truncateText(text:any, numWords:any) {
  const words = text.split(/\s+/);
  const truncatedText = words.slice(0, numWords).join(' ') + (words.length > numWords ? '...' : '');
  return truncatedText;
}
  return (
    <div className="bg-gray-200 w-full h-full py-5 flex justify-center items-center">
      <div className="grid grid-cols-1 gap-2 place-items-center p-8 sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {Array.isArray(treeData) && treeData.map((item) => (
          <div
            key={item.id} 
            className="relative bg-white rounded-xl shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer"
          >
            <div className="top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block"     onClick={() => openModalDetails(item)}>
              <IoOpenOutline size={25} />
            </div>
            <div className="top-0 left-0 md:h-5 mt-5 text-gray-100 rounded-lg px-2 absolute z-20 bg-green-500">
              <FaRegUser />
            </div>
            <div className="top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600"></div>
            <div className="w-52 pb-2">
              <div className="relative">
                {/* <Image
                  src={item.img || ImageD} 
                  height={300}
                  width={300}
                  className="max-h-60 object-cover rounded-t-xl"
                  alt={item.title} 
                /> */}
                <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">
              جدید 
                </div>
              </div>
              <div className="px-2 py-1">
                <div className="text-sm text-center md:text-base font-bold pr-2">
                  {item.title}
                </div>
                <br />
                <h6 className="text-right">{item.name}</h6>
                <p className="pb-1 md:pb-2 text-xs text-right md:text-sm text-gray-500">
                {truncateText(item.txt, 20)}
                </p>
                <button
                  onClick={() => openModal(item.id)}
                  className="inset-x-0 bottom-0 flex justify-center bg-blue-500 hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-14 md:w-16 p-1 text-gray-100 hover:text-blue-900"
                >
                  فرستادن
                </button>
                <ApplyModal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  selectedAd={selectedAd}
                />



              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
