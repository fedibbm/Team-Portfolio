import React from 'react';
import ShowcaseSection from './ShowcaseSection';
import AboutUsSection from './AboutUsSection';
import TeamProjects from './TeamProjects';
import ContactUsSection from './ContactUsSection';
import FooterSection from './FooterSection';


const HomePage = () => {
  return (
    <div className="flex flex-col">
        <ShowcaseSection />
        <AboutUsSection />
        <TeamProjects />
        <ContactUsSection />
        <FooterSection />
    </div>
  )
}

export default HomePage