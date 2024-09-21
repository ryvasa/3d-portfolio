import { useScroll, motion, useTransform } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import { SectionContext } from '../libs/utils/context';
import { useScroll as useScrollHook } from '../libs/hooks/useSchroll';
import { FlipWords } from './FlipWords';
import {
  Express,
  Nest,
  Postgres,
  Node,
  Mysql,
  Bootstrap,
  Css,
  Jest,
  Next,
  Rabbitmq,
  React,
  Redis,
  Tailwind,
  Mongo,
  Socket,
} from './Icons';

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
      dispatch({ section: 'skills' });
    }
  }, [isVisible, dispatch]);
  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: ['start start', 'end start'],
  });

  const translateYToTop = useTransform(scrollYProgress, [0, 1], [100, -300]);
  return (
    <div
      id="skills"
      ref={skillsRef}
      className="relative flex justify-center items-center lg:min-h-screen"
    >
      <div className="relative flex justify-center items-center w-full">
        <div className="lg:lg:w-4/5 w-[95%] relative z-10">
          <motion.div
            style={{ y: translateYToTop }}
            className="grid gap-1 grid-cols-4 grid-rows-5"
          >
            <div className="bg-dark-lg/40 border border-dark-lg backdrop-blur-sm rounded-md p-2 lg:p-8 col-span-2 row-span-4">
              <h2 className="text-dark-xs font-bold text-xl lg:text-4xl">
                Skills
              </h2>
              <div className="text-xs lg:text-base pb-4">
                <ol className="list-decimal px-8">
                  <li> Building a RESTful API</li>
                  <li>
                    Mastering programming languages such as JavaScript and
                    Typescript
                  </li>
                  <li>
                    Understand the use of supporting tools such as Redis, Nginx,
                    and Rabbitmq
                  </li>
                  <li> Implementing a WebSocket such as socket.io</li>
                  <li> Have basic knowledge about using AWS</li>
                  <li> Can operate the Linux operating system</li>
                </ol>
                <div className="py-4">
                  <h3 className="text-dark-xs font-bold text-xl lg:text-2xl">
                    Other skills
                  </h3>
                  <ol className="list-decimal px-8">
                    <li> Desire to continue learning and developing</li>
                    <li> Problem solving</li>
                    <li> Easily adapt to new technology</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="bg-dark-lg/40 border border-dark-lg backdrop-blur-sm rounded-md lg:p-8 col-span-2 col-start-1 row-start-5 flex justify-center items-center relative">
              <FlipWords
                className="text-dark-xs text-xs lg:text-3xl font-semibold absolute z-10"
                words={[
                  'Web Developer',
                  'Back-end Developer',
                  'Front-end Developer',
                ]}
              />
            </div>
            <div className="col-span-2 col-start-3 row-start-1 flex justify-center items-center">
              <h2 className="text-dark-xs font-bold text-xl lg:text-4xl">
                TectStack
              </h2>
            </div>
            <div className="bg-dark-lg/40 border border-dark-lg backdrop-blur-sm rounded-md p-2 lg:p-8 col-span-2 row-span-2 bg-red-6 col-start-3 row-start-2">
              <h3 className="text-dark-xs text-xl font-semibold pb-2">
                Back-end
              </h3>
              <ul className="grid lg:grid-cols-2 lg:gap-2 grid-cols-1">
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Node />
                  Node
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Nest />
                  NestJS
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Express />
                  ExpressJS
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Postgres />
                  PostgreSQL
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Mysql />
                  MySQL
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Mongo />
                  MongoDB
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Rabbitmq />
                  RabbitMQ
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Redis />
                  Redis
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Socket />
                  Socket.io
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Jest />
                  Jest
                </li>
              </ul>
            </div>
            <div className="bg-dark-lg/40 border border-dark-lg backdrop-blur-sm rounded-md p-2 lg:p-8 col-span-2 row-span-2 col-start-3 row-start-4">
              <h3 className="text-dark-xs text-xl font-semibold pb-2">
                Front-end
              </h3>
              <ul className="grid lg:grid-cols-2 lg:gap-2 grid-cols-1">
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Css />
                  CSS
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Tailwind />
                  TailwindCSS
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <React />
                  ReactJS
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Next />
                  NextJS
                </li>
                <li className="flex gap-1 items-center text-xs lg:text-base">
                  <Bootstrap />
                  Bootstrap
                </li>
              </ul>
            </div>
          </motion.div>
          {/*
          <motion.div
            style={{ translateY: translateYToTop }}
            className="bg-dark-lg/40 border border-dark-lg backdrop-blur-sm rounded-md p-10"
          ></motion.div>
            */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
