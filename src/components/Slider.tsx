"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    img: "/slide1.png",
    title: "Summer Sale collections",
    description: "sale! up to 50% off",
    url: "/",
    bg: "bg-gradient-to-r from-red-100 to-red-500"
  },
  {
    id: 2,
    img: "/slide2.jpg",
    title: "Summer Sale collections",
    description: "sale! up to 50% off",
    url: "/",
    bg: "bg-gradient-to-r from-gray-100 to-gray-500"
  },
  {
    id: 3,
    img: "/slide3.jpg",
    title: "Summer Sale collections",
    description: "sale! up to 50% off",
    url: "/",
    bg: "bg-gradient-to-r from-gray-500 to-black"
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length -1 ? 0 : prev + 1))
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000"
      style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            <div className=" h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center m-auto justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
              <Link href={slide.url}>
                <button className="rounded-sm bg-black text-white py-3 px-4">SHOP NOW</button>
              </Link>
            </div>
            <div className=" h-1/2 xl:w-full  xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover w-full"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
      {slides.map((slide, index) => (
        <div 
        className={`w-3 h-4 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center
          ${currentSlide === index ? "scale-150" : ""

          }` }
          key={slide.id}
          onClick={() => setCurrentSlide(index)}
          ></div>
      )) }
      </div>
    </div>
  );
};

export default Slider;
