"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, delay }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const words = text.split(" ");
  
  return (
    <span className={className}>
      {words.map((word, index) => {
        const colorChange = Math.min(Math.max((scrollY - (index * 10)) / 300, 0), 1);
        const color = `rgba(255, 255, 255, ${colorChange})`;

        return (
          <motion.span
            key={index}
            initial={{ color: 'rgba(255, 255, 255, 0.3)' }}
            animate={{ color }}
            transition={{ duration: 0.5, delay: delay || 0 }}
            style={{ display: "inline-block", marginRight: "4px" }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};

export default AnimatedText;
