import { RxHamburgerMenu } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";
import ResponsiveMobileMenu from "./ResponsiveMobileMenu";

const NavBarMenu = [
  { id: 1, title: "Home", link: "home" },
  { id: 2, title: "Products", link: "products" },
  { id: 3, title: "About", link: "about" },
  { id: 4, title: "Shop", link: "shop" },
  { id: 5, title: "Contact", link: "contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  // Smooth scroll to the section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white border shadow-lg h-24 pb-6 w-full">
      {/* Logo Section */}
      <div className="container mx-auto flex justify-between items-center p-3">
        <div className="flex gap-1 font-bold uppercase pt-2 pl-6">
          <p className="text-xl font-averia text-primary">Fresh</p>
          <p className="text-xl font-averia text-secondary">Fruits</p>
        </div>

        {/* Desktop Menu Section */}
        <ul className="md:flex hidden items-center pr-10">
          {NavBarMenu.map((menu) => (
            <li key={menu.id} className="text-xl">
              <button
                className="p-5 items-center font-serif hover:text-primary"
                onClick={() => handleScroll(menu.link)}
              >
                {menu.title}
              </button>
            </li>
          ))}
          <button>
            <HiShoppingCart className="text-2xl hover:text-primary" />
          </button>
        </ul>

        {/* Mobile Hamburger Menu Section */}
        <div
          className="md:hidden flex items-center"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <button>
            <RxHamburgerMenu className="text-3xl" />
          </button>
          <ResponsiveMobileMenu
            open={open}
            menuItems={NavBarMenu}
            setOpen={setOpen}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
