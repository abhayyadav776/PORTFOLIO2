import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative mt-20  ">
      <div className="h-[105vh] w-full flex items-end ">
        <div className="h-[80vh] w-full bg-emerald-950 flex items-center">
          <div className="text-white h-[40vh] w-full pt-30 flex justify-between   border-b border-white  px-40 ">
            <div className="flex flex-col gap-10 ">
              <h1 className="text-2xl ">Follow Me</h1>
              <div className="flex text-gray-500 gap-4">
                <h1 className="rounded-full border h-10 w-10 flex items-center justify-center text-xl cursor-pointer hover:bg-blue-500 duration-800 ">
                  <FaTwitter />
                </h1>
                <h1 className="rounded-full border h-10 w-10 flex items-center justify-center text-xl cursor-pointer hover:bg-blue-500 duration-800 ">
                  <FaYoutube />
                </h1>
                <h1 className="rounded-full border h-10 w-10 flex items-center justify-center text-xl cursor-pointer hover:bg-blue-500 duration-800 ">
                  {" "}
                  <FaDribbble />
                </h1>
                <h1 className="rounded-full border h-10 w-10 flex items-center justify-center text-xl cursor-pointer hover:bg-blue-500 duration-800 ">
                  <FaGithubSquare />
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl">Contact Info</h1>
              <h1 className="text-gray-300 text-2xl hover:text-lime-300">
                +8802154 68 75 45
              </h1>
              <h1 className="text-gray-300 text-2xl hover:text-lime-300">
                example@example.com
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-bold">Newsletter</h1>
              <button className="rounded-2xl h-17 w-90 border border-gray-300 flex items-center text-xl text-gray-300">
                Email address
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="image absolute top-0  left-65">
        <img src="/image/bg.svg" alt="" className="rounded-2xl" />
        <div className="absolute top-10 left-85  h-[30vh] w-[30vw] flex  flex-col items-center justify-center gap-5">
          <h1 className="text-[40px] font-semibold">
            Let's Start Creating together
          </h1>
          <button className="rounded-sm border  h-13 w-40 hover:bg-white duration-800 cursor-pointer ">
            {" "}
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer