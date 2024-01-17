import React from "react";

const Hero = () => {
  return (
    <div className="cover">
      <video
        className="hidden w-full md:block"
        src="./Hero.mp4"
        autoPlay
        muted
        loop
      />
      <video
        className="block md:hidden"
        src="./Hero_mobile.mp4"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default Hero;
