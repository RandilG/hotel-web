import { Room, Package, Service, GalleryImage, NavLink } from '../types';

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
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg'
    ],
    price: 120
  },
  {
    id: 2,
    type: 'double',
    name: 'Garden View Double Room',
    description: 'Enjoy the lush greenery from your private balcony in our garden view double rooms, designed for ultimate relaxation.',
    maxOccupancy: 2,
    amenities: ['Queen-sized bed', 'Air conditioning', 'Private bathroom', 'Wi-Fi', 'Garden view balcony', 'Work desk'],
    images: [
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg',
      'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg'
    ],
    price: 110
  },
  {
    id: 3,
    type: 'double',
    name: 'Mountain View Double Room',
    description: 'Wake up to breathtaking mountain views in our specially designed double rooms with modern amenities.',
    maxOccupancy: 2,
    amenities: ['King-sized bed', 'Air conditioning', 'Private bathroom', 'Wi-Fi', 'Mountain view', 'Seating area'],
    images: [
      'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
    ],
    price: 130
  },
  {
    id: 4,
    type: 'double',
    name: 'Premium Double Room',
    description: 'Our premium double rooms offer an elevated experience with luxury furnishings and enhanced amenities for a memorable stay.',
    maxOccupancy: 2,
    amenities: ['King-sized bed', 'Air conditioning', 'Premium bathroom', 'Wi-Fi', 'Flat-screen TV', 'Mini bar', 'Bathrobe & slippers'],
    images: [
      'https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg',
      'https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg'
    ],
    price: 150
  },
  {
    id: 5,
    type: 'family',
    name: 'Luxury Family Suite',
    description: 'Our spacious family suites are perfect for families looking for comfort and convenience, with separate sleeping areas and ample space.',
    maxOccupancy: 6,
    amenities: ['King-sized bed', 'Two twin beds', 'Sofa bed', 'Two bathrooms', 'Living area', 'Dining area', 'Mini kitchen', 'Wi-Fi', 'Smart TV'],
    images: [
      'https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg',
      'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg'
    ],
    price: 250
  },
  {
    id: 6,
    type: 'family',
    name: 'Garden Family Suite',
    description: 'Enjoy the beauty of nature with your family in our garden family suites, featuring a private terrace and garden access.',
    maxOccupancy: 6,
    amenities: ['King-sized bed', 'Two queen beds', 'Two bathrooms', 'Living area', 'Private terrace', 'Garden access', 'Wi-Fi', 'Entertainment system'],
    images: [
      'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg'
    ],
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
    image: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg'
  },
  {
    id: 2,
    name: 'Day Out Packages',
    description: 'Enjoy our facilities for a day with our day out packages, perfect for families or friends looking for a refreshing escape.',
    image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg'
  },
  {
    id: 3,
    name: 'Private Events',
    description: 'Host your private events in our scenic venue, with customized setups and catering options to suit your requirements.',
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg'
  },
  {
    id: 4,
    name: 'Corporate Retreats',
    description: 'Plan your corporate retreats and team-building activities in our serene environment, with meeting facilities and outdoor activities.',
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg'
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    alt: 'Hotel exterior',
    category: 'Property'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg',
    alt: 'Hotel lobby',
    category: 'Property'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
    alt: 'Deluxe room',
    category: 'Rooms'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
    alt: 'Suite bedroom',
    category: 'Rooms'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg',
    alt: 'Hotel restaurant',
    category: 'Dining'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
    alt: 'Breakfast setup',
    category: 'Dining'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    alt: 'Swimming pool',
    category: 'Amenities'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg',
    alt: 'Garden area',
    category: 'Amenities'
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
    alt: 'Surrounding nature',
    category: 'Surroundings'
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg',
    alt: 'Mountain view',
    category: 'Surroundings'
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg',
    alt: 'Event setup',
    category: 'Events'
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg',
    alt: 'Wedding setup',
    category: 'Events'
  }
];