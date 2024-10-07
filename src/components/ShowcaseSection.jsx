import React from "react";
import "../css/ShowcaseSection.css";
import Navbar from "./Navbar";

const ShowcaseSection = () => {
    return (
        <section id="Home" className="pb-[100vh] w-full showcase-bg">
            <Navbar />
            <div className="absolute left-1/4 top-1/2 -translate-x-1/4 md:-translate-x-1/2 -translate-y-1/2 flex flex-col items-start">
              <h1 className="text-white text-[4rem] md:text-[8rem] font-bold">
                  Team<span className="text-[#0f255d]">X</span>
              </h1>
              <p className="text-white max-w-[50%] font-bold pl-4 pb-5">We deliver web solutions that enhance user engagement and drive results.</p>
              <div className="flex gap-10 justify-center pl-4">
                  <a href="#Contact"><button className="transition-all ease-in-out duration-200 p-2 border-[0.13rem] border-white rounded-md text-white hover:bg-white hover:text-[#3493b9] font-semibold">Work With Us</button></a>
                  <a href="#Projects"><button className="transition-all ease-in-out duration-200 p-2 border-[0.13rem] border-[#0a1952] rounded-md text-white hover:bg-transparent hover:text-[#0a1952] bg-[#0f255d] font-semibold">Our Projects</button></a>
              </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
