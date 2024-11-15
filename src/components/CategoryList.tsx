import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import page from '@/app/list/page'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar'>
        <div className=' relative flex gap-4 md:gap-8'>
            <Link href='/list' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
            <Image src="/pixel.jpg"
          alt=''
          fill
          sizes='25vw'
          className='absolute rounded-md'/>
          </div>
          <h1 className='mt-8 font-light text-cl tracking-wide '>Category Name</h1>
            </Link>
            <Link href='/list' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
            <Image src="/pixel.jpg"
          alt=''
          fill
          sizes='25vw'
          className='absolute rounded-md'/>
          </div>
          <h1 className='mt-8 font-light text-cl tracking-wide '>Category Name</h1>
            </Link>
            <Link href='/list' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
            <Image src="/pixel.jpg"
          alt=''
          fill
          sizes='25vw'
          className='absolute rounded-md'/>
          </div>
          <h1 className='mt-8 font-light text-cl tracking-wide '>Category Name</h1>
            </Link>
            <Link href='/list' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
            <Image src="/pixel.jpg"
          alt=''
          fill
          sizes='25vw'
          className='absolute rounded-md'/>
          </div>
          <h1 className='mt-8 font-light text-cl tracking-wide '>Category Name</h1>
            </Link>
            <Link href='/list' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
            <Image src="/pixel.jpg"
          alt=''
          fill
          sizes='25vw'
          className='absolute rounded-md'/>
          </div>
          <h1 className='mt-8 font-light text-cl tracking-wide '>Category Name</h1>
            </Link>
            <Link href='/list' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
            <Image src="/pixel.jpg"
          alt=''
          fill
          sizes='25vw'
          className='absolute rounded-md'/>
          </div>
          <h1 className='mt-8 font-light text-cl tracking-wide '>Category Name</h1>
            </Link>
            <Link href='/list' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
            <Image src="/pixel.jpg"
          alt=''
          fill
          sizes='25vw'
          className='absolute rounded-md'/>
          </div>
          <h1 className='mt-8 font-light text-cl tracking-wide '>Category Name</h1>
            </Link>
            <Link href='/list' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
            <Image src="/pixel.jpg"
          alt=''
          fill
          sizes='25vw'
          className='absolute rounded-md'/>
          </div>
          <h1 className='mt-8 font-light text-cl tracking-wide '>Category Name</h1>
            </Link>
        </div>
    </div>
  )
}

export default CategoryList