import { useEffect } from "react";

export const useScroll = (
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
  ref: React.RefObject<HTMLElement>,
  handleVisible?: () => void,
  threshold?: number,
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (handleVisible) {
              handleVisible();
            }
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: threshold ? threshold : 0.6,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [handleVisible, ref, setIsVisible, threshold]);
};
