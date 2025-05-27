import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../constants/data';
import Logo from '../../assets/Logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white shadow-md py-2'
        : 'bg-primary-600 py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Boulders Edge Logo"
            className={`h-8 w-auto transition-all duration-300 ${isScrolled ? '' : ''}`}
          />
          <span
            className={`font-serif text-xl font-semibold transition-colors duration-300 ${isScrolled ? 'text-primary-800' : 'text-white'
              }`}
          >
            Boulders Edge
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`relative font-medium text-sm transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-200'
                } ${location.pathname === link.path ? 'font-semibold' : ''}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  className={`absolute left-0 top-full block h-0.5 w-full ${isScrolled ? 'bg-primary-500' : 'bg-white'
                    }`}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X
              size={24}
              className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'
                }`}
            />
          ) : (
            <Menu
              size={24}
              className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'
                }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`py-2 px-4 text-gray-800 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors ${location.pathname === link.path ? 'bg-primary-50 text-primary-600 font-medium' : ''
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;