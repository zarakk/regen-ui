import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const WhiteBox = () => {
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
        transform: "translateY(-80%)",
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
          transform: "translate(10%, -5%)",
          width: "400px",
          height: "100px",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
          paddingLeft: "10px",
          paddingRight: "10px",
          // opacity: 1, // Set initial opacity to 1 (visible)
        }}
      >
        <div className="flex flex-col">
          <p className="text-black font-bold text-sm text-left">Solution</p>
          <p className="text-black font-bold text-sm text-left">
            Broken economic models incentivize land degradation, destroy
            ecosystems and fuel climate change.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
