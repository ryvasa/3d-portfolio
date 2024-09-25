import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { SectionContext } from "../libs/utils/context";
import { useScroll as useScrollHook } from "../libs/hooks/useSchroll";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextGenerateEffect } from "./TextGeneratorEffect";

const About = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [firstVisible, setFirstVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useContext(SectionContext);

  const text = useMemo(
    () =>
      `Hello! I'm Ryan Oktavian Saputra, a versatile Backend Developer with a strong expertise in building robust and scalable server-side applications. My core skills include working with Node.js, NestJS, and ExpressJS to craft efficient APIs while leveraging databases like PostgreSQL, MySQL, and MongoDB for data management. I also specialize in implementing real-time functionalities using Socket.IO and RabbitMQ, and optimizing performance with Redis caching solutions. Beyond backend development, I am also proficient in frontend technologies such as ReactJS, NextJS, and TailwindCSS, allowing me to create cohesive and dynamic full-stack solutions. I'm passionate about creating seamless, high-performance applications that make a difference. Let's build something great together!`,
    [],
  );

  const handleVisible = (): void => {
    if (!firstVisible) {
      setFirstVisible(true);
    }
  };

  useScrollHook(setIsVisible, aboutRef, handleVisible, 0.4);

  useEffect(() => {
    if (isVisible) {
      dispatch({ section: "about" });
    }
  }, [isVisible, dispatch]);

  // Parallax effect implementation
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end start"],
  });

  const translateYToTop = useTransform(scrollYProgress, [0, 1], [100, -300]);

  return (
    <div className="relative py-4" ref={aboutRef}>
      <div className="w-full -top-20 bg-gradient-to-b from-primary-dark/0 via-primary-dark to-primary-dark absolute min-h-40"></div>
      <div
        className=" bg-primary-dark pt-10 flex justify-center items-center text-font-primary lg:min-h-screen"
        id="about"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={firstVisible && { opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className={`absolute inset-0 bg-cover bg-left bg-no-repeat lg:bg-[url('/images/bg-1.svg')] bg-[url('/images/bg-1.svg')]`}
        ></motion.div>
        <div className="w-full top-0 h-full absolute bg-gradient-to-b from-primary-dark via-primary-dark/0 to-primary-dark "></div>

        <div className="w-full flex justify-center items-center relative h-fit py-10 ">
          {firstVisible && (
            <>
              <motion.div
                style={{ y: translateYToTop }}
                initial={{ opacity: 0, y: -50 }}
                animate={firstVisible && { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="lg:w-4/5 w-[95%]  grid grix-cols-1 lg:grid-cols-3 lg:grid-rows-6 gap-1 h-full "
              >
                <div className="w-full h-full flex lg:justify-center items-center">
                  <p className="text-dark-xs text-xl lg:text-3xl font-semibold p-2">
                    About Me
                  </p>
                </div>
                <div className="lg:row-span-5 lg:row-start-2 overflow-hidden rounded-md bg-dark-lg/40 border border-dark-lg backdrop-blur-sm w-full h-full flex justify-center items-center ">
                  <span className="w-full h-full absolute z-10 bg-gradient-to-b from-[#0E0E0E]/0 via-[#0E0E0E]/20 to-[#0E0E0E]"></span>
                  <img
                    src="/images/pic.png"
                    alt="photo"
                    className="h-96 w-96 object-cover"
                  />
                </div>

                <div className="lg:col-span-2 lg:row-span-6 rounded-md bg-dark-lg/40 border border-dark-lg backdrop-blur-sm py-4 px-8 min-w-full min-h-full flex justify-center items-center">
                  <TextGenerateEffect
                    words={text}
                    chunkSize={20}
                    initialDelay={0.5}
                    duration={0.3}
                    className="lg:text-base text-xs"
                  />
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
