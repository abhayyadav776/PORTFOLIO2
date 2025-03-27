import React from 'react'
import { ImStarEmpty } from "react-icons/im";
import { data } from './Data4';

const Clients = () => {
  return (
    <div class="relative ">
      <img src="/image/test-bg.jpg" alt="Background" class="w-full h-auto" />
      <div class="bg-teal-900 h-[112vh] w-full absolute top-0 filter contrast-125 brightness-90 opacity-90">
        <div className="text px-40">
          <h1 className="text-xl text-white pt-30 font-semibold">
            What Clients Sa
            <span className="rounded-full h-15 w-15 bg-lime-300 ">y’s</span>
          </h1>
          <h1 className="text-white text-[40px] font-bold pt-3">
            Let's Look Our Customer’s
          </h1>
          <h1 className="text-white text-[40px] font-bold">Testimonials</h1>
        </div>
        <div>
  {}
  <div className="cardcontainer flex items-center justify-center w-full gap-3 overflow-x-auto no-scrollbar cursor-pointer">
    {data.map(({ id, image }) => (
      <div key={id}>
        {}
        <div className="card h-[50vh] w-[20vw] border border-white">
          <div className="content">
            <div className="id text-white font-bold">
              <h1 className="text-center pt-7">
                Average 5.0 rating <br />
              </h1>
              <h1 className="flex justify-center text-white pt-3">
                <ImStarEmpty />
                <ImStarEmpty />
                <ImStarEmpty />
                <ImStarEmpty />
                <ImStarEmpty />
              </h1>
              <p className="pt-6 pl-5 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis sint minima aliquid nesciunt, necessitatibus iure
                nihil provident reiciendis obcaecatiad, omnis delectus.
              </p>
              <div className="flex gap-4 pt-4 pl-5">
                <img
                  src={image}
                  alt=""
                  className="rounded-full h-20 w-20"
                />
                <h1 className="pl-3">
                  John simt <br />
                  CEO-ABC Ins
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    
  );
}

export default Clients