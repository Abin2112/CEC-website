import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCourses from '../components/FeaturedCourses';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PartnershipsSection from '../components/PartnershipsSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCourses />
      <StatsSection />
      <TestimonialsSection />
      <PartnershipsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;