import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";

const Latest = () => {
  return (
    <div className="maincontainer">
      <div className="latest h-[50vh] w-full ">
        <h1 className="text-xl font-semibold text-center pt-40">
          Latest Po
          <span className="rounded-full h-15 w-15 bg-lime-300">sts</span>
        </h1>
        <h1 className="text-[30px] text-center font-bold pt-4">
          Our Latest News{" "}
        </h1>
        <h1 className="text-[30px] text-center font-bold ">And Blog</h1>
      </div>
      <div className="cardcontainer h-screen w-full  px-40">
        <div className="card1 h-[25vh] w-full  border-y border-gray-500 flex justify-between items-center">
          <div className="text1  leading-relaxed text-xl ">
            <h1 className="flex items-center gap-2 ">
              <CiClock2 />
              April 25 2024
            </h1>
            <h1 className="flex items-center gap-2">
              <FaBookOpen />5 Min Read
            </h1>
            <h1 className="flex items-center gap-2">
              <IoIosPerson />
              By John Smith
            </h1>
          </div>
          <div>
            <p className="text-[30px] font-bold ">
              Innovation Junction: Exploring Cutting-Edge Solutions and Ideas
            </p>
          </div>
          <div>
            <h1 className="rounded-full h-17 w-17  border border-emerald-800 flex items-center justify-center object-cover hover:bg-lime-300 duration-900">
              <img src="/images/arrow-newsletter.svg" alt="" />
            </h1>
          </div>
        </div>
        <div className="card2 h-[25vh] w-full  border-y border-gray-500 flex justify-between items-center">
          <div className="text1  leading-relaxed text-xl ">
            <h1 className="flex items-center gap-2 ">
              <CiClock2 />
              April 25 2024
            </h1>
            <h1 className="flex items-center gap-2">
              <FaBookOpen />5 Min Read
            </h1>
            <h1 className="flex items-center gap-2">
              <IoIosPerson />
              By John Smith
            </h1>
          </div>
          <div>
            <p className="text-[30px] font-bold ">
              Innovation Junction: Exploring Cutting-Edge Solutions and Ideas
            </p>
          </div>
          <div>
            <h1 className="rounded-full h-17 w-17  border border-emerald-800 flex items-center justify-center object-cover hover:bg-lime-300 duration-900">
              <img src="/images/arrow-newsletter.svg" alt="" />
            </h1>
          </div>
        </div>
        <div className="card3 h-[25vh] w-full  border-y border-gray-500 flex justify-between items-center">
          <div className="text1  leading-relaxed text-xl ">
            <h1 className="flex items-center gap-2 ">
              <CiClock2 />
              April 25 2024
            </h1>
            <h1 className="flex items-center gap-2">
              <FaBookOpen />5 Min Read
            </h1>
            <h1 className="flex items-center gap-2">
              <IoIosPerson />
              By John Smith
            </h1>
          </div>
          <div>
            <p className="text-[30px] font-bold ">
              Innovation Junction: Exploring Cutting-Edge Solutions and Ideas
            </p>
          </div>
          <div>
            <h1 className="rounded-full h-17 w-17  border border-emerald-800 flex items-center justify-center object-cover hover:bg-lime-300 duration-900 ">
              <img src="/images/arrow-newsletter.svg" alt="" />
            </h1>
          </div>
        </div>
      </div>
      <div className="circle flex justify-center">
        <h1 className=" rounded-full h-30 w-30 border border-gray-500  flex items-center justify-center text-xl hover:bg-emerald-800 duration-800 hover:text-white cursor-pointer font-semibold">
          View All
        </h1>
      </div>
    </div>
  );
}

export default Latest