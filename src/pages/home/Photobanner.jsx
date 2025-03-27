import React from 'react'

const Photobanner = () => {
  return (
      <div className="h-screen w-full flex items-center justify-center relative  ">
        <img
          src="/image/banner.jpeg"
          alt=""
          className="h-[90vh] w-[80vw] rounded-2xl  "
        />

        <div className="circle rounded-full h-30 w-30 bg-lime-300 absolute top-80 flex items-center justify-center cursor-pointer hover:bg-emerald-950 duration-800">
          {" "}
          <h1 className="text-xl font-bold">Play</h1>
        </div>
      </div>
    
  
  );
}

export default Photobanner 