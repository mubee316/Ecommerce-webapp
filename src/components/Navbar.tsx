import React from 'react'
import Menubar from './Menubar'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
        {/* mobile */}
        <div className=' h-full flex justify-between items-center md:hidden'>
        <Link href='/'>
        <div className='text-2xl tracking-widest '>MUBA</div>
        </Link>
    <Menubar/>
    </div>
    {/* BIGGER SCREEN */}
    <div className='hidden md:flex items-center  justify-between gap-8 h-full '>
        <div className='w-1/3 xl:w-1/2 flex items-center  gap-12'>
            <Link href='/' className='flex items-center gap-3'>
            <Image src="/logo.png" alt="" width={24} height={24}/>
            <div className='text-2xl tracking-widest '>MUBA</div>
            </Link>
            <div className='hidden xl:flex gap-4'>
              <Link href='/'>Homepage</Link>
              <Link href='/'>Shop</Link>
              <Link href='/'>Deals</Link>
              <Link href='/'>About</Link>
              <Link href='/'>Contacts</Link>
            </div>
        </div>
        <div className='w-2/3 xl:w-1/2 flex justify-between gap-8'>
        <SearchBar/>
        <NavIcons/>

        </div>

    </div>
    </div>
  )
}

export default Navbar