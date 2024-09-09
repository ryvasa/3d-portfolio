import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const AnimationScrollText = ({ className }: { className?: string }) => {
  const textArray = useMemo(
    () => ['Web Developer', 'Back-end Developer', 'Front-end Developer'],
    []
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>(textArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [textArray.length]);

  useEffect(() => {
    setCurrentText(textArray[currentIndex]);
  }, [currentIndex, textArray]);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentText}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`text-xl lg:text-3xl font-semibold ${className}`}
      >
        {currentText}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationScrollText;
