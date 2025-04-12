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
    price: "15/-",
    img: avocado,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Mango",
    link: "/",
    price: "10/-",
    img: mango,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Juicy Strawberry",
    link: "/",
    price: "40/-",
    img: sb,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Tasty Mulberry",
    link: "/",
    price: "35/-",
    img: mb,
    delay: 1.2,
  },
  {
    id: 5,
    title: "Delicious Blackberry",
    price: "40/-",
    img: bb,
    delay: 0.9,
  },
  {
    id: 6,
    title: "Fresh cherry",
    link: "/",
    price: "10/-",
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
      className="pt-12 pb-16 bg-gray-50 flex flex-row items-center justify-center"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-green-600 font-medium">Our Selection</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900">
            Premium Fruits
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 gap-4 ">
          {MenuData.slice(0, visibleItems).map((menu) => {
            return (
              <motion.div
                variants={FadeLeft(menu.delay)}
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 1.1 }}
                key={menu.id}
                className="bg-white rounded-3xl px-8 py-1 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center h-[90px]"
              >
                <img
                  src={menu.img}
                  alt=""
                  className="w-[70px] h-[65px] scale-125  transform -translate-y-1 rounded-3xl "
                />
                <h2 className="pl-3 ">{menu.title}</h2>
                <p className="flex text-red-600 font-semibold">
                  <span className="pt-1">
                    <FaRupeeSign />
                  </span>
                  {menu.price} kg
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* {!showmore && (
          <div className="text-center mt-9">
            <button
              className="bg-primary text-white hover:bg-third hover:text-white p-3 hover:font-semibold rounded-lg"
              onClick={handleShowMore}
            >
              show more
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Products;
