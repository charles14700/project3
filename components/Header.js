import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bg-red-400 h-20'>

        <div className='relative top-3'>
            <Image src="/incoglogo.png" width={70} height={60} alt="image"/>
        </div>
    </div>
  )
}

export default Header