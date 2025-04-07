import React from "react";

const products = [
  { name: "Barca", price: "89.00€", image: "/images/product1.webp" },
  { name: "Matis", price: "109.00€", image: "/images/product2.webp" },
  { name: "Greg", price: "99.00€", image: "/images/product3.webp" },
  { name: "Mika", price: "89.00€", image: "/images/product4.webp" },
];

const ProductSlider = () => {
  return (
    <section className="py-12 px-4 bg-gray-900" data-aos="fade-up">
    <h2 className="text-center text-3xl font-bold mb-8 text-white">
      MINIMAL STYLES
    </h2>
  
    <div className="flex justify-center gap-6 overflow-x-auto scrollbar-hide px-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="w-64 bg-gray-800 shadow-lg rounded-xl flex-shrink-0 p-4 flex flex-col items-center transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-44 w-full object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          <p className="text-gray-300">{product.price}</p>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default ProductSlider;
