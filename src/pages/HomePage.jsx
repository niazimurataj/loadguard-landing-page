import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TrustedBySection from '../components/TrustedBySection';
import TestimonialSection from '../components/TestimonialSection';
import CtaSection from '../components/CtaSection';
import MapSection from '../components/MapSection';
import NewsSection from '../components/NewsSection';
import AdversaryUniverseSection from '../components/AdversaryUniverseSection';
import OfferingsSection from '../components/OfferingsSection';
import OfferingsGrid from '../components/OfferingsGrid';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <FeatureSection />
            <TrustedBySection />
            <TestimonialSection />
            <MapSection />
            <OfferingsSection />
            <OfferingsGrid />
            <NewsSection />
            <AdversaryUniverseSection />
            <CtaSection />
        </div>
    )
}

export default HomePage;