import BannerImg2 from "../../assets/Images/BannerImg2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/Animation";

const Shop = () => (
  <section
    id="shop"
    className="flex flex-col justify-center items-center mt-8 xs:mt-8 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-10 xxl:mt-10 mb-8 xs:mb-8 sm:mb-8 md:mb-10 lg:mb-10 xl:mb-10 xxl:mb-10"
  >
    <div className="container grid grid-cols-1 md:grid-cols-2 space-y-0 md:space-y-0 ">
      {/* Brand Info */}

      <div className="flex flex-col justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5 xs:mb-16 sm:mb-16 md:mb-16 lg:mb-16 xl:mb-16 xxl:mb-16"
        >
          <span className="text-green-600 font-medium">Our Goal</span>
          <h2 className="text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl xxl:text-4xl font-bold mt-2 text-gray-900">
            Indo Fruits
          </h2>
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.p
            className="leading-relaxed px-5 text-center"
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            At Indo Fruits, we make it easier than ever to get fresh, premium
            fruits delivered to your doorstep. Whether you are craving seasonal
            delights or looking for exotic varieties, our curated selection has
            something for everyone. With our user-friendly online store, you can
            browse and order in just a few clicks, and our seamless delivery
            service ensures your fruits arrive fresh and fast. For an even more
            convenient experience, download our app and enjoy exclusive deals,
            faster checkout, and order tracking—all in one place.
          </motion.p>
        </div>
      </div>

      {/* Brand Image */}
      <div className="flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, x: 200, rotate: 75 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
          src={BannerImg2}
          alt=""
          className="w-[350px] md:w-[500px] drop-shadow "
        />
      </div>
    </div>
  </section>
);

export default Shop;
