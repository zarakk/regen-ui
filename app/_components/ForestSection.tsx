"use client";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { WhiteBox2 } from "./WhiteBox2";
import { LineAnimation } from "./LineAnimation";
import Stats from "./Stats";

type WordProps = {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
};

const Word = ({ children, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="mr-4 mt-4 transition-all duration-150"
    >
      {children}
    </motion.span>
  );
};

type ParagraphProps = {
  value: string;
};
const Paragraph = ({ value }: ParagraphProps) => {
  const element = useRef(null);
  const { scrollYProgress: wordScroll } = useScroll({
    target: element,
    offset: ["start 0.6", "start 0.01"],
  });

  const words = value.split(" ");

  return (
    <p
      className="flex flex-wrap text-7xl font-bold "
      ref={element}
      // @ts-ignore
      style={{ opacity: wordScroll }}
    >
      {
        // @ts-ignore
        words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;

          return (
            <Word key={i} range={[start, end]} progress={wordScroll}>
              {word}
            </Word>
          );
        })
      }
    </p>
  );
};

const TextComponent = () => {
  const TextScrollRef = useRef(null);
  const { scrollYProgress: TextScroll } = useScroll({ target: TextScrollRef });

  return (
    <motion.div
      className="bg-[#caffa0] p-10 overflow-y-scroll"
      style={{ height: "1000px", scrollbarWidth: "none" }}
      ref={TextScrollRef}
    >
      <Paragraph
        value="Reverse climate change by investing in ecological regeneration projects
        Regen Registry helps communities develop methodologies to verify
        ecological credits, including carbon and biodiversity."
      />
    </motion.div>
  );
};

const ForestSection = () => {
  const lineYDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineYDivRef,
  });
  const lineY = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest == 0) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <motion.div
      className="bg-black relative z-50 w-screen"
      style={{ transformPerspective: 1000 }}
    >
      <motion.div
        className="bg-[#caffa0] absolute w-screen"
        style={{ height: "1000px" }}
      >
        <div className="relative">
          <div
            className="sticky overflow-y-scroll"
            ref={lineYDivRef}
            style={{
              scrollbarWidth: "none",
            }}
          >
            <motion.img
              src="/map.png"
              alt="map"
              width={900}
              height={400}
              style={{ position: "sticky", top: 20, left: 0, zIndex: 1000 }}
            />
            <div className="lineandbox relative w-full">
              <div className="w-full">
                <motion.div
                  style={{
                    position: "sticky",
                    left: "50%",
                    bottom: 0,
                    width: lineY,
                    y: -340,
                    height: "5px",
                    background: "white",
                    rotateZ: "180deg",
                    zIndex: 80,
                  }}
                />
              </div>
            </div>
            <motion.div
              variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
              animate={hidden ? "hidden" : "visible"}
            >
              <WhiteBox2 />
            </motion.div>
          </div>
          <LineAnimation />
        </div>
        <TextComponent />
        <Stats />
      </motion.div>
    </motion.div>
  );
};
export default ForestSection;
