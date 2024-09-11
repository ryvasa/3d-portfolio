import { useContext, useEffect, useRef, useState } from "react";
import { useScroll as useScrollHook } from "../libs/hooks/useSchroll";
import { SectionContext } from "../libs/utils/context";
import { LayoutGrid } from "./LayoutGrid";
import { motion, useScroll, useTransform } from "framer-motion";

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [firstVisible, setFirstVisible] = useState(true);
  const projectRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useContext(SectionContext);

  const handleVisible = (): void => {
    if (!firstVisible) {
      setFirstVisible(true);
    }
  };

  useScrollHook(setIsVisible, projectRef, handleVisible, 0.3);

  useEffect(() => {
    if (isVisible) {
      dispatch({ section: "projects" });
    }
  }, [isVisible]);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start start", "end start"],
  });

  const translateYToTop = useTransform(scrollYProgress, [0, 1], [100, -300]);

  return (
    <div id="projects" ref={projectRef} className="min-h-screen relative z-[1]">
      <div className="absolute bg-gradient-to-b from-primary-dark via-primary-dark/0 to-primary-dark top-0 h-full w-full"></div>
      <div className="flex justify-center items-center">
        <motion.div
          style={{ y: translateYToTop }}
          className="h-screen lg:w-4/5 w-[95%]"
          initial={!firstVisible && { opacity: 0 }}
          animate={firstVisible && { opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          <LayoutGrid cards={cards} />
        </motion.div>
      </div>
    </div>
  );
};

export default Project;

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "lg:col-span-3 lg:row-span-4 col-start-3 col-span-2 row-span-3",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-2 row-span-3 row-start-2 ",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className:
      "lg:col-span-3 lg:row-span-3 lg:row-start-5 col-span-2 row-span-4 col-start-3 row-start-4",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className:
      "lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-5 col-span-2 row-span-3 row-start-5",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
