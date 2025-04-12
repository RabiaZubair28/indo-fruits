import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Indo Fruits</h3>
            <p className="text-green-100">
              Bringing the finest fruits from nature to your table.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-green-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="/shop" className="text-green-100 hover:text-white transition-colors">Shop</a></li>
              <li><a href="/contact" className="text-green-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-500 text-center">
          <p className="text-green-100">&copy; 2024 Indo Fruits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;