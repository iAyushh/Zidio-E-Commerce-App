import React from "react";
import heroImg from "../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${heroImg})` }}>
      <h1 className="text-white text-4xl md:text-6xl font-bold backdrop-blur bg-black/30 px-6 py-4 rounded"> STYLISH COLLECTIONS</h1>
    </section>
  );
};

export default HeroSection;
