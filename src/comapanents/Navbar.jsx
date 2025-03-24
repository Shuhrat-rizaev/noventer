import React from "react";
import img from "../images/Main page/group.png";
export const Navbar = () => {
  return (
    <div className="bg-[#0E041D]  ">
      <div className="text-white flex justify-between container mx-auto w-[1152px] text-center">
        <img src={img} alt="Logotep" className="py-13" />
        <ul className="flex justify-between ">
          <li className="py-13 px-10  hover:text-blue-400 ">Bosh sahifa</li>
          <li className="py-13 px-10  hover:text-blue-400 ">Portfolio</li>
          <li className="py-13 px-10  hover:text-blue-400 ">Xizmatlar</li>
          <li className="py-13 px-10  hover:text-blue-400 ">Aloqa</li>
        </ul>
        <div className="flex justify-between text-center gap-7  items-center hover:text-blue-400">
          <p>Uz</p>
          <button className="px-4 py-2 text-white text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Loyiha bormi ?
          </button>
        </div>
      </div>
    </div>
  );
};
