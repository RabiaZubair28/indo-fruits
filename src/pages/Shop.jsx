import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Filter, Search } from "lucide-react";
import { useEffect, useRef } from "react";
import mb from "../assets/Images/mb7.webp";
import { gsap } from "gsap";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";

import { toast, Toaster } from "react-hot-toast";

const CustomModal = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-blue-50 bg-opacity-95 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-3xl p-6 max-w-xl w-full relative shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        <motion.button
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={closeModal}
          className="absolute -right-4 -top-4 w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.button>

        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-4">
            Send Us Inquiry!
          </h2>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const defaultOrderFormData = {
  name: "",
  email: "",
  description: "",
  itemNo: "",
  contactNo: "",
};

const FloatingCard = ({ fruit, index }) => {
  const cardRef = useRef(null);
  const form = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [order, setOrder] = useState(defaultOrderFormData);

  useEffect(() => {
    gsap.to(cardRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 4,
    });
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_levr829",
        "template_inswzq6",
        form.current,
        "jcVI9RMOUyvYiqeSL"
      )
      .then(() => {
        toast.success("Email sent successfully!");
        setModalOpen(false);
        setOrder(defaultOrderFormData);
      })
      .catch((error) => {
        toast.error("Failed to send email. Please try again.");
        console.error("FAILED...", error);
      });
  };

  return (
    <div ref={cardRef}>
      {modalOpen &&
        createPortal(
          <CustomModal closeModal={() => setModalOpen(false)}>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                value={order.name}
                onChange={handleInput}
                placeholder="Fruit Name"
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={order.email}
                onChange={handleInput}
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="tel"
                name="contactNo"
                value={order.contactNo}
                onChange={handleInput}
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="number"
                name="itemNo"
                value={order.itemNo}
                onChange={handleInput}
                placeholder="Quantity"
                className="w-full px-4 py-2 border rounded"
              />

              <textarea
                name="description"
                value={order.description}
                onChange={handleInput}
                placeholder="Message"
                className="w-full px-4 py-2 border rounded"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Send Inquiry
              </button>
            </form>
          </CustomModal>,
          document.body
        )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
      >
        <div className="relative">
          <img
            src={fruit.image}
            alt={fruit.name}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{fruit.rating}</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold mb-2">{fruit.name}</h3>
              <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                {fruit.category}
              </span>
            </div>
            <div className="text-2xl font-bold text-green-600">
              {fruit.price}/- per Kilo
            </div>
          </div>
          <button
            className="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 transform hover:scale-105 transition-transform duration-300"
            onClick={() => {
              setOrder((prev) => ({ ...prev, name: fruit.name }));
              setModalOpen(true);
            }}
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Shop Now</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const fruits = [
  {
    id: 1,
    name: "Premium Mangoes",
    price: 100,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80",
    description: "Sweet and juicy mangoes from the finest orchards",
    category: "Tropical",
  },
  {
    id: 2,
    name: "Organic Avocados",
    price: 900,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80",
    description: "Creamy and nutritious avocados",
    category: "Tropical",
  },
  {
    id: 3,
    name: "Fresh Cherries",
    price: 500,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&q=80",
    description: "Fresh and sweet cherries",
    category: "Berries",
  },
  {
    id: 4,
    name: "Wild Mulberry",
    price: 250,
    rating: 4.6,
    image: mb,
    description: "Delicious and healthy mulberries",
    category: "Berries",
  },
  {
    id: 5,
    name: "Organic Blueberry",
    price: 200,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80",
    description: "Fresh blueberries packed with antioxidants",
    category: "Berries",
  },
  {
    id: 6,
    name: "Fresh Strawberry",
    price: 50,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80",
    description: "Sweet and juicy strawberries",
    category: "Berries",
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", "Tropical", "Berries"];

  const filteredFruits = fruits.filter((fruit) => {
    const matchesCategory =
      selectedCategory === "All" || fruit.category === selectedCategory;
    const matchesSearch = fruit.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-8 xs:pb-8 sm:pb-8 md:pb-16 lg:pb-16 xl:pb-16 xxl:pb-16 min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-2 xs:mb-2 sm:mb-2 md:mb-12 lg:mb-12 xl:mb-12 xxl:mb-12"
        >
          <h1 className="text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl xxl:text-4xl  font-bold mb-4">
            Fresh Fruits Market
          </h1>
          <p className="text-gray-600 text-lg">
            Discover nature's sweetest offerings
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-2xl shadow-lg">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search fruits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="text-green-600" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-4 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-8">
            {filteredFruits.map((fruit, index) => (
              <FloatingCard key={index} fruit={fruit} index={index} />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Shop;
