import { FaShoppingBag } from "react-icons/fa";
import HeroImg from "../../assets/Images/HeroImg.png";
import leaf from "../../assets/Images/leaf.png";
import { FadeRight } from "../../utility/Animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* //   Hero About session */}
        <div className="flex flex-col justify-normal py-5 md:py-1  relative z-20">
          <div className="text-center md:text-left md:pl-4 p-8">
            <motion.h1
              variants={FadeRight(0.5)}
              initial="hidden"
              animate="visible"
              className="font-averia text-5xl pt-6"
            >
              Healthy
            </motion.h1>
            <motion.h1
              variants={FadeRight(0.8)}
              initial="hidden"
              animate="visible"
              className="font-averia text-4xl pt-4"
            >
              Fresh <span className="text-secondary">Fruits!</span>
            </motion.h1>
            <motion.h2
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-3xl pt-6"
            >
              Order now for your health life
            </motion.h2>
            <motion.p
              variants={FadeRight(1.6)}
              initial="hidden"
              animate="visible"
              className="text-2xl p-6 pl-0 space-y-6 lg:max-width-[400px]"
            >
              At our store, we believe in delivering the fresh and healthiest
              fruits straight from the farm to your doorstep. Our carefully
              selected range ensures you enjoy the best flavors nature has to
              offer, all while supporting sustainable farming practices.
              Experience the joy of fresh, quality fruit with every bite!
            </motion.p>
            <motion.div
              variants={FadeRight(1.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-3 mt-6">
                Order Now
                <FaShoppingBag className="pl-3 text-2xl" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Here image session */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            src={HeroImg}
            alt=""
            className="w-[350px] md:w-[550px] drop-shadow "
          />
        </div>

        {/* Leaf Image session */}
        <div className=" absolute  top-14 md:top-2 right-1/2 rotate-[49deg] blur-sm opacity-80 ">
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 60 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 3, delay: 0.3 }}
            src={leaf}
            alt=""
            className="w-full  md:max-w-[380px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
