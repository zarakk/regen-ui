import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const WhiteBox2 = () => {
  const whiteDivRef = useRef(null);

  // Track scroll progress
  const { scrollYProgress: whiteboxRef } = useScroll({
    target: whiteDivRef,
  });

  // Calculate Y position for the white box
  const WhiteY = useTransform(whiteboxRef, [0, 1], [0, 10]);

  return (
    <div
      ref={whiteDivRef}
      className="right-div absolute bottom-0 w-screen h-28"
      style={{
        overflowY: "scroll",
        scrollbarWidth: "none",
        zIndex: 110,
        top: "27%",
        left: "25%",
        // transform: "translateY(30%, -255%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{
          position: "absolute",
          left: "50%",
          top: WhiteY,
          // transform: "translate(220%, 0%)",
          transform: `translate(15%, 0%)`,
          width: "250px",
          height: "100px",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
          padding: "0 10px",
          // opacity: 1, // Set initial opacity to 1 (visible)
        }}
      >
        <div className="flex flex-col">
          <p className="text-black font-bold text-sm text-left">Problem</p>
          <p className="text-black font-bold text-sm text-left">
            Regen Network incentivizes ecosystem regeneration to reverse climate
            change.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
