import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Emma Thompson',
    location: 'United Kingdom',
    rating: 5,
    text: 'Our stay at Boulders Edge was absolutely magical. The serene environment, the attentive staff, and the beautiful rooms made our honeymoon unforgettable. We will definitely be back!',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'Singapore',
    rating: 5,
    text: 'A perfect family retreat! The family suite was spacious and comfortable, and the kids loved exploring the surroundings. The staff went above and beyond to make our stay special.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    location: 'Spain',
    rating: 4,
    text: 'Boulders Edge Ulpatha is a hidden gem. The natural beauty surrounding the hotel is breathtaking, and the food was delicious. Highly recommend for a peaceful getaway.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-accent-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Guest Experiences"
          subtitle="Hear what our guests have to say about their stay at Boulders Edge Ulpatha"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < testimonial.rating ? "#FFC107" : "none"}
                    color={i < testimonial.rating ? "#FFC107" : "#CBD5E1"}
                    className="mr-1"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;