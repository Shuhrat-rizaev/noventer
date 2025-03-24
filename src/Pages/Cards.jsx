import React from "react";
import logo from "../images/Main page/k.png";
import c from "../images/Main page/c.png";
import ya from "../images/Main page/ya.png";
import images from "../images/Main page/images.png";
import uu from "../images/Main page/uu.png";
import icon from "../images/Main page/icon.png";

import { FaChartLine, FaUsers, FaLaptopCode, FaLock } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="bg-[#0c021e]">
      <div className="container mx-auto w-[85%] text-white">
        <section className="relative bg-[#0c021e] text-white py-20 px-6 lg:px-20">
          <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Yuqori sifatdagi aniqlikka asoslanib
                <span className="text-purple-500"> istalgan turdagi </span>
                dasturlarni tayyorlaymiz
              </h1>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Xizmatlar haqida
              </button>
            </div>

            <div className="relative flex justify-center">
              <img
                src={logo}
                alt="Laptop"
                className="w-full max-w-[500px] drop-shadow-lg"
              />
            </div>
          </div>
        </section>

        <div className="bg-[#5A00DB] py-6 px-6 lg:px-9 text-center lg:text-left">
          <h1 className="text-3xl lg:text-[48px] text-white">Biz Haqimizda</h1>
          <p className="text-lg lg:text-2xl text-white">Qisqacha ma’lumot</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-6 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#1a0826] p-4 rounded-lg shadow-lg max-w-sm mx-auto lg:mx-0"
            >
              <div className="rounded overflow-hidden">
                <img
                  src={c}
                  alt="Teamwork"
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-4 text-white">
                <h3 className="text-lg font-bold">Boshlanishi</h3>
                <p className="text-sm">
                  Biz --- dan ish boshladik va --- larni oldimizga maqsad qilib
                  qo’ydik
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-white mt-8 px-6 text-center lg:text-left">
          <p>
            Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. Lorem Ipsum
            is simply dummy text...
          </p>
        </div>

        <div className="text-center mt-6">
          <h1 className="text-3xl lg:text-[48px]">Loyihalarimiz</h1>
          <p>biz haqimizda gapirsin !</p>
        </div>

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-[#1a0826] p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto mt-5"
          >
            <div className="rounded-xl overflow-hidden md:w-1/2">
              <img
                src={ya}
                alt="Tourmad Screenshot"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-white md:w-1/2 md:pl-6 mt-4 md:mt-0 text-center md:text-left">
              <h3 className="text-xl font-bold">Tourmad loyihasi</h3>
              <p className="text-sm mt-2">
                Tourmad – Oʻzbekistonning ichki turizmini rivojlantirish
                maqsadida ishlab chiqilgan...
              </p>
              <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
                Loyihani koʻrish
              </button>
            </div>
          </div>
        ))}

        <div className="text-center mt-6">
          <h1 className="text-3xl lg:text-[48px]">Xizmat turlari</h1>
          <p>
            Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="border p-6 rounded-2xl overflow-hidden shadow-lg text-center mx-auto max-w-sm"
            >
              <div className="text-center px-6">
                <img src={icon} alt="iconca" className="w-16 h-16 mx-auto" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-4xl py-4">Landing Sahifasi</h1>
                <p>
                  Qisqa, tasirlimaqsadli sahifalar mijozlarni alohida harakatga
                  undash uchun mo'ljallangan
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const StatCard = ({ icon, text, subtext }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg text-white px-10 py-2 rounded-2xl flex justify-between items-center gap-5 shadow-md border border-white/20">
      <span className="text-3xl">{icon}</span>
      <div className="">
        {" "}
        <p className="text-lg font-semibold mt-">{text}</p>
        <p className="text">{subtext}</p>
      </div>
    </div>
  );
};

export default Cards;
