import React from 'react'
import Image from 'next/image'
import WebLogo from "@assets/images/web-logo.png"

const Navbar = () => {
  return (
    <div className='shadow-PurpleShadow bg-[#D21EFF] me-2 h-[90px] flex justify-center items-center'>
        <Image src={WebLogo} alt='web logo'/>
    </div>
  )
}

export default Navbar