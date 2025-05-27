import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
                alt="Boulders Edge Ulpatha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-50 rounded-lg hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent-50 rounded-lg hidden md:block"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              title="Welcome to Boulders Edge Ulpatha"
              subtitle="A hidden gem nestled in the serene landscapes of Sri Lanka"
            />

            <div className="space-y-6 text-gray-600">
              <p>
                Boulders Edge Ulpatha offers a unique blend of comfort, luxury, and nature's tranquility. 
                Our hotel is designed to provide an immersive experience of Sri Lanka's natural beauty 
                while ensuring all modern comforts are at your fingertips.
              </p>
              <p>
                Whether you're seeking a peaceful retreat, a family vacation, or a venue for your special 
                events, our dedicated team is committed to making your stay memorable. With spacious rooms, 
                breathtaking views, and exceptional service, we invite you to escape the ordinary and 
                embrace the extraordinary at Boulders Edge.
              </p>

              <div className="pt-4">
                <Button to="/gallery">
                  Discover More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;