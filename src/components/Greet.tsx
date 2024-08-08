import React from 'react';
import { TextRevealCard } from './ui/text-reveal-card';

const Greet = () => {
  return (
    <div className="flex items-center justify-center bg-[#000000] h-[30vh] sm:h-[40vh] lg:h-[40vh] rounded-2xl w-full mx-4 my-8">
      <TextRevealCard
        text="Hover over me!"
        revealText="Thank You for visiting!"
      />
    </div>
  );
}

export default Greet;
