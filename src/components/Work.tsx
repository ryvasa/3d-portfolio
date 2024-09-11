import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { SectionContext } from "../libs/utils/context";
import { useScroll as useScrollHook } from "../libs/hooks/useSchroll";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextGenerateEffect } from "./TextGeneratorEffect";

const Work = () => {
  const [firstVisible, setFirstVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const workRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useContext(SectionContext);

  const expirience = useMemo(
    () => [
      {
        time: 1984,
        title: "First Macintosh computer",
        description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.`,
      },
      {
        time: 1998,
        title: "iMac",
        description: `iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms`,
      },
      {
        time: 2001,
        title: "iPod",
        description: `The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple`,
      },
      {
        time: 2007,
        title: "iPhone",
        description: ` iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share`,
      },
      {
        time: 2015,
        title: "Apple Watch",
        description: `The Apple Watch is a line of smartwatches produced by Apple Inc.
 It incorporates fitness tracking, health-oriented capabilities,
 and wireless telecommunication, and integrates with iOS and other
 Apple products and services`,
      },
    ],
    [],
  );

  const handleVisible = (): void => {
    if (!firstVisible) {
      setFirstVisible(true);
    }
  };

  useScrollHook(setIsVisible, workRef, handleVisible, 0.2);

  useEffect(() => {
    if (isVisible) {
      dispatch({ section: "work" });
    }
  }, [isVisible, dispatch]);

  const { scrollYProgress } = useScroll({
    target: workRef,
    offset: ["start end", "end start"],
  });

  const translateYToTop = useTransform(scrollYProgress, [0, 1], [200, -300]);

  return (
    <div
      id="work"
      ref={workRef}
      className="w-full flex justify-center items-center relative"
    >
      <motion.div
        id="work-list"
        style={{ y: translateYToTop }}
        className="lg:w-4/5 w-[95%]  relative z-[2]  flex justify-center items-center "
      >
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {expirience.map((exp, index) => (
            <li key={index}>
              {index !== 0 && <hr className="bg-dark-xs" />}
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={firstVisible && { opacity: 1 }}
                transition={{
                  delay: index / 10,
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className={`${
                  index % 2 !== 0
                    ? "timeline-end"
                    : "timeline-start  md:text-end"
                } my-5 rounded-md bg-dark-lg/50 backdrop-blur-sm p-4 shadow-sm lg:w-[500px] w-full  `}
              >
                <time className="font-mono italic">{exp.time}</time>
                <div className="text-lg font-black text-dark-xs">
                  {exp.title}
                </div>
                {firstVisible && (
                  <TextGenerateEffect
                    words={exp.description}
                    initialDelay={index / 10}
                    chunkSize={exp.description.split(" ").length}
                  />
                )}
              </motion.div>
              {index !== expirience.length - 1 && <hr className="bg-dark-xs" />}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Work;
// <div
//   style={{
//     height: height + "px",
//   }}
//   className="absolute left-1 lg:left-1/2 top-0 transform -translate-x-1/2 overflow-hidden w-[5px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-dark-lg to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
// >
//   <motion.div
//     style={{
//       height: heightTransform,
//       opacity: opacityTransform,
//     }}
//     className="absolute inset-x-0 top-0 w-[5px] bg-gradient-to-t from-dark-xs via-dark-md to-dark-md rounded-full"
//   />
// </div>
