import React from "react";

const Nav = () => {
  return (
    <div className="navbar  lg:h-[15vh]  w-full  flex  items-center justify-between px-20">
      <div className="image ">
        <img src="/image/logo.svg" alt="" />
      </div>
      <div className="text uppercase font-semibold  ">
        <ul className="flex gap-6 pt-3">
          <li className="flex ">
            {" "}
            <span className="flex rounded-full h-9 w-9  items-end flex-col bg-[#c9f31d]">
              Ho
            </span>
            me
          </li>
          <li>about</li>    
          <li>services</li>
          <li>portfolio</li>
          <li>pages</li>
          <li>blog</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="sign flex gap-4 capitalize items-center font-bold pl-6 ">
        <h1>sign</h1>
        <div className="btn py-4 px-11 bg-white border-1 rounded-sm flex items-center">
          sign up
        </div>
      </div>
    </div>
  );
};

export default Nav;
