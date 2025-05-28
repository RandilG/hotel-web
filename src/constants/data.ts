import { Room, Package, Service, GalleryImage, NavLink } from '../types';
import nature1 from '../assets/nature/nature1.jpg';
import nature2 from '../assets/nature/nature2.jpg';
import nature3 from '../assets/nature/nature3.jpg';
import nature5 from '../assets/nature/nature5.jpg';
import nature6 from '../assets/nature/vibrant-gloriosa-lilies.jpg';

import lobby1 from '../assets/playArea/a-dining-and-gathering (1).jpg';
import lobby2 from '../assets/playArea/a-dining-and-gathering.jpg';
import lobby3 from '../assets/playArea/the-warm-glow-of-antique (1).jpg';
import lobby4 from '../assets/playArea/the-warm-glow-of-antique.jpg';

import pool1 from '../assets/pool/Outdoor.jpg';
import pool2 from '../assets/pool/Pool1.jpg';
import pool3 from '../assets/pool/caption.jpg';
import pool4 from '../assets/pool/nestled-in-the-heart.jpg';
import pool5 from '../assets/pool/outdoor2.jpg';
import pool6 from '../assets/pool/this-breathtaking-natural (1).jpg';
import pool7 from '../assets/pool/this-breathtaking-natural (2).jpg';
import pool8 from '../assets/pool/this-breathtaking-natural.jpg';
import pool9 from '../assets/pool/this-crystal-clear-natural.jpg';

import room1 from '../assets/room/bathed-in-the-warm-glow.jpg';
import room2 from '../assets/room/the-family-room-is-a (1).jpg';
import room3 from '../assets/room/the-family-room-is-a.jpg';
import room4 from '../assets/room/this-luxury-double-bedroom.jpg';
import room5 from '../assets/room/this-luxury-family-bedroom.jpg';
import room6 from '../assets/room/this-unique-and-luxurious.jpg';

export const navLinks: NavLink[] = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Rooms', path: '/rooms' },
  { id: 3, name: 'Packages', path: '/packages' },
  { id: 4, name: 'Services', path: '/services' },
  { id: 5, name: 'Gallery', path: '/gallery' },
  { id: 6, name: 'Contact', path: '/contact' },
];

export const rooms: Room[] = [
  {
    id: 1,
    type: 'double',
    name: 'Deluxe Double Room',
    description: 'Our spacious deluxe double rooms offer a perfect blend of comfort and luxury with stunning views of the surrounding nature.',
    maxOccupancy: 2,
    amenities: ['King-sized bed', 'Air conditioning', 'Private bathroom', 'Wi-Fi', 'Flat-screen TV', 'Mini refrigerator'],
    images: [room4, room1, nature1],
    price: 120
  },
  {
    id: 2,
    type: 'double',
    name: 'Garden View Double Room',
    description: 'Enjoy the lush greenery from your private balcony in our garden view double rooms, designed for ultimate relaxation.',
    maxOccupancy: 2,
    amenities: ['Queen-sized bed', 'Air conditioning', 'Private bathroom', 'Wi-Fi', 'Garden view balcony', 'Work desk'],
    images: [room6, nature2, nature6],
    price: 110
  },
  {
    id: 3,
    type: 'double',
    name: 'Mountain View Double Room',
    description: 'Wake up to breathtaking mountain views in our specially designed double rooms with modern amenities.',
    maxOccupancy: 2,
    amenities: ['King-sized bed', 'Air conditioning', 'Private bathroom', 'Wi-Fi', 'Mountain view', 'Seating area'],
    images: [room1, nature3, pool6],
    price: 130
  },
  {
    id: 4,
    type: 'double',
    name: 'Premium Double Room',
    description: 'Our premium double rooms offer an elevated experience with luxury furnishings and enhanced amenities for a memorable stay.',
    maxOccupancy: 2,
    amenities: ['King-sized bed', 'Air conditioning', 'Premium bathroom', 'Wi-Fi', 'Flat-screen TV', 'Mini bar', 'Bathrobe & slippers'],
    images: [room4, room6, pool7],
    price: 150
  },
  {
    id: 5,
    type: 'family',
    name: 'Luxury Family Suite',
    description: 'Our spacious family suites are perfect for families looking for comfort and convenience, with separate sleeping areas and ample space.',
    maxOccupancy: 6,
    amenities: ['King-sized bed', 'Two twin beds', 'Sofa bed', 'Two bathrooms', 'Living area', 'Dining area', 'Mini kitchen', 'Wi-Fi', 'Smart TV'],
    images: [room5, room2, lobby1],
    price: 250
  },
  {
    id: 6,
    type: 'family',
    name: 'Garden Family Suite',
    description: 'Enjoy the beauty of nature with your family in our garden family suites, featuring a private terrace and garden access.',
    maxOccupancy: 6,
    amenities: ['King-sized bed', 'Two queen beds', 'Two bathrooms', 'Living area', 'Private terrace', 'Garden access', 'Wi-Fi', 'Entertainment system'],
    images: [room3, nature5, lobby2],
    price: 270
  }
];

