import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Package } from '../../types';
import Button from '../ui/Button';

interface PackageCardProps {
  packageData: Package;
  index: number;
  isPopular?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ 
  packageData, 
  index,
  isPopular = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
        isPopular ? 'border-2 border-accent-500' : 'border border-gray-200'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-accent-500 text-white px-4 py-1 text-sm font-medium">
          Popular Choice
        </div>
      )}

      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">{packageData.name}</h3>
        <p className="text-gray-600 mb-4">{packageData.description}</p>

        <div className="my-6">
          {packageData.price > 0 ? (
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-gray-800">${packageData.price}</span>
              <span className="text-gray-500"> / person / night</span>
            </div>
          ) : (
            <div className="text-center mb-6">
              <span className="text-lg text-gray-600">Room rate only</span>
            </div>
          )}
        </div>

        <div className="space-y-3 mb-6">
          {packageData.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-primary-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <Button to="/contact" variant={isPopular ? 'secondary' : 'primary'} className="w-full">
          Book Now
        </Button>
      </div>
    </motion.div>
  );
};

export default PackageCard;