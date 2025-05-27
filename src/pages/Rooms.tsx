import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import RoomCard from '../components/rooms/RoomCard';
import { rooms } from '../constants/data';

const Rooms: React.FC = () => {
  // Separate rooms by type
  const doubleRooms = rooms.filter(room => room.type === 'double');
  const familyRooms = rooms.filter(room => room.type === 'family');

  return (
    <div>
      <PageHeader 
        title="Our Accommodations" 
        subtitle="Choose from our range of comfortable and luxurious rooms"
        bgImage="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-semibold text-gray-800 mb-8">Double Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doubleRooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="font-serif text-3xl font-semibold text-gray-800 mb-8">Family Suites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {familyRooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;