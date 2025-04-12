import fruitSplash from "../../assets/Images/fruitSplash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/Animation";

const About = () => {
  return (
    <section
      id="about"
      className="bg-secondary/15 mt-6 xs:mt-6 sm:mt-6 md:mt-10 lg:mt-10 xl:mt-10 xxl:mt-10 mb-8 xs:mb-8 sm:mb-8 md:mb-10 lg:mb-10 xl:mb-10 xxl:mb-10"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-3 xs:space-y-3 sm:space-y-3 md:space-y-0 py-0">
        {/* Brand Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={fruitSplash}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>

        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5 xs:mb-16 sm:mb-16 md:mb-16 lg:mb-16 xl:mb-16 xxl:mb-16"
          >
            <span className="text-green-600 font-medium">Our Comittment</span>
            <h2 className="text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl xxl:text-4xl font-bold mt-2 text-gray-900">
              Indo Fruits
            </h2>
          </motion.div>
          <motion.p
            variants={FadeUp(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="leading-relaxed px-5 text-center"
          >
            Indo Fruits is committed to providing farm-fresh, organic fruits
            right to your doorstep. We partner with local farmers to ensure the
            highest quality, free from harmful pesticides and chemicals!
          </motion.p>

          <motion.p
            variants={FadeUp(1.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" leading-relaxed px-5 text-center"
          >
            At FreshHarvest Fruits, we believe in the power of fresh,
            nutrient-rich produce to nourish both body and soul. Sourced from
            trusted farms, our fruits are handpicked daily to guarantee peak
            freshness. Join us in supporting sustainable farming practices while
            enjoying nature’s finest flavors!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
