import React from 'react';
import { motion } from 'framer-motion';
import { Room } from '../../types';
import { User, BedDouble } from 'lucide-react';
import Button from '../ui/Button';

interface RoomCardProps {
  room: Room;
  index: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <div className="h-64 overflow-hidden">
          <img
            src={room.images[0]}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {room.type === 'double' ? 'Double Room' : 'Family Suite'}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">{room.name}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-gray-700">
            <User size={16} />
            <span>Max: {room.maxOccupancy}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-700">
            <BedDouble size={16} />
            <span>
              {room.type === 'double' ? '1 King Bed' : 'Multiple Beds'}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.slice(0, 6).map((amenity, i) => (
            <span key={i} className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full">
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-gray-800">
            <span className="font-semibold text-lg">${room.price}</span>
            <span className="text-sm text-gray-600"> / night</span>
          </div>
          <Button variant="primary">View Details</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;