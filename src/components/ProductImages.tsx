"use client"
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "/nike1.jpg",
  },
  {
    id: 2,
    url: "/nike2.jpg",
  },
  {
    id: 3,
    url: "/nike3.jpg",
  },
];


const ProductImages = () => {
  const [main, setMain] = useState(0)
  return (
    <div>
      <div className="h-[500px] relative">
        
        <Image
          src={images[main].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
        </div>
      <div  className="flex justify-between gap-4 mt-8 cursor-pointer">
        {images.map((img, i) => (
            <div className="w-1/4 h-32 relative gap-4 mt-8" key={img.id}>
            <Image
              src={img.url}
              alt=""
              fill
              sizes="50vw"
              className="object-cover rounded-md"
              onClick={() => setMain(i)}
            />
            </div>
        ))}
      </div>
      
       
      </div>
    
  );
};

export default ProductImages;
