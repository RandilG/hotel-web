import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import PackageCard from '../components/packages/PackageCard';
import { packages } from '../constants/data';

const Packages: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Our Packages" 
        subtitle="Select the perfect package for your stay"
        bgImage="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-600">
            At Boulders Edge Ulpatha, we offer a variety of packages to suit your preferences.
            From room-only options for those who want to explore local cuisine to full board packages
            for a complete worry-free stay, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard 
              key={pkg.id} 
              packageData={pkg} 
              index={index}
              isPopular={pkg.name === 'Bed & Breakfast'} // Mark B&B as popular
            />
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center mt-16">
          <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4">Special Requirements?</h3>
          <p className="text-gray-600 mb-8">
            Need a custom package for your stay? Contact our team for personalized options
            including special dietary requirements, celebration setups, or any other requests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Packages;