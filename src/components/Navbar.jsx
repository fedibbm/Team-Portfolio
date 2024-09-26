import React from 'react'   
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <div className='w-full hidden md:flex justify-center absolute top-10 '>
        <div className='w-[min(100%,800px)] p-5 rounded-full custom-shadow'>
            <ul className='w-full flex space-x-10 p-2 justify-center '>
                <li><a href="#Home" className="cursor-pointer p-4 bg-lightBlue  text-white font-semibold border border-transparent active:border-white">Home</a></li>
                <li><a href="#AboutUs" className="cursor-pointer p-4 bg-lightBlue  text-white font-semibold">Who Are We</a></li>
                <li><a href="#Projects" className="cursor-pointer p-4 bg-lightBlue  text-white font-semibold">Our Projects</a></li>
                <li><a href="#Contact" className="cursor-pointer p-4 bg-lightBlue  text-white font-semibold">Get In Touch</a></li>
            </ul>
        </div>
    </div>          
  )
}

export default Navbar