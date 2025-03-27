import React from 'react'
import data from "./Data2.js"

const Card2 = () => {
  return (
    <div className="text ">
      <h1 className="text-xl font-semibold text-center">
        My Servi<span className="rounded-full h-15 w-15 bg-lime-300">ces</span>{" "}
      </h1>
      <h1 className='text-[30px] font-bold text-center pt-5 '>Provide Wide Range of</h1>
      <h1 className='text-[30px] font-bold text-center pb-7'>Digital Services</h1>
      <div className="main container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center px-25">
        {data.map(({ id, image, name, about, number }) => (
          <div
            key={id}
            className="card h-[50vh] border-2 rounded-xl gap-4 pt-5 pl-5 bg-white hover:bg-emerald-950 duration-500 ease-in-out hover:text-white"
          >
            <div className="image pb-7">
              <img src={image} alt={name} className="" />
            </div>
            <h1 className="text-xl font-semibold ">{name}</h1>
            <p className="text-lg ">{about}</p>
            <span className="flex pt-20">
              <h1 className="rounded-full bg-green-800 h-12 w-12 flex items-center justify-center font-bold cursor-pointer hover:bg-lime-500 duration-300">
                {number}
              </h1>
            </span>
          </div>
        ))}
      </div>
      <div className=" px-40 py-10">
      <h1 className="text-xl font-semibold pt-6">
        My Proje<span className=" rounded-full h-15 w-15 bg-lime-300">cts</span>{" "}
      </h1>
      <h1 className="text-[30px] pt-4 font-bold">
        Showcase Your Talent with our Latest Works
      </h1>
      </div>
      
    </div>
  );
}

export default Card2