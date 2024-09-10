import { useScroll, motion, useTransform } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import { SectionContext } from '../libs/utils/context';
import { useScroll as useScrollHook } from '../libs/hooks/useSchroll';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [firstVisible, setFirstVisible] = useState(true);
  const skillsRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useContext(SectionContext);

  const handleVisible = (): void => {
    if (!firstVisible) {
      console.log('test');
      setFirstVisible(true);
    }
  };

  useScrollHook(setIsVisible, skillsRef, handleVisible, 0.3);

  useEffect(() => {
    if (isVisible) {
      dispatch({ section: 'projects' });
    }
  }, [isVisible]);
  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: ['start start', 'end start'],
  });

  const translateYToTop = useTransform(scrollYProgress, [0, 1], [100, -300]);
  return (
    <div id="skills" ref={skillsRef} className="min-h-screen relative">
      <div className="absolute bg-gradient-to-b from-primary-dark/0 via-primary-dark/50 to-primary-dark top-0 h-full w-full"></div>
      <div className="relative flex justify-center items-center w-full">
        <div className="w-4/5 ">
          <motion.div
            style={{ translateY: translateYToTop }}
            className="bg-dark-lg/40 backdrop-blur-sm rounded-xl p-10"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            reiciendis, recusandae accusamus omnis neque sapiente ipsam minima
            vero eveniet in cum illum sint doloremque quis, a illo odio
            repellendus eos earum architecto deserunt non? Qui impedit itaque
            repellendus, eius ratione ipsa adipisci maiores repudiandae nisi
            explicabo iusto! Quibusdam, aliquid dicta ex ab porro, culpa
            dignissimos officiis magnam deleniti ipsam cumque? Repellendus, nam
            corrupti? Earum eligendi provident ipsam repudiandae quam rerum
            veniam voluptate esse saepe recusandae. Quae voluptatem, aliquid
            praesentium dolorum incidunt quasi numquam! Nobis ad sit reiciendis
            porro repellendus deleniti laudantium! Corrupti debitis repellat
            suscipit similique voluptatibus laudantium! Voluptates incidunt
            atque porro maxime earum debitis recusandae tenetur velit mollitia,
            sapiente vitae natus ducimus impedit? Modi nesciunt molestias,
            fugiat aut voluptatum voluptatem consequatur dolorum dolore. Iure
            ipsa itaque quisquam exercitationem molestias id magni architecto
            eaque consectetur porro dolor error maxime vel nam repudiandae
            fugiat magnam rem autem eius, velit iste. Molestiae vitae rem cum
            sapiente at repellendus sit sed dolor aut quam! Magnam excepturi ex
            culpa saepe nulla aliquid at, cupiditate dolore ut doloremque cum!
            Ipsam, culpa amet. Autem aliquid porro quia aut accusantium,
            architecto iusto modi, est ut cumque corporis et aspernatur, facilis
            libero inventore reiciendis nihil consequuntur molestias
            perspiciatis?
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
