"use client";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const nextImage = () => {
    setCurrentImage((currentImage % 3) + 1);
  };

  const prevImage = () => {
    setCurrentImage(((currentImage - 2 + 5) % 3) + 1);
  };

  useEffect(() => {
    const timer = setTimeout(nextImage, 2500);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex bg-[#25311c] h-screen text-white p-4 justify-center overflow-hidden z-40">
      <div className="flex flex-col gap-4 w-full items-start pt-10 pl-20">
        <h2 className="text-7xl font-bold">Catalyze climate finance</h2>
        <p className="text-md">
          Regen Network, a platform to originate and invest in high-integrity
          carbon and biodiversity credits from ecological regeneration projects
        </p>
        <button className="font-bold bg-white rounded-full px-4 py-2 text-black">
          Explore Credits
        </button>
      </div>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "0 25px",
          maxWidth: "700px",
        }}
      >
        <div className="w-screen">
          <img
            style={{
              display: "block",
              width: "300px",
              height: "400px",
              position: "absolute",
              top: "30px",
              transition:
                "filter 0ms, transform 300ms, right 400ms ease-in-out, left 400ms ease-in;",
            }}
            className={`${
              currentImage === 1
                ? "blur-0 z-50 opacity-100 scale-100 ml-40 left-32"
                : currentImage === 2
                ? "blur-sm z-45 opacity-85 scale-75 -ml-48 right-5"
                : "blur-sm z-40 opacity-85 scale-75 -ml-48 left-96"
            }  transition-all ease-in-out duration-1000`}
            src="/img-1.png"
          ></img>
          <img
            style={{
              display: "block",
              width: "300px",
              height: "400px",
              position: "absolute",
              top: "30px",
              // transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)",
              // msTransition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1.000)",
              borderRadius: "12%",
              transition:
                "filter 0ms, transform 300ms, right 400ms ease-in-out, left 400ms ease-in;",
              // transition: "ease-in-out 0.3s",
              // transition: "ease-in-out 0.3s",
            }}
            className={`${
              currentImage === 2
                ? "blur-0 z-50 opacity-100 scale-100 ml-40 left-32"
                : currentImage === 3
                ? "blur-sm z-45 opacity-85 scale-75 -ml-48 right-5"
                : "blur-sm z-40 opacity-85 scale-75 -ml-48 left-96"
            } transition-all duration-1000`}
            src="/img-2.png"
          ></img>
          <img
            style={{
              display: "block",
              width: "300px",
              height: "400px",
              position: "absolute",
              top: "30px",
              borderRadius: "12%",
              transition:
                "filter 0ms, transform 300ms, right 400ms ease-in-out, left 400ms ease-in;",
            }}
            className={`${
              currentImage === 3
                ? "blur-0 z-50 opacity-100 scale-100 ml-40 left-32"
                : currentImage === 1
                ? "blur-sm z-45 opacity-85 scale-75 -ml-48 right-5"
                : "blur-sm z-40 opacity-85 scale-75 -ml-48 left-96"
            } transition-all duration-1000`}
            src="/img-3.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
