import { useContext, useEffect, useRef, useState } from "react";
// import MoonCanvas from "./MoonCanvas";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionContext, SectionContextType } from "../libs/utils/context";
import { useScroll as useScrollHook } from "../libs/hooks/useSchroll";
import { FlipWords } from "./FlipWords";
import { Globe } from "./Globe";

const Hero = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useContext<SectionContextType>(SectionContext);

  // const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useScrollHook(setIsVisible, homeRef, () => {}, 0.5);

  useEffect(() => {
    if (isVisible) {
      dispatch({ section: "home" });
    }
  }, [isVisible]);

  // Parallax effect implementation
  const { scrollYProgress } = useScroll({
    target: homeRef,
    offset: ["start start", "end start"],
  });

  const translateYToTop = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <div
      id="home"
      className="w-full h-screen relative text-font-primary"
      ref={homeRef}
    >
      <div className="w-full h-full relative">
        {/* {isLoaded && (
        )} */}
        <motion.div
          style={{
            y: translateYToTop,
          }}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="w-full h-full relative z-[1]"
        >
          <div className="absolute z-10 top-[20%] lg:top-1/2 left-10 lg:left-20 lg:-translate-y-1/2 text-font-primary">
            <h1 className="text-2xl lg:text-4xl font-bold">Hi, welcome</h1>
            <p className="text-xl lg:text-3xl font-semibold">
              I am <span className="text-dark-xs">Ryan Oktavian Saputra</span>
            </p>
            {isVisible && (
              <FlipWords
                className="text-xl lg:text-3xl font-semibold"
                words={[
                  "Web Developer",
                  "Back-end Developer",
                  "Front-end Developer",
                ]}
              />
            )}
          </div>
          <div className="absolute lg:w-fit w-full z-10 flex justify-center items-center lg:top-1/2 top-[90%] lg:right-20 lg:-translate-y-1/2 text-font-primary">
            <ul className="flex gap-2 lg:flex-col lg:w-60 px-4 lg:px-0">
              <li className="group transition-all w-fit lg:w-full">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  href="https://github.com/ryvasa"
                  target="_blank"
                  className="flex justify-between items-center group-hover:bg-dark-xs p-2 rounded-full"
                >
                  <div className="flex gap-2 justify-start items-center">
                    <svg
                      className="text-dark-xs group-hover:text-font-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      />
                    </svg>
                    <p className="text-font-primary text-md font-semibold">
                      ryvasa
                    </p>
                  </div>

                  <svg
                    className="text-font-primary h-5 w-5 hidden group-hover:block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10z"
                    />
                  </svg>
                </motion.a>
              </li>

              <li className="group transition-all w-fit lg:w-full">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  href="https://www.linkedin.com/in/ryan-oktavian-saputra-717884216/"
                  target="_blank"
                  className="flex justify-between items-center group-hover:bg-dark-xs p-2 rounded-full"
                >
                  <div className="flex gap-2 justify-start items-center">
                    <svg
                      className="text-dark-xs group-hover:text-font-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                      />
                    </svg>
                    <p className="text-font-primary text-md font-semibold">
                      Ryan Oktavian Saputra
                    </p>
                  </div>

                  <svg
                    className="text-font-primary h-5 w-5 hidden group-hover:block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 10v4h9l-3.5 3.5l2.42 2.42L19.84 12l-7.92-7.92L9.5 6.5L13 10z"
                    />
                  </svg>
                </motion.a>
              </li>
            </ul>
          </div>
        </motion.div>
        <div className="fixed top-0 w-full h-full ">
          <motion.div
            className="h-full w-full flex justify-end sticky top-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          >
            {/* <MoonCanvas
            onLoad={() => {
              setIsLoaded(true);
            }}
          />*/}
            <Globe className="z-10 bg-primary-dark" />
            {/* <BackgroundBeams /> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
