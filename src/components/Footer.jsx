import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-8 xs:py-8 sm:py-8 md:py-12 lg:py-12 xl:py-12 xxl:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-6 sm:gap-6 md:gap-12 lg:gap-12 xl:gap-12 xxl:gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              Indo Fruits
            </h3>
            <p className="text-gray-500 text-center">
              Bringing the finest fruits to your table.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              Quick Links
            </h3>
            <ul className="space-y-2 text-center">
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              Follow Us
            </h3>
            <div className="flex space-x-4 items-center justify-center">
              <a
                href="#"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 xs:mt-8 sm:mt-8 md:mt-12 lg:mt-12 xl:mt-12 xxl:mt-12 pt-6 xs:pt-6 sm:pt-6 md:pt-8 lg:pt-8 xl:pt-8 xxl:pt-8  border-t border-gray-200 text-center">
          <p className="text-gray-500">
            &copy; 2025 Indo Fruits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
