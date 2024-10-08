import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { SectionContext } from "../libs/utils/context";
import { useScroll as useScrollHook } from "../libs/hooks/useSchroll";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextGenerateEffect } from "./TextGeneratorEffect";

const Experience = () => {
  const [firstVisible, setFirstVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useContext(SectionContext);

  const expirience = useMemo(
    () => [
      {
        time: "11 September 2023 - 2024",
        title: "IDCamp 2023 (React developer)",
        description: `Build single page applications using react to manage notes, I implement custom hooks, routers, theme changes, and many other things.`,
      },
      {
        time: "25 Januari 2023 - 3 November 2023",
        title: "DBS Foundation Coding Camp (Backend developer)",
        description: `Build RESTful API using node js with PostgreSQL database and also implement other technologies like redis for data cache, rabbitmq for broker massage, and set access limits using nginx.`,
      },
      {
        time: "1 Mei 2023 - 30 Juli 2023",
        title:
          "PESILAT (Pelatihan Vokasi Kilat) 2023 by Alkdemi (Fullstack   developer)",
        description: `Building a village aspirations web application with the aim of accommodating the ideas and complaints of the local community in the hope that their aspirations will be heard and can be granted for village progress and development, this application was built with nuxt3, express, and MySQL.`,
      },
      {
        time: "Oktober 2022 - Desember 2022",
        title: "DevOps and Back-End Developer Scholarship Program",
        description: `Create a RESTful API to manage books as a final learning project.`,
      },
    ],
    [],
  );

  const handleVisible = (): void => {
    if (!firstVisible) {
      setFirstVisible(true);
    }
  };

  useScrollHook(setIsVisible, experienceRef, handleVisible, 0.2);

  useEffect(() => {
    if (isVisible) {
      dispatch({ section: "experience" });
    }
  }, [isVisible, dispatch]);

  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"],
  });

  const translateYToTop = useTransform(scrollYProgress, [0, 1], [200, -300]);

  return (
    <div
      id="experience"
      ref={experienceRef}
      className="w-full flex justify-center items-center relative pt-4"
    >
      <motion.div
        id="experience-list"
        style={{ y: translateYToTop }}
        className="lg:w-4/5 w-[95%]  relative z-[2]  flex justify-center items-center "
      >
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pr-4">
          <h1 className="text-xl lg:text-3xl text-dark-xs font-bold absolute lg:top-4 -top-10">
            Experience
          </h1>
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
                  index % 2 === 0
                    ? "timeline-end"
                    : "timeline-start  md:text-end"
                } my-5 rounded-md bg-dark-lg/50 border border-dark-lg backdrop-blur-sm p-4 shadow-sm lg:w-[500px] w-full  `}
              >
                <time className="font-mono italic text-sm lg:text-lg">
                  {exp.time}
                </time>
                <div className="lg:text-lg text-base font-semibold text-dark-xs">
                  {exp.title}
                </div>
                {firstVisible && (
                  <TextGenerateEffect
                    words={exp.description}
                    initialDelay={index / 10}
                    chunkSize={exp.description.split(" ").length}
                    className="text-xs lg:text-base"
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

export default Experience;
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
