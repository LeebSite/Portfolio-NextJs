"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import ghalibImage from "../components/images/ghalib_nobg.png";
import AnimatedText from "../components/AnimatedText"; // Import komponen AnimatedText

function AboutMeSection() {
  const controls = useAnimation();
  const [opacity, setOpacity] = useState(0.3);
  const [showCard, setShowCard] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newOpacity = Math.min(Math.max(scrollPosition / 400, 0.3), 1);
    setOpacity(newOpacity);
    controls.start({ opacity: newOpacity });

    if (scrollPosition > 200) {
      setShowCard(true);
    } else {
      setShowCard(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-auto min-h-[30rem] md:min-h-[40rem] w-full flex flex-col md:flex-row items-center justify-center relative overflow-hidden mx-auto py-10 md:py-20">
      <motion.div
        className="p-4 w-full md:w-1/2 flex justify-center mb-10 md:mb-0 md:pl-20 order-1 md:order-2"
        initial={{ opacity: 0, y: 100 }}
        animate={showCard ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1.2 }} // Adjusted duration for slower transition
      >
        <motion.div
          className="relative w-48 h-64 md:w-72 md:h-96 rounded-lg overflow-hidden shadow-lg"
          whileHover={{ scale: 1.09 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={ghalibImage}
            alt="Muhammad Ghalib Pradipa"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="p-4 w-full md:w-1/2 text-left md:pr-40 md:ml-32 order-2 md:order-1"
        initial={{ opacity: 0.3 }}
        animate={controls}
      >
        <h2 className="text-3xl md:text-5xl font-semibold font-family-arial text-neutral-800 dark:text-neutral-50 mb-10 py-2 px-2">
          About Me ✦
        </h2>
        <div className="max-w-lg md:max-w-xl py-2 px-2">
          <AnimatedText
            text="Hello Everyone, I'm Muhammad Ghalib Pradipa, a passionate Front End Developer and UI/UX Designer. I love creating visually appealing and user-friendly websites and applications. With a keen eye for design and a deep understanding of modern web technologies, I strive to deliver high-quality digital experiences."
            className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 tracking-wider leading-8"
            delay={0.5}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMeSection;
