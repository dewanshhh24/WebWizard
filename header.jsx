import React from 'react'

import Image from 'next/image'

function Header() {
    return (
        <div className="bg-violet-900/ py-5">
            <nav className='w-full flex justify-evenly items-center text-amber-400  font-medium md:text-xl text-sm max-md:-inset-y-full'>
              
              <a href=''>Home</a>
              <p>About</p>
              <p>Contact Us</p>
              <p>Support </p>
              <button className='border border-amber-500 border-spacing-3 px-5 rounded-full'>
                Sign Up
              </button>
            </nav>
            
    </div> 
    )
}

export default Header