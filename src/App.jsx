import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import FeaturedCards from './components/home/FeaturedCards';
import ProductSlider from './components/home/ProductSlider';
import Footer from './components/home/Footer';

import WishlistPage from './components/WishlistPage';
import CartPage from './components/cartPage';

// 👇 Create a HomePage wrapper
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
    <div className="bg-black text-white min-h-screen font-sans">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

