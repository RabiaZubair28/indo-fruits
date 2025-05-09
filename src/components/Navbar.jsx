import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Citrus } from "lucide-react";
import logo from "../assets/Images/WhatsApp Image 2025-04-24 at 17.00.07.jpeg";
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
            <img src={logo} className="h-9 w-full" />
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-green-600 font-medium transition-colors"
                style={{
                  backgroundColor: "white", // Light blue
                  borderRadius: "10px",
                  border: "1px solid green",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  color: "green",
                  fontSize: "18px",
                  cursor: "pointer",
                  paddingInline: "15px",
                  paddingBlock: "5px",
                }}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-600 hover:text-green-600 font-medium transition-colors"
                style={{
                  backgroundColor: "white", // Light blue
                  borderRadius: "10px",
                  border: "1px solid green",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  color: "green",
                  fontSize: "18px",
                  cursor: "pointer",
                  paddingInline: "15px",
                  paddingBlock: "5px",
                }}
              >
                Shop
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-green-600 font-medium transition-colors"
                style={{
                  backgroundColor: "white", // Light blue
                  borderRadius: "10px",
                  border: "1px solid green",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  color: "green",
                  fontSize: "18px",
                  cursor: "pointer",
                  paddingInline: "15px",
                  paddingBlock: "5px",
                }}
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
              style={{
                backgroundColor: "white", // Light blue
                borderRadius: "10px",
                border: "1px solid green",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                color: "green",
                textAlign: "center",
                fontSize: "18px",
                cursor: "pointer",
                paddingInline: "15px",
                paddingBlock: "5px",
              }}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-600 hover:text-green-600 block px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
              style={{
                backgroundColor: "white", // Light blue
                borderRadius: "10px",
                border: "1px solid green",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                color: "green",
                textAlign: "center",
                fontSize: "18px",
                cursor: "pointer",
                paddingInline: "15px",
                paddingBlock: "5px",
              }}
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-green-600 block px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
              style={{
                backgroundColor: "white", // Light blue
                borderRadius: "10px",
                border: "1px solid green",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                color: "green",
                textAlign: "center",
                fontSize: "18px",
                cursor: "pointer",
                paddingInline: "15px",
                paddingBlock: "5px",
              }}
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
