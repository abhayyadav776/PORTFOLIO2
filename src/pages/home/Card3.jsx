import React from "react";
import Data from "./Data3";

const Card3 = () => {
  return (
    <div>
      <div className="h-screen w-full flex items-center  gap-3 overflow-auto no-scrollbar cursor-pointer ">
        {Data.map(({ id, image, size, name }) => (
          <div>
            <div
              key={id}
              className="card w-[25vw] flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
            >
              <div className="image mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-[25vw] rounded-xl shadow-2xl object-cover"
                />
              </div>
              <h1 className="text-lg font-bold rounded-2xl h-8 w-20 bg-lime-300 flex justify-center items-center">
                {size}
              </h1>
              <h1 className="text-2xl font-bold mt-4">{name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card3;
