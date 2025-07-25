import React from 'react';
import AboutHero from '../components/AboutHero';
import OurMission from '../components/OurMission';
import OurTeam from '../components/OurTeam';
import CtaSection from '../components/CtaSection';

const AboutPage = () => {
    {/* TODO: add bios, photos, shareable story and etc */}
  return (
    <div>
      <AboutHero />
      <OurMission />
      <OurTeam />
      <OurValues />
      <CompanyTimeline />
      <CtaSection />
    </div>
  );
};

export default AboutPage;
