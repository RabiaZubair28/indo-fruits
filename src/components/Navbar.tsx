import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Fruit } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Fruit className="h-8 w-8 text-white" />
            <span className="text-white font-bold text-xl">Indo Fruits</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-white hover:text-green-200 px-3 py-2 rounded-md transition-colors">
                Home
              </Link>
              <Link to="/shop" className="text-white hover:text-green-200 px-3 py-2 rounded-md transition-colors">
                Shop
              </Link>
              <Link to="/contact" className="text-white hover:text-green-200 px-3 py-2 rounded-md transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-white block px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/shop" className="text-white block px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link to="/contact" className="text-white block px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;