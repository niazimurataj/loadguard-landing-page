import React from 'react';
import FounderStory from '../components/FounderStory';
import OurMission from '../components/OurMission';
import OurTeam from '../components/OurTeam';
import CtaSection from '../components/CtaSection';

const AboutPage = () => {
  return (
    <div style={{backgroundColor: 'white'}}>
      <FounderStory />
      <OurMission />
      <OurTeam />
      <CtaSection />
    </div>
  );
};

export default AboutPage;
