import React from 'react';
import { Link } from 'react-router-dom';
import { Palmtree, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { navLinks } from '../../constants/data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Palmtree size={28} className="text-accent-300" />
              <span className="font-serif text-xl font-semibold">Boulders Edge</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Experience nature's tranquility at Boulders Edge Ulpatha, where comfort meets the beauty of Sri Lanka's landscape.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-accent-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent-300 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Ella Rd Wettawa, Matugama, 12100, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent-300 flex-shrink-0" />
                <a href="tel:+94123456789" className="text-gray-300 hover:text-accent-300 transition-colors">
                  +94 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent-300 flex-shrink-0" />
                <a href="mailto:info@bouldersedge.com" className="text-gray-300 hover:text-accent-300 transition-colors">
                  info@bouldersedge.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest offers and news.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-primary-700 border border-primary-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Boulders Edge Ulpatha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;