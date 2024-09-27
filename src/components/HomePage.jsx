import React from 'react';
import ShowcaseSection from './ShowcaseSection';
import AboutUsSection from './AboutUsSection';
import TeamProjects from './TeamProjects';


const HomePage = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-lightBlue via-darkerBlue to-[#020c2c]">
        <ShowcaseSection />
        <AboutUsSection />
        <TeamProjects />
    </div>
  )
}

export default HomePage