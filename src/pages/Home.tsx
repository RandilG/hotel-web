import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import FeaturedRooms from '../components/home/FeaturedRooms';
import ServicesPreview from '../components/home/ServicesPreview';
import GalleryPreview from '../components/home/GalleryPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactPreview from '../components/home/ContactPreview';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <FeaturedRooms />
      <ServicesPreview />
      <GalleryPreview />
      <TestimonialsSection />
      <ContactPreview />
    </div>
  );
};

export default Home;