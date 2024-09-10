import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { SectionContext } from '../libs/utils/context';
import { useScroll as useScrollHook } from '../libs/hooks/useSchroll';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextGenerateEffect } from './TextGeneratorEffect';
import { FlipWords } from './FlipWords';

const About = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [firstVisible, setFirstVisible] = useState(true);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useContext(SectionContext);

  const text = useMemo(
    () =>
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias ipsa quasi tenetur nobis officiis eius. Inventore, fuga repellat animi dicta ullam totam, quia eos minima adipisci quidem modi ipsum ut earum vero ex impedit nisi. Facilis nobis debitis laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusantium sunt totam voluptatum porro. Repellat quod quis quidem modi placeat tempore pariatur libero fugit eius qui quo earum doloremque laudantium atque consequatur cupiditate animi velit, minus odio praesentium nobis impedit temporibus tenetur! Maxime voluptatum vitae dignissimos ab saepe quibusdam dolorem distinctio iusto dolores. Ratione quam nostrum asperiores ex incidunt facere quae voluptatem accusamus unde dolorem. Illo, repudiandae! Obcaecati quisquam mollitia quidem molestiae culpa ab, et rerum, fugit eum tenetur vitae voluptatum unde laudantium perspiciatis placeat dolores delectus maxime architecto sunt earum amet officiis, quia omnis! Pariatur earum deserunt assumenda.`,
    []
  );

  const handleVisible = (): void => {
    if (!firstVisible) {
      console.log('test');
      setFirstVisible(true);
    }
  };

  useScrollHook(setIsVisible, aboutRef, handleVisible, 0.4);

  useEffect(() => {
    if (isVisible) {
      dispatch({ section: 'about' });
    }
  }, [isVisible, dispatch]);

  // Parallax effect implementation
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['start start', 'end start'],
  });

  const translateYToTop = useTransform(scrollYProgress, [0, 1], [100, -300]);

  return (
    <div className="relative" ref={aboutRef}>
      <div className="w-full -top-20 bg-gradient-to-b from-primary-dark/0 via-primary-dark/80 to-primary-dark absolute min-h-40"></div>
      <div
        className=" bg-primary-dark pt-10 flex justify-center items-center text-font-primary min-h-screen"
        id="about"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={firstVisible && { opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className={`absolute inset-0 bg-contain bg-center bg-no-repeat lg:bg-[url('/images/aboutbg.svg')] bg-[url('/images/aboutmobile.svg')]`}
        ></motion.div>

        <div className="w-full flex justify-center items-center relative h-fit py-10 ">
          {firstVisible && (
            <motion.div
              style={{ y: translateYToTop }}
              initial={{ opacity: 0, y: -50 }}
              animate={firstVisible && { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="w-4/5  flex flex-col lg:grid lg:grid-rows-5 lg:grid-flow-col justify-center items-center gap-4 h-full "
            >
              <div className="row-span-5 overflow-hidden rounded-xl bg-dark-lg/40 backdrop-blur-sm w-full h-full flex justify-center items-center ">
                <span className="w-full h-full absolute z-10 bg-gradient-to-b from-[#0E0E0E]/0 via-[#0E0E0E]/20 to-[#0E0E0E]"></span>
                <img src="/images/pic.png" alt="photo" className="" />
              </div>
              <div className="row-span-1 rounded-xl bg-dark-lg/40 backdrop-blur-sm py-4 px-8 w-full h-full flex justify-center items-center">
                {isVisible && (
                  <FlipWords
                    className="text-dark-xs text-xl lg:text-3xl font-semibold"
                    words={[
                      'Web Developer',
                      'Back-end Developer',
                      'Front-end Developer',
                    ]}
                  />
                )}
              </div>
              <div className="row-span-4 rounded-xl bg-dark-lg/40 backdrop-blur-sm py-4 px-8 min-w-full min-h-full flex justify-center items-center">
                <TextGenerateEffect
                  words={text}
                  chunkSize={20}
                  initialDelay={0.5}
                  duration={0.3}
                  className="text-md"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
