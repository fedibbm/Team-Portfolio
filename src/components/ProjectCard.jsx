import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ProjectCard = () => {
  return (
        <div className='flex flex-col items-center w-[30rem] p-4 border border-black rounded-lg space-y-4 text-gray-100 bg-[#010827c6] bg-lightBlue shadow-md' >
        <img src="https://via.placeholder.com/400x300" className='w-full rounded-md' alt="" />
        <div className='flex flex-col space-y-8'>
            <div className='flex flex-col '>
                <h2 className='font-bold text-xl'>Project Name</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quidem incidunt .</p>
            </div>
            <div className='flex justify-between'>
                <div className='flex space-x-2 text-lightBlue'>
                    <p className='p-2 border border-lightBlue rounded-md hover:border-white hover:text-white cursor-default '>HTML</p>
                    <p className='p-2 border border-lightBlue rounded-md hover:border-white hover:text-white cursor-default '>CSS</p>
                    <p className='p-2 border border-lightBlue rounded-md hover:border-white hover:text-white cursor-default '>JAVASCRIPT</p>
                </div>
                <button className='flex items-center gap-3'>View Project <FaArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard