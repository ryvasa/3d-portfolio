import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../libs/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  chunkSize = 10, // Jumlah kata per frasa
  staggerDelay = 0.2, // Penundaan antara animasi elemen
  initialDelay = 0.5, // Penundaan sebelum animasi dimulai
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  chunkSize?: number; // Menentukan ukuran frasa
  staggerDelay?: number; // Menentukan penundaan antar elemen
  initialDelay?: number; // Penundaan sebelum animasi dimulai
}) => {
  const [scope, animate] = useAnimate();

  // Fungsi untuk membagi teks menjadi frasa dengan ukuran tertentu
  const chunkArray = (arr: string[], size: number) => {
    const result: string[] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size).join(" "));
    }
    return result;
  };

  const wordsArray = words.split(" ");
  const phrasesArray = chunkArray(wordsArray, chunkSize); // Membagi menjadi frasa

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(staggerDelay, { startDelay: initialDelay }),
      },
    );
  }, [scope.current]);

  const renderPhrases = () => {
    return (
      <motion.div ref={scope}>
        {phrasesArray.map((phrase, idx) => {
          return (
            <motion.span
              key={phrase + idx}
              className="opacity-0 subpixel-antialiased"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {phrase}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(className)}>
      <div className="leading-snug tracking-wide subpixel-antialiased">
        {renderPhrases()}
      </div>
    </div>
  );
};
