import { useScroll, motion, useTransform } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { SectionContext } from "../libs/utils/context";
import { useScroll as useScrollHook } from "../libs/hooks/useSchroll";
import { FlipWords } from "./FlipWords";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [firstVisible, setFirstVisible] = useState(true);
  const skillsRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useContext(SectionContext);

  const handleVisible = (): void => {
    if (!firstVisible) {
      setFirstVisible(true);
    }
  };

  useScrollHook(setIsVisible, skillsRef, handleVisible, 0.4);

  useEffect(() => {
    if (isVisible) {
      dispatch({ section: "skills" });
    }
  }, [isVisible]);
  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: ["start start", "end start"],
  });

  const translateYToTop = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <div
      id="skills"
      ref={skillsRef}
      className="relative flex justify-center items-center min-h-screen "
    >
      <div className="relative flex justify-center items-center w-full">
        <div className="lg:lg:w-4/5 w-[95%] relative z-10">
          <motion.div
            style={{ y: translateYToTop }}
            className="grid gap-1 lg:grid-cols-4 grid-rows-5"
          >
            <div className="bg-dark-lg/40 backdrop-blur-sm rounded-md p-2 lg:p-8 col-span-2 row-span-4">
              <h2 className="text-dark-xs lg:text-4xl font-bold text-sm">
                Soft Skills
              </h2>
              <p className="text-xs lg:text-base py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos a quia libero sit magnam iste magni reprehenderit
                esse, id dicta?
              </p>
            </div>
            <div className="bg-dark-lg/40 backdrop-blur-sm rounded-md lg:p-8 col-span-2 col-start-1 row-start-5 flex justify-center items-center relative">
              <FlipWords
                className="text-dark-xs text-xs lg:text-3xl font-semibold absolute z-10"
                words={[
                  "Web Developer",
                  "Back-end Developer",
                  "Front-end Developer",
                ]}
              />
            </div>
            <div className="lg:bg-transparent bg-dark-lg/40 backdrop-blur-sm lg:backdrop-blur-none rounded-md col-span-2 col-start-3 row-start-1 flex justify-center items-center">
              <h2 className="text-dark-xs font-bold text-4xl">
                Thecnical Skill
              </h2>
            </div>
            <div className="bg-dark-lg/40 backdrop-blur-sm rounded-md p-2 lg:p-8 col-span-2 row-span-2 bg-red-6 col-start-3 row-start-2">
              4
              <p className="text-xs lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos a quia libero sit magnam iste magni reprehenderit
                esse, id dicta?
              </p>
            </div>
            <div className="bg-dark-lg/40 backdrop-blur-sm rounded-md p-2 lg:p-8 col-span-2 row-span-2 col-start-3 row-start-4">
              5
              <p className="text-xs lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos a quia libero sit magnam iste magni reprehenderit
                esse, id dicta?
              </p>
            </div>
          </motion.div>
          {/*
          <motion.div
            style={{ translateY: translateYToTop }}
            className="bg-dark-lg/40 backdrop-blur-sm rounded-md p-10"
          ></motion.div>
            */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
