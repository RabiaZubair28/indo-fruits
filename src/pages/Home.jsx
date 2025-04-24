import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Truck, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Banner from "../components/Banners/About";
import Banner2 from "../components/Banners/Shop";
import Hero from "../components/Hero/Home";
import Menus from "../components/Menus/Products";
import NavBar from "../components/NavBar/NavBar";
import Banner3 from "../components/Banners/Banner3";
import sb from "../assets/Images/call-me-fred-BUAoLq-sOFo-unsplash (1).jpg";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react"; // or use FaPhone from react-icons/fa
import { useEffect, useState } from "react";

import str1 from "../assets/Images/str1.jpeg";
import str2 from "../assets/Images/str2.jpeg";
import str3 from "../assets/Images/str3.jpeg";
import str4 from "../assets/Images/str4.jpeg";
import str5 from "../assets/Images/str5.jpeg";
import str6 from "../assets/Images/str6.jpeg";
import str7 from "../assets/Images/str7.jpeg";
import avo1 from "../assets/Images/avo1.jpeg";
import avo2 from "../assets/Images/avo2.jpeg";
import avo3 from "../assets/Images/avo3.jpeg";
import avo4 from "../assets/Images/avo4.jpeg";
import avo5 from "../assets/Images/avo5.jpeg";
import avo6 from "../assets/Images/avo6.jpeg";
import avo7 from "../assets/Images/avo7.jpeg";
import mn1 from "../assets/Images/mn1.jpeg";
import mn2 from "../assets/Images/mn2.jpeg";
import mn3 from "../assets/Images/mn3.jpeg";
import mn4 from "../assets/Images/mn4.jpeg";
import mn5 from "../assets/Images/mn5.jpeg";
import mn6 from "../assets/Images/mn6.jpeg";
import mn7 from "../assets/Images/mn7.jpeg";
const useImageSlider = (images, delay = 2000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length < 2) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, [images, delay]);

  return images[index];
};

function CallButton() {
  return (
    <a
      href="tel:+923337109448" // Change this to your desired number
      style={{
        backgroundColor: "black", // Light blue
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        color: "white",
        fontSize: "32px",
        cursor: "pointer",
      }}
    >
      <PhoneCall />
    </a>
  );
}

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center"
    >
      <div className="h-14 w-14 bg-gray-50 rounded-full flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/923337109448"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        color: "white",
        fontSize: "32px",
        cursor: "pointer",
      }}
    >
      <FaWhatsapp />
    </a>
  );
}

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const navigate = useNavigate();
  return (
    <>
      <div className="pt-16 bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80"
              alt="Fresh fruits"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, x: 0 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <motion.span
                className="text-green-600 font-semibold text-xl mb-4 block"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                Welcome to Indo Fruits
              </motion.span>
              <motion.h1
                className="text-3xl xs:text-3xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-6xl xxl:text-6xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Freshness in Every Bite
              </motion.h1>
              <motion.span
                className="text-black font-bold text-2xl mb-4 block"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                Delivery All Over India
              </motion.span>
              <motion.p
                className="text-md xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl xxl:text-xl mb-8 text-gray-600"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                Experience the extraordinary taste of premium, hand-picked
                fruits delivered fresh to your home.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="flex flex-row gap-x-3 "
              >
                <Link
                  to="/shop"
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors text-lg font-medium"
                >
                  Shop Now <ArrowRight className="ml-2" />
                </Link>
                <CallButton />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* <Menus /> */}
        <Banner />

        {/* Featured Products */}
        <section className="py-10 xs:py-24 sm:py-24 md:py-24 lg:py-24 xl:py-24 xxl:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-6 xs:mb-6 sm:mb-6 md:mb-16 lg:mb-16 xl:mb-16 xxl:mb-16"
            >
              <span className="text-green-600 font-medium">Our Shop</span>
              <h2 className="text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl xxl:text-4xl font-bold mt-2 text-gray-900">
                Top Selling Fruits
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-4 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-8 xxl:gap-8">
              {[
                {
                  name: "Premium Mangoes",
                  image: [
                    "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80",
                    mn1,
                    mn2,
                    mn3,
                    mn4,
                    mn5,
                    mn6,
                    mn7,
                  ],
                  description:
                    "Sweet and juicy mangoes from the finest orchards",
                  price: "100/- per Kilo",
                },
                {
                  name: "Organic Avocados",
                  image: [
                    "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80",
                    avo1,
                    avo2,
                    avo3,
                    avo4,
                    avo5,
                    avo6,
                    avo7,
                  ],
                  description: "Creamy, tasty, healthy and nutritious avocados",
                  price: "900/- per Kilo",
                },
                {
                  name: "Fresh Berries",
                  image: [
                    "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80",
                    str1,
                    str2,
                    str3,
                    str4,
                    str5,
                    str6,
                    str7,
                  ],
                  description: "A delightful mix of fresh seasonal berries",
                  price: "500/- per Kilo",
                },
              ].map((fruit, index) => {
                const currentImage = useImageSlider(fruit.image); // 🔥 Use slider hook

                return (
                  <motion.div
                    key={fruit.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                    onClick={() => {
                      navigate("/shop");
                    }}
                  >
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={currentImage}
                        alt={fruit.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 text-center">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {fruit.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{fruit.description}</p>
                      <div className="flex items-center justify-center">
                        <span className="w-full py-3 rounded-xl text-white bg-green-600 text-center font-semibold">
                          Shop Now
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        <Banner2 />
        {/* Features Section */}
        <section className="py-10 xs:py-24 sm:py-24 md:py-24 lg:py-24 xl:py-24 xxl:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 xs:mb-8 sm:mb-8 md:mb-16 lg:mb-16 xl:mb-16 xxl:mb-16"
            >
              <span className="text-green-600 font-medium">Why Choose Us</span>
              <h2 className="text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl xxl:text-4xl font-bold mt-2 text-gray-900">
                Our Promise
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-4 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-8 xxl:gap-8">
              <FeatureCard
                icon={Leaf}
                title="100% Organic"
                description="All our fruits are organically grown without harmful pesticides"
                delay={0.2}
              />
              <FeatureCard
                icon={Truck}
                title="Express Delivery"
                description="Same-day delivery to ensure maximum freshness"
                delay={0.4}
              />
              <FeatureCard
                icon={Shield}
                title="Quality Guaranteed"
                description="100% satisfaction guarantee or your money back"
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-2 xs:py-2 sm:py-2 md:py-24 lg:py-24 xl:py-24 xxl:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto"
            >
              <span className="text-green-600 font-medium">Stay Updated</span>
              <h2 className="text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl xxl:text-4xl font-bold mt-2 mb-4 text-gray-900">
                Get Fresh Updates
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for the latest updates on fresh
                arrivals and special offers.
              </p>
              {/* <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors">
                  Subscribe
                </button>
              </div> */}
            </motion.div>
          </div>
        </section>
      </div>
      <WhatsappButton />
    </>
  );
};

export default Home;
