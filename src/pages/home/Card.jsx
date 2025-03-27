import React from 'react'
import data from './data.js';

const Card = () => {
  return (
    <div>
      <div className="card  lg:h-[30vh] w-full  flex  items-center gap-8 px-40 pt-30 mb-15">
        {data.map(({ id, number, text }) => (
          <div
            key={id}
            className="firstcard h-[20vh] w-[50vw] border border-lime-600 rounded-xl"
          >
            <h1 className='text-3xl font-bold p-6'>{number}</h1>
            <h1 className='text-gray-600 text-lg pl-6'>{text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card