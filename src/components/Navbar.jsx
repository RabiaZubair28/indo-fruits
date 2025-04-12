import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Citrus } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://res.cloudinary.com/dxokfhkhu/image/upload/v1744453468/eea34ff2-0146-4ff4-b9e8-fc15929d9b51_y0fvkf.jpg"
              className="h-12 w-12 text-green-600"
            />
            <span className="text-gray-900 font-bold text-xl">Indo Fruits</span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-600 hover:text-green-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-600 hover:text-green-600 font-medium transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-green-600 font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-600 hover:text-green-600 block px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-600 hover:text-green-600 block px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-green-600 block px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
