import { useContext, useEffect, useRef, useState } from "react";
import { useScroll as useScrollHook } from "../libs/hooks/useSchroll";
import { SectionContext } from "../libs/utils/context";
import { LayoutGrid } from "./LayoutGrid";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Express,
  React,
  Tailwind,
  Node,
  Mysql,
  Mongo,
  Next,
  Nest,
  Postgres,
  Socket,
} from "./Icons";

const Project = (): JSX.Element => {
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
  }, [isVisible, dispatch]);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start start", "end start"],
  });

  const translateYToTop = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div
      id="projects"
      ref={projectRef}
      className="lg:min-h-screen relative z-[1] py-4"
    >
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
    <div className="flex flex-col gap-1">
      <p className="font-bold md:text-4xl text-xl text-white">Online Store</p>

      <p className="font-normal text-base max-w-lg text-neutral-200">
        This application is an online shop, as a visitor the user can see the
        items being sold, if interested the user can also add them to the basket
        and then place an order.
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-dark-xs font-semibold">Build with</p>
        <div className="gap-2 flex">
          <React />
          <Tailwind />
          <Express />
          <Node />
          <Mysql />
        </div>
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold md:text-4xl text-xl text-white">Blog</p>
      <p className="font-normal text-base max-w-lg text-neutral-200">
        Building a blog application to manage content, users can view, add,
        delete, and edit article content, other users can also add comments and
        their responses about the article.
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-dark-xs font-semibold">Build with</p>
        <div className="gap-2 flex">
          <React />
          <Tailwind />
          <Express />
          <Node />
          <Mongo />
        </div>
      </div>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold md:text-4xl text-xl text-white">Sosmed App</p>
      <p className="font-normal text-base max-w-lg text-neutral-200">
        This application has functionality like social media in general, such as
        creating posts, and giving likes and comments, apart from that users can
        also understand other users with the realtime chat feature.
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-dark-xs font-semibold">Build with</p>
        <div className="gap-2 flex">
          <Next />
          <Tailwind />
          <Nest />
          <Node />
          <Postgres />
          <Socket />
        </div>
      </div>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold md:text-4xl text-xl text-white">
        Admin Dashboard
      </p>
      <p className="font-normal text-base max-w-lg text-neutral-200">
        This is an admin dashboard application. This application aims to manage
        data on online store applications, such as managing data on goods,
        sales, users, and also orders made.
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-dark-xs font-semibold">Build with</p>
        <div className="gap-2 flex">
          <React />
          <Tailwind />
          <Express />
          <Node />
          <Mysql />
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "lg:col-span-3 lg:row-span-4 col-start-3 col-span-2 row-span-3",
    thumbnail: "/images/projects/home.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-2 row-span-3 row-start-2 ",
    thumbnail: "/images/projects/blog.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className:
      "lg:col-span-3 lg:row-span-3 lg:row-start-5 col-span-2 row-span-4 col-start-3 row-start-4",
    thumbnail: "/images/projects/sosmed.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className:
      "lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-5 col-span-2 row-span-3 row-start-5",
    thumbnail: "/images/projects/dashboard.png",
  },
];
