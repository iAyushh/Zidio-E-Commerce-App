import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedCards from "./components/FeaturedCards";
import ProductSlider from "./components/ProductSlider";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <FeaturedCards />
      <ProductSlider />
      <Footer />
    </div>
  );
}

export default App;
