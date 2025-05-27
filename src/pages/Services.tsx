import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ServiceCard from '../components/services/ServiceCard';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { services } from '../constants/data';

const Services: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="Explore our range of experiences and services"
        bgImage="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        <div className="mt-20 bg-primary-50 rounded-lg p-8 md:p-12">
          <SectionTitle
            title="Custom Events"
            subtitle="Looking for something specific? We can help you create a custom event package."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4">Wedding Ceremonies</h3>
              <p className="text-gray-600 mb-6">
                Make your special day unforgettable with our wedding packages. Our picturesque location provides
                the perfect backdrop for your ceremony and celebration.
              </p>
              <Button to="/contact">Get Wedding Info</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4">Corporate Retreats</h3>
              <p className="text-gray-600 mb-6">
                Boost team morale and productivity with our tailored corporate retreat packages. We offer
                meeting facilities, team-building activities, and comfortable accommodations.
              </p>
              <Button to="/contact">Inquire About Retreats</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;