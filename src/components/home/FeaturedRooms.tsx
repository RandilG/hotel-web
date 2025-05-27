import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { rooms } from '../../constants/data';
import Button from '../ui/Button';

const FeaturedRooms: React.FC = () => {
  // Get one double room and one family room for featuring
  const featuredRooms = [
    rooms.find(room => room.type === 'double'),
    rooms.find(room => room.type === 'family')
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Featured Accommodations"
          subtitle="Experience comfort and luxury in our thoughtfully designed rooms"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredRooms.map((room, index) => (
            room && (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {room.type === 'double' ? 'Double Room' : 'Family Suite'}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.slice(0, 4).map((amenity, i) => (
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
                    <Button to="/rooms" variant="text" className="flex items-center gap-1">
                      View Details <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/rooms" size="lg">
            View All Rooms
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;