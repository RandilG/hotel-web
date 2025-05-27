import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you"
        bgImage="https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Whether you have a question about our rooms, packages, or services, our team is ready to help you.
              Fill out the form, or contact us directly using the information below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <MapPin size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    Ella Rd Wettawa, Matugama, 12100, Sri Lanka
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Phone size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+94123456789" className="hover:text-primary-600 transition-colors">
                      +94 123 456 789
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Mail size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@bouldersedge.com" className="hover:text-primary-600 transition-colors">
                      info@bouldersedge.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Clock size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">Reception Hours</h3>
                  <p className="text-gray-600">
                    24/7 - We're always here to assist you
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Find Us</h3>
              <div className="h-64 rounded-lg overflow-hidden">
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
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below, and we'll get back to you as soon as possible.
            </p>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;