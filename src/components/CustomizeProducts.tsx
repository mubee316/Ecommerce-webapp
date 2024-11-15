import React from 'react'

const CustomizeProducts = () => {
  return (
    <div>
        <div className='flex flex-col gap-6'>
            <h3>Choose a color</h3>
            <ul className='flex items-center gap-4'>
                <li className='w-8 h-8 rounded-full bg-red-500 ring-1 ring-gray-300 cursor-pointer relative'>
                    <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
                </li>
                <li className='w-8 h-8 rounded-full bg-purple-500 ring-1 ring-gray-300 cursor-pointer relative'>
                </li>
                <li className='w-8 h-8 rounded-full bg-green-500 ring-1 ring-gray-300 cursor-not-allowed relative'>
                    <div className='absolute w-10 h-[2px] bg-red-400 rotate-45  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
                </li>
            </ul>
        <h3>Choose a Size</h3>
       
            <ul className='flex items-center gap-6'>
                <li className='ring-1 ring-pink-500  text-pink-500 rounded-md px-4 py-1 cursor-pointer text-sm w-max '>Small</li>
                <li className='ring-1 ring-pink-500  text-white bg-pink-500 rounded-md px-4 py-1 cursor-pointer text-sm w-max '>Medium</li>
                <li className='ring-1 ring-pink-200  text-white bg-pink-200 cursor-not-allowed rounded-md px-4 py-1  text-sm w-max '>Large</li>
            </ul>
        </div>
        </div>
  )
}

export default CustomizeProducts