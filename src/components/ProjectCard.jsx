import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import "../css/ProjectCard.css"

const ProjectCard = () => {
  return (
        <div className='flex flex-col items-center w-[30rem] p-4 transition-all rounded-lg space-y-4 text-gray-100 bg-[#07113b] outline outline-[#0000007b] hover:outline-[#090821ca] bg-opacity-45 hover:shadow-inner hover:bg-opacity-70 hover:scale-[99.5%] ease-in-out duration-100' >
        <img src="https://via.placeholder.com/400x300" className='w-full rounded-md h-[300px]' alt="" />
        <div className='flex flex-col space-y-8'>
            <div className='flex flex-col '>
                <h2 className='font-bold text-xl'>Project Name</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quidem incidunt .</p>
            </div>
            <div className='flex justify-between'>
                <div className='flex space-x-2 text-white'> 
                    <p className='p-2 border border-white rounded-md hover:bg-white hover:border-darkerBlue hover:text-darkerBlue cursor-default '>HTML</p>
                    <p className='p-2 border border-white rounded-md hover:bg-white hover:border-darkerBlue hover:text-darkerBlue cursor-default '>CSS</p>
                    <p className='p-2 border border-white rounded-md hover:bg-white hover:border-darkerBlue hover:text-darkerBlue cursor-default '>JAVASCRIPT</p>
                </div>
                <button className='flex items-center gap-3 p-2 rounded-sm border border-transparent hover:border-white '>View Project <FaArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard