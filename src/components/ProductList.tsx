import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className=' mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] md:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
            <Image
            src="/pixel.jpg"
            alt=""
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transiton-opacity easy duration-500'/>
            <Image
            src="/man u.jpg"
            alt=""
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'/>
        </div>
        <div className='flex justify-between'>
            <span>Product Name</span>
            <span>$59</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-2 ring-pink-500 text-pink-500 w-max py-2 px-4 text-xs hover:bg-pink-500 hover:text-white'>Add to cart</button>

        </Link>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] md:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
            <Image
            src="/pixel.jpg"
            alt=""
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transiton-opacity easy duration-500'/>
            <Image
            src="/man u.jpg"
            alt=""
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'/>
        </div>
        <div className='flex justify-between'>
            <span>Product Name</span>
            <span>$59</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-2 ring-pink-500 text-pink-500 w-max py-2 px-4 text-xs hover:bg-pink-500 hover:text-white'>Add to cart</button>

        </Link>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] md:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
            <Image
            src="/pixel.jpg"
            alt=""
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transiton-opacity easy duration-500'/>
            <Image
            src="/man u.jpg"
            alt=""
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'/>
        </div>
        <div className='flex justify-between'>
            <span>Product Name</span>
            <span>$59</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-2 ring-pink-500 text-pink-500 w-max py-2 px-4 text-xs hover:bg-pink-500 hover:text-white'>Add to cart</button>

        </Link>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] md:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
            <Image
            src="/pixel.jpg"
            alt=""
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transiton-opacity easy duration-500'/>
            <Image
            src="/man u.jpg"
            alt=""
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'/>
        </div>
        <div className='flex justify-between'>
            <span>Product Name</span>
            <span>$59</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-2 ring-pink-500 text-pink-500 w-max py-2 px-4 text-xs hover:bg-pink-500 hover:text-white'>Add to cart</button>

        </Link>
      
    </div>
  )
}

export default ProductList