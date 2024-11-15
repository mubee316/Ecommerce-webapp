"use client"
import React, { useState } from 'react'

const Add = () => {

    // tempo
    const stock = 4;
    const [Quantity , setQuantity] = useState(1);

    const handleQuantity = (type: "i" | "d") => {
        if(type === "d" && Quantity > 1){
            setQuantity((prev) => prev - 1)
            
        }
        if(type ==="i" && Quantity < stock){
            setQuantity((prev) => prev + 1)
        }
    }

  return (
    <div className='flex flex-col gap-6'>
        <h3>Choose a Quantity</h3>
        <div className='flex justify-between'>
            <div className='flex gap-6'>
                <div className='bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-36'>
                    <button className='cursor-pointer text-xl' onClick={() => handleQuantity("d")}>-</button>
                    {Quantity}
                    <button className='cursor-pointer text-xl ' onClick={() => handleQuantity("i")}>+</button>
                </div>
                <div className='font-medium text-sm'>
                    Only <span className='text-orange-500'>4 items</span> left !! <br />Don&apos;t miss it
                </div>
            </div>
            <button className='ring-1 ring-pink-500 rounded-md py-1 px-4 text-pink-500 hover:bg-pink-500 hover:text-white text-sm disabled:bg-pink-200 disabled:text-white disabled:cursor-not-allowed'> Add to Cart</button>
        </div>
    </div>
  )
}

export default Add