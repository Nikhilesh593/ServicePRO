import React from 'react';
import HeroSection from "./HeroSection";
import ServiceCategories from "./ServiceCategories";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import StatsSection from "./StatsSection";
import CallToAction from "./CallToAction";
import FeaturedProviders from "./FeaturedProviders";

const LandingPage = () => {
    return (
        <div className="font-body text-gray-900 bg-white">
            <HeroSection />
            <ServiceCategories />
            <HowItWorks />
            <FeaturedProviders />
            <Testimonials />
            <StatsSection />
            <CallToAction />
        </div>
    );
};

export default LandingPage;