import React from 'react';
import { DiMongodb } from 'react-icons/di';
import { FaLinkedin, FaGithub, FaLaptop, FaReact, FaDatabase, FaHtml5, FaCss3, FaJs, FaBootstrap, FaAngular, FaSass} from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { RiTailwindCssFill } from 'react-icons/ri';

const AboutUsSection = () => {
  return (
    <section id="AboutUs" className='min-h-screen bg-gradient-to-b from-darkBlue to-darkerBlue'>
        {/* CONTAINER */}
        <div className='w-[min(1300px,90%)] mx-auto flex flex-col space-y-40 py-40 items-center'>
            {/* OUR TEAM SECTION */}
            <div className='flex flex-col space-y-20 items-center w-full'>
                <h1 className='text-white text-[4rem] font-bold '>Our Team</h1>
                <ul className='flex flex-col md:flex-row items-center w-full justify-around'>
                    <li className='text-white flex flex-col gap-4'>
                        <img src="/imgs/team_member.png" className='h-60 w-52'/>
                        <div >
                            <p className="text-xl font-semibold">Nom et Prénom</p>
                            <div className='flex gap-3 items-center max-w-fit'><FaLaptop className='text-xl' /><p>Backend Developer</p></div>
                            <a href="#" className='flex flex-row gap-3 items-center max-w-fit'><FaLinkedin className='text-xl'/><p>Team Member</p></a>
                            <a href="#" className='flex flex-row gap-3 items-center max-w-fit'><FaGithub className='text-xl'/><p>@teamMember</p></a>
                            <div className='flex gap-3 items-center max-w-fit'><IoMailSharp className='text-xl' /><p>team.member@gmail.com</p></div>
                        </div>
                    </li>
                    <li className='text-white flex flex-col gap-4'>
                        <img src="/imgs/team_member.png" className='h-60 w-52'/>
                        <div >
                            <p className="text-xl font-semibold">Nom et Prénom</p>
                            <div className='flex gap-3 items-center max-w-fit'><FaLaptop className='text-xl' /><p>Backend Developer</p></div>
                            <a href="#" className='flex flex-row gap-3 items-center max-w-fit'><FaLinkedin className='text-xl'/><p>Team Member</p></a>
                            <a href="#" className='flex flex-row gap-3 items-center max-w-fit'><FaGithub className='text-xl'/><p>@teamMember</p></a>
                            <div className='flex gap-3 items-center max-w-fit'><IoMailSharp className='text-xl' /><p>team.member@gmail.com</p></div>
                        </div>
                    </li>
                    <li className='text-white flex flex-col gap-4'>
                        <img src="/imgs/team_member.png" className='h-60 w-52'/>
                        <div >
                            <p className="text-xl font-semibold">Nom et Prénom</p>
                            <div className='flex gap-3 items-center max-w-fit'><FaLaptop className='text-xl' /><p>Backend Developer</p></div>
                            <a href="#" className='flex flex-row gap-3 items-center max-w-fit'><FaLinkedin className='text-xl'/><p>Team Member</p></a>
                            <a href="#" className='flex flex-row gap-3 items-center max-w-fit'><FaGithub className='text-xl'/><p>@teamMember</p></a>
                            <div className='flex gap-3 items-center max-w-fit'><IoMailSharp className='text-xl' /><p>team.member@gmail.com</p></div>
                        </div>
                    </li>
                        </ul>
            </div>

            {/* OUR MISSION */}
            <div className='flex flex-col space-y-20 items-center w-full'>
                <h1 className='text-[4rem] text-white font-bold text-center'>Our Mission</h1>
                 <p className='text-white text-xl Raleway-font md:max-w-[60%] leading-10 indent-16'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis mollitia voluptate, quaerat aliquid accusamus asperiores doloribus earum quidem libero. Repellat ipsa consequatur asperiores magnam hic delectus amet ratione a. Et.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis mollitia voluptate, quaerat aliquid accusamus asperiores doloribus earum quidem libero. Repellat ipsa consequatur asperiores magnam hic delectus amet ratione a. Et.</p>
            </div>

            <div className='flex flex-col space-y-20 items-center w-full'>
                <h1 className='text-[4rem] text-white font-bold text-center'>Technologies We Use </h1>
                <div className='flex items-center space-x-4 flex-wrap '>
                    <p className='text-white font-bold'>Frontend: </p> 
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaReact className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaHtml5 className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaCss3 className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaJs className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><RiTailwindCssFill className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaBootstrap className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaAngular className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaSass className='text-4xl' /></div>
                </div>
                <div className='flex items-center space-x-4 flex-wrap '>
                    <p className='text-white font-bold'>Backend: </p> 
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaDatabase className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><DiMongodb className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaDatabase className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaDatabase className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaDatabase className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaDatabase className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaDatabase className='text-4xl' /></div>
                    <div className=' max-w-fit p-2 border-2 border-lightBlue text-lightBlue cursor-pointer rounded-md hover:border-white hover:text-white'><FaDatabase className='text-4xl' /></div>
                </div>
                </div>
        </div>

    </section>      
  )
}

export default AboutUsSection