export const packages: Package[] = [
  {
    id: 1,
    name: 'Room Only',
    description: 'Enjoy our comfortable accommodation without any meal plans, giving you the freedom to explore local dining options.',
    features: ['Accommodation in selected room type', 'Free Wi-Fi', 'Access to hotel amenities', 'Welcome drink'],
    price: 0
  },
  {
    id: 2,
    name: 'Bed & Breakfast',
    description: 'Start your day right with our delicious breakfast options included in your stay, featuring local and international cuisine.',
    features: ['Accommodation in selected room type', 'Daily breakfast buffet', 'Free Wi-Fi', 'Access to hotel amenities', 'Welcome drink'],
    price: 25
  },
  {
    id: 3,
    name: 'Full Board',
    description: 'Indulge in a worry-free stay with all meals included, allowing you to fully enjoy our hotel\'s culinary offerings.',
    features: ['Accommodation in selected room type', 'Daily breakfast, lunch, and dinner', 'Free Wi-Fi', 'Access to hotel amenities', 'Welcome drink', 'Complimentary fruit basket'],
    price: 60
  }
];

export const services: Service[] = [
  {
    id: 1,
    name: 'Birthday Celebrations',
    description: 'Make your special day memorable with our customized birthday packages, including cake, decorations, and dining options.',
    image: lobby2
  },
  {
    id: 2,
    name: 'Day Out Packages',
    description: 'Enjoy our facilities for a day with our day out packages, perfect for families or friends looking for a refreshing escape.',
    image: pool1
  },
  {
    id: 3,
    name: 'Private Events',
    description: 'Host your private events in our scenic venue, with customized setups and catering options to suit your requirements.',
    image: lobby1
  },
  {
    id: 4,
    name: 'Corporate Retreats',
    description: 'Plan your corporate retreats and team-building activities in our serene environment, with meeting facilities and outdoor activities.',
    image: nature5
  },
  {
    id: 5,
    name: 'Pool Activities',
    description: 'Enjoy our stunning pool facilities with crystal clear waters surrounded by natural beauty.',
    image: pool3
  },
  {
    id: 6,
    name: 'Nature Tours',
    description: 'Explore the beautiful natural surroundings with guided tours and outdoor activities.',
    image: pool4
  }
];

export const galleryImages: GalleryImage[] = [
  // Nature Images
  {
    id: 1,
    src: nature1,
    alt: 'Beautiful natural landscape - Nature 1',
    category: 'Surroundings'
  },
  {
    id: 2,
    src: nature2,
    alt: 'Scenic nature views - Nature 2',
    category: 'Surroundings'
  },
  {
    id: 3,
    src: nature3,
    alt: 'Lush natural environment - Nature 3',
    category: 'Surroundings'
  },
  {
    id: 4,
    src: nature5,
    alt: 'Pristine natural setting - Nature 5',
    category: 'Surroundings'
  },
  {
    id: 5,
    src: nature6,
    alt: 'Vibrant gloriosa lilies in nature',
    category: 'Surroundings'
  },
  // Lobby/Play Area Images
  {
    id: 6,
    src: lobby1,
    alt: 'Dining and gathering area',
    category: 'Property'
  },
  {
    id: 7,
    src: lobby2,
    alt: 'Main dining and gathering space',
    category: 'Dining'
  },
  {
    id: 8,
    src: lobby3,
    alt: 'Warm glow of antique ambiance - 1',
    category: 'Property'
  },
  {
    id: 9,
    src: lobby4,
    alt: 'Warm glow of antique ambiance - 2',
    category: 'Property'
  },
  // Pool Images - Dedicated Pool Category
  {
    id: 10,
    src: pool1,
    alt: 'Outdoor pool area',
    category: 'Pool'
  },
  {
    id: 11,
    src: pool2,
    alt: 'Pool 1 - Main swimming area',
    category: 'Pool'
  },
  {
    id: 12,
    src: pool3,
    alt: 'Pool with scenic caption view',
    category: 'Pool'
  },
  {
    id: 13,
    src: pool4,
    alt: 'Pool nestled in the heart of nature',
    category: 'Pool'
  },
  {
    id: 14,
    src: pool5,
    alt: 'Outdoor pool area - 2',
    category: 'Pool'
  },
  {
    id: 15,
    src: pool6,
    alt: 'Breathtaking natural pool setting - 1',
    category: 'Pool'
  },
  {
    id: 16,
    src: pool7,
    alt: 'Breathtaking natural pool setting - 2',
    category: 'Pool'
  },
  {
    id: 17,
    src: pool8,
    alt: 'Breathtaking natural pool environment',
    category: 'Pool'
  },
  {
    id: 18,
    src: pool9,
    alt: 'Crystal clear natural pool',
    category: 'Pool'
  },
  // Room Images
  {
    id: 19,
    src: room1,
    alt: 'Room bathed in warm glow',
    category: 'Rooms'
  },
  {
    id: 20,
    src: room2,
    alt: 'Family room space - 1',
    category: 'Rooms'
  },
  {
    id: 21,
    src: room3,
    alt: 'Family room accommodation',
    category: 'Rooms'
  },
  {
    id: 22,
    src: room4,
    alt: 'Luxury double bedroom',
    category: 'Rooms'
  },
  {
    id: 23,
    src: room5,
    alt: 'Luxury family bedroom suite',
    category: 'Rooms'
  },
  {
    id: 24,
    src: room6,
    alt: 'Unique and luxurious room',
    category: 'Rooms'
  }
];