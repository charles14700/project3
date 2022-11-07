import React from 'react'
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-red-400 h-10 justify-center flex items-center flex-col shadow-inner'> 
     <span className='text-black text-sm italic'>By Waziwazi @ 2022</span>
     <div className="text-xs"><Marquee>
 ..A simple cashout program, improvements to be added with time... Enter the amount to cash out and proceed. The program is easy and user friendly... Welcome to world of Geeks
</Marquee></div>
    </div>
  )
}

export default Footer