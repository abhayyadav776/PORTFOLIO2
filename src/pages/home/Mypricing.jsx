import React from 'react'
import { Data4 } from './Data4';
const Mypricing = () => {
  return (
    <div className="h-screen w-full  ">
      <h1 className="text-xl font-bold text-center ">
        My Pric<span className="rounded-full bg-lime-300 h-15 w-15 ">ing</span>{" "}
      </h1>
      <h1 className="text-[30px] font-semibold text-center pt-4">
        Web design work on full time,
      </h1>
      <h1 className="text-[30px] text-center font-semibold ">
        design wise / hourly base
      </h1>
      <div className="h-[80vh] w-full flex items-center px-40 gap-6 ">
        {Data4.map(({ id, time, price }) => (
          <div
            key={id}
            className="card h-[70vh] w-[25vw] border border-gray-300 rounded-2xl hover:border-black "
          >
            <h1 className="text-[25px] font-semibold pt-8 pl-8 ">{time}</h1>
            <h4 className="text-xl text-gray-600 text-center pt-9">Start at</h4>
            <h1 className="text-2xl  font-bold pl-50 pt-2">{price}</h1>
            <div className="text-[20px] text-gray-500 flex  gap-3 flex-col pt-8 pl-8">
              <li>Mockup Design in Figma</li>
              <li>UI UX Design</li>
              <li>Website Design</li>
              <li>Logo Design</li>
              <li>Packaging and Branding</li>
            </div>
            <button className="rounded-xl border h-15 w-40 ml-8 mt-6 hover:bg-lime-300 duration-800 cursor-pointer">
              Choose plan
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Mypricing