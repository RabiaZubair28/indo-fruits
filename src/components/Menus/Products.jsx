import { FaRupeeSign } from "react-icons/fa";
import avocado from "../../assets/Images/Avocado.jpg";
import bb from "../../assets/Images/bb.png";
import sb from "../../assets/Images/Strawberry.jpg";
import mb from "../../assets/Images/Mulberry.webp";
import cherry from "../../assets/Images/cherry.jpeg";
import mango from "../../assets/Images/mango.jpeg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/Animation";
import { useState } from "react";

const MenuData = [
  {
    id: 1,
    title: "Creamy Avocado",
    link: "/",
    price: "900/-",
    img: avocado,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Mango",
    link: "/",
    price: "100/-",
    img: mango,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Juicy Strawberry",
    link: "/",
    price: "50/-",
    img: sb,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Tasty Mulberry",
    link: "/",
    price: "500/-",
    img: mb,
    delay: 1.2,
  },
  {
    id: 5,
    title: "Delicious Blackberry",
    price: "400/-",
    img: bb,
    delay: 0.9,
  },
  {
    id: 6,
    title: "Fresh cherry",
    link: "/",
    price: "300/-",
    img: cherry,
    delay: 0.6,
  },
];

const Products = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [showmore, setShowmore] = useState(false);

  const handleShowMore = () => {
    setVisibleItems(MenuData.length);
    setShowmore(true);
  };

  return (
    <section
      id="products"
      className="mt-8 xs:mt-8 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-10 xxl:mt-10 mb-8 xs:mb-8 sm:mb-8 md:mb-10 lg:mb-10 xl:mb-10 xxl:mb-10 bg-gray-50 flex justify-center"
    >
      <div className="w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 xs:mb-6 sm:mb-6 md:mb-12 lg:mb-12 xl:mb-12 xxl:mb-12"
        >
          <span className="text-green-600 font-medium text-lg sm:text-xl">
            Our Selection
          </span>
          <h2 className="text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl xxl:text-4xl font-bold mt-2 text-gray-900">
            Premium Fruits
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-4 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-6 xxl:gap-6">
          {MenuData.slice(0, visibleItems).map((menu) => (
            <motion.div
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.05 }}
              key={menu.id}
              className="bg-white rounded-2xl px-4 py-3 shadow-md flex flex-row items-center gap-4 h-auto"
            >
              <img
                src={menu.img}
                alt={menu.title}
                className="w-16 h-16 object-cover rounded-xl"
              />
              <div className="flex flex-col justify-center flex-grow">
                <h2 className="text-lg font-medium text-gray-800">
                  {menu.title}
                </h2>
                <p className="flex items-center text-red-600 font-semibold text-sm">
                  <FaRupeeSign className="mr-1" />
                  {menu.price} <span className="ml-1 text-gray-600">kg</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
