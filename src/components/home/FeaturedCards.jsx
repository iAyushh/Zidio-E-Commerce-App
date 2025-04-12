import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../../context/wishlistContext";
import f1 from "../../assets/featured1.webp";
import f2 from "../../assets/featured2.webp";
import f3 from "../../assets/featured3.webp";

const FeaturedCards = () => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const cards = [
    {
      id: 5,
      image: f1,
      title: "MARVEL",
      desc: "Comfy, stylish, and perfect for everyday wear.",
    },
    {
      id: 6,
      image: f2,
      title: "DC",
      desc: "Elevate your wardrobe with clean designs.",
    },
    {
      id: 7,
      image: f3,
      title: "ANIME",
      desc: "Inspired by urban culture and cool fits.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const isInWishlist = (product) =>
    wishlist.some((item) => item.id === product.id);

  const toggleWishlist = (product) => {
    isInWishlist(product)
      ? removeFromWishlist(product.id) // ✅ FIXED
      : addToWishlist(product);
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-gray-900">
      <h2
        className="text-4xl font-extrabold text-center mb-12 tracking-wide text-white"
        data-aos="fade-up"
      >
        FEATURED STYLES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden w-full max-w-xs transition-transform hover:scale-105 relative"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="relative overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-60 object-cover rounded-md transition-transform duration-300 hover:scale-[1.5]"
              />

              {/* Heart Button */}
              <button
                onClick={() => toggleWishlist(card)}
                className="absolute top-2 right-2 text-xl z-10"
              >
                <FaHeart
                  className={`text-2xl bg-gray-500 p-1 rounded-full shadow hover:scale-110 transition-transform duration-300 ${
                    isInWishlist(card) ? "text-pink-700" : "text-white"
                  }`}
                />
              </button>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCards;
