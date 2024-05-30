import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { WhiteBox } from "./WhiteBox";

export const LineAnimation = () => {
  const lineZDivRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  // Track scroll progress
  const { scrollYProgress: greyboxref } = useScroll({ target: lineZDivRef });
  const lineZ = useTransform(greyboxref, [0, 1], [500, 0]);

  useMotionValueEvent(greyboxref, "change", (latest) => {
    if (latest == 0) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <div
      ref={lineZDivRef}
      className="right-div absolute w-screen bottom-0"
      style={{
        overflowY: "scroll",
        height: "500px",
        scrollbarWidth: "none",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          width: lineZ,
          y: -140,
          x: -440,
          height: "5px",
          background: "white",
          rotate: "180deg",
          zIndex: 110,
          backgroundColor: "white",
        }}
      ></motion.div>
      <motion.div
        variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
        animate={hidden ? "hidden" : "visible"}
      >
        <WhiteBox />
      </motion.div>
    </div>
  );
};
