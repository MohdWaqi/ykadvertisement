'use client';

import Image from 'next/image';
import Link from 'next/link';


const NavBar = () => {

  
  return (
    <nav className="bg-[#000080]/60 text-custom px-4 py-3 shadow-md fixed w-full z-50 " >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className=" text-3xl md:text-5xl font-bold tracking-wider flex flex-row items-center gap-3">
        <Image src="/images/lonelogo.jpg" className='rounded-full h-15 w-15 md:h-20 md:w-20' alt="logo" width={100} height={100}/>
        <h1>YK Handicrafts</h1>
        </Link>

        

        
      </div>
    </nav>
  )
}

export default NavBar