import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { galleryImages } from '../constants/data';

const Gallery: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Our Gallery" 
        subtitle="Take a visual journey through our property and experiences"
        bgImage="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-600">
            Browse through our collection of images showcasing the beauty of Boulders Edge Ulpatha,
            from our comfortable rooms to the stunning natural surroundings and special events we host.
          </p>
        </div>
        
        <GalleryGrid images={galleryImages} />
      </div>
    </div>
  );
};

export default Gallery;