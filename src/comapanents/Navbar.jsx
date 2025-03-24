import React, { useState } from "react";
import img from "../images/main-page/group.png";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0E041D]">
      <div className="text-white flex justify-between items-center container mx-auto max-w-[1152px] px-4 py-4">
        <img src={img} alt="Logotep" className="h-12" />

        <ul className="hidden md:flex space-x-10">
          <li className="py-4 px-6 hover:text-blue-400">Bosh sahifa</li>
          <li className="py-4 px-6 hover:text-blue-400">Portfolio</li>
          <li className="py-4 px-6 hover:text-blue-400">Xizmatlar</li>
          <li className="py-4 px-6 hover:text-blue-400">Aloqa</li>
        </ul>

        <div className="hidden md:flex items-center gap-7">
          <p className="hover:text-blue-400">Uz</p>
          <button className="px-4 py-2 text-white text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Loyiha bormi?
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0E041D] text-center py-4">
          <ul className="space-y-4">
            <li className="py-4 hover:text-blue-400">Bosh sahifa</li>
            <li className="py-4 hover:text-blue-400">Portfolio</li>
            <li className="py-4 hover:text-blue-400">Xizmatlar</li>
            <li className="py-4 hover:text-blue-400">Aloqa</li>
          </ul>
          <div className="flex flex-col items-center space-y-4 pt-4">
            <p className="hover:text-blue-400">Uz</p>
            <button className="px-4 py-2 text-white text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
              Loyiha bormi?
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
