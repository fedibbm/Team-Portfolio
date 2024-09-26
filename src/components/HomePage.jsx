import React from 'react';
import ShowcaseSection from './ShowcaseSection';
import AboutUsSection from './AboutUsSection';


const HomePage = () => {
  return (
    <div className="flex flex-col">
        <ShowcaseSection />
        <AboutUsSection />
    </div>
  )
}

export default HomePage