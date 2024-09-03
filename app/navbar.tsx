import React from 'react'
import Image from 'next/image'
import WebLogo from "@assets/images/web-logo.png"

const Navbar = () => {
  return (
    <div className='shadow-PurpleShadow bg-[#D21EFF] me-2 sm:h-[90px] max-sm:py-2 flex justify-center items-center'>
        <Image className='max-sm:w-[70px]' src={WebLogo} alt='web logo'/>
    </div>
  )
}

export default Navbar