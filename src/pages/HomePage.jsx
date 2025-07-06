import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TrustedBySection from '../components/TrustedBySection';
import TestimonialSection from '../components/TestimonialSection';
import CtaSection from '../components/ctaSection';
import MapSection from '../components/MapSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <FeatureSection />
            <TrustedBySection />
            <TestimonialSection />
            <MapSection />
            <CtaSection />
        </div>
    )
}

export default HomePage;