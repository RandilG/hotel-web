import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const ContactPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-800 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get in Touch"
          subtitle="Contact us to learn more about our accommodations or to book your stay"
          centered
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary-700 p-3 rounded-full">
                <MapPin size={24} className="text-accent-300" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Our Location</h3>
                <p className="text-gray-300">
                  Ella Rd Wettawa, Matugama, 12100, Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-700 p-3 rounded-full">
                <Phone size={24} className="text-accent-300" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Phone</h3>
                <p className="text-gray-300">
                  +94 123 456 789
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-700 p-3 rounded-full">
                <Mail size={24} className="text-accent-300" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Email</h3>
                <p className="text-gray-300">
                  info@bouldersedge.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-700 p-3 rounded-full">
                <Clock size={24} className="text-accent-300" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Reception Hours</h3>
                <p className="text-gray-300">
                  24/7 - We're always here to assist you
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-80 lg:h-96 rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.781098079106!2d80.06095562542613!3d6.521620626775301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22ce7e9276e7f%3A0x5b2d38ba0a566d53!2sMatugama!5e0!3m2!1sen!2slk!4v1700651234567!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Boulders Edge Ulpatha Location"
            ></iframe>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Button to="/contact" size="lg" variant="secondary">
            Contact Us Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;