import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticleEffect from "./components/ParticleEffect";

import Navbar from "./components/home/Navbar";
import HeroSection from "./components/home/HeroSection";
import FeaturedCards from "./components/home/FeaturedCards";
import ProductSlider from "./components/home/ProductSlider";
import Footer from "./components/home/Footer";

import WishlistPage from "./components/WishlistPage";
import CartPage from "./components/CartPage";
import CheckoutSuccess from './pages/CheckoutSuccess';


// import Login from '../../Zidio-Internship/src/client/my-app/src/pages/Login';
// import Signup from '../../Zidio-Internship/src/client/my-app/src/pages/Signup';


const HomePage = () => (
  <>
    <HeroSection />
    <FeaturedCards />
    <ProductSlider />
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Starry night particle effect */}
      <ParticleEffect />
      
      {/* Background overlay with slight transparency */}
      <div className="fixed inset-0 bg-black bg-opacity-30 z-0"></div>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen font-sans text-white">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
            {/* <Route path="../../Zidio-Internship/src/client/my-app/src/pages/Login.js" element={<Login />} />
            <Route path="../../Zidio-Internship/src/client/my-app/src/pages/Signup.js" element={<Signup />} /> */}
            
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;