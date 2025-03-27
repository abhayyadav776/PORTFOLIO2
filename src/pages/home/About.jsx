import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";

const About = () => {
  return (
    <div className=" lg:px-40 pt-15 relative pb-30">
      <div className=" lg: containerh-[90vh] w-[70vw]  grid gap-y-4 gap-x-5 grid-cols-[1fr_1fr_1fr] grid-rows-[20vh_1fr] ">
        <div className=" lg: box col-span-3 " id=" box-1 ">
          <h1 className="font-bold">
            About{" "}
            <span className=" rounded-full h-15 w-15  items-end flex-col bg-[#c9f31d]">
              Me
            </span>{" "}
          </h1>
          <h1 className="pt-4 text-[25px] font-bold">
            Described Briefly My Professional
          </h1>
          <h1 className="pt-1 text-[25px] font-bold">
            Background Skills and Accomplishments
          </h1>
        </div>
        <div className=" lg:box  flex justify-center " id=" box-2 ">
          <img src="/image/about.jpg" alt="" />
        </div>
        <div className=" lg:box " id=" box-3 ">
          <h1 className="text-[15px] font-bold pt-1">
            {" "}
            Hello ! I'm Professorial UI UX Designer Providing{" "}
          </h1>
          <h1 className="text-[15px] font-bold pt-1">
            awesome cool design stuff for client. My vision
          </h1>
          <h1 className="text-[15px] font-bold pt-1">
            is to satisfy my client
          </h1>

          <p className="text-gray-500 pt-6 leading-7">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum.
          </p>
        </div>
        <div className="box"></div>
      </div>
      <div className="rounded-full bg-lime-300 h-40 w-40 flex items-center justify-center font-semibold text-[20px] border-2 border-dotted border-gray-400 absolute bottom-1 left-25 top-120 cursor-pointer">
        Hire Me
        <BsArrowUpRight />
      </div>
    </div>
  );
}

export default About