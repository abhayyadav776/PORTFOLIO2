import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
const Bigcard = () => {
  return (
    <div className=" lg:h-[100vh]  w-[97vw]  overflow-hidden bg-emerald-950 ml-4 rounded-4xl flex justify-between relative">
      <div className="text w-full">
        <img src="/image/mm1.svg" alt="" className="p-8" />
        <div className="flex ">
          <div className="link pl-15  ">
            <div className="bg-gray-500 h-[10vh] w-[2px] mb-15 ml-2 "></div>
            <div className="icon flex gap-5 flex-col text-lg text-gray-500">
              <FaFacebookF />
              <FaTwitter />
              <FaPinterest />
              <FaLinkedinIn />
              <FaDribbble />
            </div>
            <div className="bg-gray-500 h-[10vh] w-[2px] mt-15 ml-2 "></div>
          </div>
          <div className="text2  pl-30 pt-20">
            <h1 className="text-white text-3xl font-semibold">
              Hello I am Masum !
            </h1>
            <h1 className="text-white text-6xl pt-8">
              A ul/ux <span className="text-lime-300">Designer</span>
            </h1>
            <p className="text-white text-sm pt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dicta
              atque eum, error cum veritatis itaque soluta hic a facere.
            </p>
            <div className="flex">
              <button className="h-[50px] w-[150px] rounded-xl bg-lime-300 mt-10">
                Hire Me
              </button>
              <h1 className="text-white  mt-13 ml-20 hover:text-lime-300 duration-700 cursor-pointer ">
                Download CV
              </h1>
            </div>
          </div>
        </div>
        <img src="/image/bshape3.svg" alt="" className="ml-70" />
      </div>
      <div className="image w-[70vw] h-100%  ">
        <img src="/image/maksad.jpg" alt="" />
      </div>
      <img
        src="/image/about-icon.svg"
        alt=""
        className="h-[60px] w-[90px] absolute bottom-25 left-205"
      />
    </div>
  );
}

export default Bigcard 