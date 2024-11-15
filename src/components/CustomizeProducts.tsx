import React from 'react'

const CustomizeProducts = () => {
  return (
    <div>
        <div>
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
        </div>
        <div></div>
    </div>
  )
}

export default CustomizeProducts