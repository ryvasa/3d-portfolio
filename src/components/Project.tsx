import { useContext, useEffect, useRef, useState } from 'react';
import { useScroll } from '../utils/hooks/useSchroll';
import { SectionContext } from '../utils/context';

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef<HTMLDivElement>(null);
  const { state, dispatch } = useContext(SectionContext);

  useScroll(setIsVisible, projectRef);
  useEffect(() => {
    if (isVisible) {
      dispatch({ section: 'projects' });
    }
  }, [isVisible]);
  return (
    <div id="projects" ref={projectRef} className="py-10 px-20 min-h-screen">
      Project
    </div>
  );
};

export default Project;
