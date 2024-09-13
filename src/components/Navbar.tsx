import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { SectionContext } from "../libs/utils/context";

const Navbar = (): JSX.Element => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  window.onscroll = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  const menu = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  const { state } = useContext(SectionContext);

  return (
    <nav
      className={`${
        isAtTop
          ? "bg-transparent"
          : "bg-primary-dark/50 backdrop-blur-md shadow-md"
      } z-20 text-font-primary w-full fixed top-0 left-0 py-3 px-8 flex justify-between items-center`}
    >
      <img
        className="h-10 w-10"
        src="logo/ryvasa-high-resolution-logo-transparent.png"
        alt="logo"
      />

      {/* Hamburger button */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none flex flex-col justify-between w-6 h-6 "
        >
          <motion.div
            className="bg-dark-xs h-1 rounded-sm w-full"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }}
          />
          <motion.div
            className="bg-dark-xs h-1 rounded-sm w-full"
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.div
            className="bg-dark-xs h-1 rounded-sm w-full"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -10 : 0 }}
          />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-14 right-8 bg-primary-dark w-1/4 shadow-lg rounded-lg py-4 px-6"
          >
            <ul className="flex flex-col gap-4">
              {menu.map(({ name, link }: { name: string; link: string }) => (
                <motion.li
                  key={name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${
                    state.section === name.toLowerCase()
                      ? "text-dark-xs"
                      : "text-font-primary "
                  } border-b-2 border-transparent hover:border-dark-xs `}
                >
                  <a href={link} onClick={() => setIsOpen(false)}>
                    {name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      <div className="lg:flex hidden">
        <ul className="flex gap-8 font-semibold text-md">
          {menu.map(({ name, link }: { name: string; link: string }) => (
            <motion.li
              key={name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${
                state.section === name.toLowerCase()
                  ? "text-dark-xs"
                  : "text-font-primary "
              } border-b-2 border-transparent hover:border-dark-xs transition-colors duration-300`}
            >
              <a href={link}>{name}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
