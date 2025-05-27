import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../types';
import Button from '../ui/Button';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group"
    >
      <div className="h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">{service.name}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <Button to="/contact">Inquire Now</Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;