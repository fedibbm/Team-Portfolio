import React from "react";
import ProjectCard from "./ProjectCard";
import "./../css/TeamProjects.css";

const TeamProjects = () => {
    return (
        <section id="Projects" className="min-h-screen (bg-gradient-to-b) (from-darkerBlue to-[#030f2e]) Projects-bg">                    
            <div className="w-[min(1300px,90%)] mx-auto flex flex-col space-y-20 py-10 items-center">
                <h1 className="text-white text-[4rem] font-bold">Projects We Made</h1>
                <div className="w-full flex flex-wrap justify-between    gap-y-8">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard /> 
                </div>
            </div>  
        </section>
    );
};

export default TeamProjects;
