"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useEffect, useRef } from "react";

type CardProps = {
  heading: string;
  size: string;
  paragraph: string;
  i: number;
  target: number;
  range: [number, number];
  progress: MotionValue<number>;
};

const Card = ({
  heading,
  size,
  paragraph,
  i,
  target,
  range,
  progress,
}: CardProps) => {
  const scale = useTransform(progress, range, [1, target]);

  return (
    <div className="cardcontainer h-screen flex justify-center items-center sticky top-0">
      <motion.div
        className={`card relative px-10 py-32 border bg-[#25311c] text-white rounded-xl w-[800px] h-[400px]`}
        style={{ top: `calc(-10% + ${i * 25}px)`, scale }}
      >
        <p className="font-bold text-lg text-white">{heading}</p>
        <p className="font-bold text-6xl text-white">{size}</p>
        <p className="text-xl text-white">{paragraph}</p>
      </motion.div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    {
      heading: "Carbon credits retired",
      size: "588,448",
      paragraph:
        "Our high-integrity ecocredits are backed by industry-leading climate science.",
    },
    {
      heading: "NEW CREDITS IN 2023",
      size: "2M+",
      paragraph:
        "Regen Registry stewards ecological regeneration projects and the development of new nature-based credit standards.",
    },
    {
      heading: "HECTARES OF LAND",
      size: "15M+",
      paragraph:
        "We work with high-impact ecological project developers across the globe.",
    },
    {
      heading: "METHODOLOGIES UNDER DEVELOPMENT",
      size: "40+",
      paragraph:
        "Our innovative methodologies measure improvements in ecological state.",
    },
  ];
  const container = useRef(null);
  const { scrollYProgress: CardProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // useEffect(() => {
  //   CardProgress.on("change", (e) => console.log(e));
  // }, []);

  return (
    <div className=" p-10 bg-white">
      <div>
        <h2 className="font-bold text-5xl">Our Impact</h2>
      </div>
      <div ref={container} className=" mt-[50px] mb-[50vh]">
        {stats.map((stat, index) => {
          const targetScale = 1 - (stats.length - index) * 0.05;
          return (
            <Card
              heading={stat.heading}
              size={stat.size}
              paragraph={stat.paragraph}
              key={index}
              i={index}
              range={[index * 0.25, 1]}
              target={targetScale}
              progress={CardProgress}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
