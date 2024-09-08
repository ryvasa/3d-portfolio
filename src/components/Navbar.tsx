import { motion } from 'framer-motion';
import { useState } from 'react';
const Navbar = (): JSX.Element => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  window.onscroll = () => {
    console.log(window.scrollY);
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
    console.log(isAtTop);
  };
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: 'easeInOut', delay: 0.7 }}
      className={`${
        isAtTop
          ? 'bg-transparent'
          : 'bg-primary-dark/30 backdrop-blur-md shadow-md '
      } z-20 text-font-primary w-full fixed top-0 left-0 py-3 px-8 flex justify-between items-center`}
    >
      <img
        className="h-10 w-10"
        src="logo/ryvasa-high-resolution-logo-transparent.png"
        alt="logo"
      />{' '}
      <div>
        <ul className="flex gap-8 font-bold text-md">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-dark-xs border-b-2 border-transparent hover:border-dark-xs"
          >
            <a href="">About</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="border-b-2 border-transparent hover:border-dark-xs"
          >
            <a href="">Projects</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="border-b-2 border-transparent hover:border-dark-xs"
          >
            <a href="">Contact</a>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
