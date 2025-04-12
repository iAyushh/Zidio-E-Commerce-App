import React from "react";
import { useWishlist } from "../../context/wishlistContext";
import { FaHeart } from "react-icons/fa";

const products = [
  { id: 1, title: "Barca", price: "89.00€", image: "/images/product1.webp" },
  { id: 2, title: "Matis", price: "109.00€", image: "/images/product2.webp" },
  { id: 3, title: "Greg", price: "99.00€", image: "/images/product3.webp" },
  { id: 4, title: "Mika", price: "89.00€", image: "/images/product4.webp" },
];

const ProductSlider = () => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <section className="py-12 px-4 bg-gray-900" data-aos="fade-up">
      <h2 className="text-center text-3xl font-bold mb-8 text-white">
        MINIMAL STYLES
      </h2>

      <div className="flex justify-center gap-6 overflow-x-auto scrollbar-hide px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-64 bg-gray-800 shadow-lg rounded-xl flex-shrink-0 p-4 flex flex-col items-center transition-transform duration-300 hover:scale-[1.03] overflow-hidden relative" // ✅ Make it relative
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-44 w-full object-cover rounded-md mb-3"
            />

            {/* Heart Icon */}
            <button
              onClick={() => toggleWishlist(product)}
              className="absolute top-2 right-2 z-10"
            >
              <FaHeart
                className={`text-2xl bg-gray-500 p-1 rounded-full shadow hover:scale-110 transition-transform duration-300 ${
                  isInWishlist(product.id) ? "text-pink-700" : "text-white"
                }`}
              />
            </button>

            <h3 className="text-lg font-semibold text-white">
              {product.title}
            </h3>
            <p className="text-yellow-600">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSlider;
