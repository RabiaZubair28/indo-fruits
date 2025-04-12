/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMobileMenu = ({ open, menuItems, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-12 left-0 w-full h-screen z-50 flex flex-col "
        >
          <div className="text-xl font-semibold bg-primary  text-white rounded-3xl m-5 p-3">
            <ul className="flex flex-col items-center gap-7">
              {menuItems.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="text-white hover:text-white"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMobileMenu;
