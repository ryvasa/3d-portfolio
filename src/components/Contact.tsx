import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { SectionContext } from "../libs/utils/context";
import { useScroll as useScrollHook } from "../libs/hooks/useSchroll";
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [firstVisible, setFirstVisible] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useContext(SectionContext);

  const handleVisible = (): void => {
    if (!firstVisible) {
      setFirstVisible(true);
    }
  };

  useScrollHook(setIsVisible, contactRef, handleVisible, 0.4);

  useEffect(() => {
    if (isVisible) {
      dispatch({ section: "contact" });
    }
  }, [isVisible, dispatch]);

  // Parallax effect implementation
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start start", "end start"],
  });

  const translateYToTop = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  return (
    <div className="min-h-screen relative flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className={`absolute inset-0 bg-cover lg:bg-transparent bg-primary-dark lg:w-1/2 bg-left bg-no-repeat bg-[url('/images/bg-3-1.png')]`}
      >
        <div className="w-full left-0 h-full absolute bg-gradient-to-r from-primary-dark/0 via-primary-dark/0 to-primary-dark"></div>
      </motion.div>
      <div className="w-full top-0 h-full absolute bg-gradient-to-b from-primary-dark via-primary-dark/0 to-primary-dark"></div>
      <motion.div
        style={{ y: translateYToTop }}
        className="lg:absolute lg:left-20 w-[95%] lg:w-1/2"
      >
        <h2 className="text-xl lg:text-3xl font-semibold pb-4">Contact</h2>
        <div className="bg-dark-xl/90 backdrop-blur-sm flex flex-col gap-4 lg:p-8 p-4 rounded-md">
          <p className="text-xs lg:text-lg">Lorem ipsum dolor sit amet!</p>
          <div className="flex flex-col lg:flex-row gap-4">
            <label className="flex-1 border-dark-lg input-dark-xs bg-transparent input flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-dark-xs"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow placeholder:text-xs lg:placeholder:text-base"
                placeholder="Email"
              />
            </label>
            <label className="flex-1 border-dark-lg input-dark-xs bg-transparent input flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-dark-xs"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow placeholder:text-xs lg:placeholder:text-base"
                placeholder="Full Name"
              />
            </label>
          </div>
          <label className="border-dark-lg flex items-center gap-1">
            <textarea
              className="textarea textarea-bordered bg-transparent w-full h-32 text-base placeholder:text-xs lg:placeholder:text-base"
              placeholder="Message"
            ></textarea>
          </label>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
