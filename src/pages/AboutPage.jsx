import React from 'react';
import AboutHero from '../components/AboutHero';
import OurMission from '../components/OurMission';
import OurTeam from '../components/OurTeam';
import CtaSection from '../components/CtaSection';
import OurValues from '../components/OurValues';
import CompanyTimeline from '../components/CompanyTimeline';

const AboutPage = () => {
    {/* TODO: add bios, photos, shareable story and etc */}
  return (
    <div>
      <AboutHero />
      <OurTeam />
      <OurMission />
      <OurValues />
      <CompanyTimeline />
      <CtaSection />
    </div>
  );
};

export default AboutPage;
