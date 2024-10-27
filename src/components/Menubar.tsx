"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Menubar = () => {

    const [open, setOpen] = useState(false)
  return (
    <div>
        <Image 
        src="/menu.png" 
        alt="" 
        width={28} 
        height={28} 
        className='cursor-pointer' 
        onClick={() => setOpen((prev) => !prev)}
        />{open && (
            <div className='absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-black text-white z-10'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <a href='/' className='hover:bg-gray-100 w-full h-12 flex items-center justify-center'>Home</a>
                    <a href='/about' className='hover:bg-gray-100 w-full h-12 flex items-center justify-center'>About</a>
                    <a href='/contact' className='hover:bg-gray-100 w-full h-12 flex items-center justify-center'>Contact</a>
                    <a href='/contact' className='hover:bg-gray-100 w-full h-12 flex items-center justify-center'>Contact</a>
                    <a href='/contact' className='hover:bg-gray-100 w-full h-12 flex items-center justify-center'>Contact</a>
                    <a href='/contact' className='hover:bg-gray-100 w-full h-12 flex items-center justify-center'>Contact</a>
                    <a href='/contact' className='hover:bg-gray-100 w-full h-12 flex items-center justify-center'>Contact</a>
                    <a href='/contact' className='hover:bg-gray-100 w-full h-12 flex items-center justify-center'>Contact</a>
                </div>
            </div>
        )}
    </div>
  )
}

export default Menubar