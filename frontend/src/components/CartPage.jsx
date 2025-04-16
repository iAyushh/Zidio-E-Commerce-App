import React from 'react';
import { useCart } from '../context/cartContext';
import { Link, useNavigate } from 'react-router-dom';
import CartImg from '../assets/cart_empty.png';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  // const navigate = useNavigate();

  const handleBuyNow = (item) => {
    console.log("Buying item:", item);
    
  };

  return (
    <div className="p-6 text-white bg-opacity-0 min-h-screen">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <div
            className="w-[70vh] h-[60vh] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${CartImg})` }}
          ></div>
          <br />
          <h2 className="text-xl font-bangers mb-2">Oops! Your cart is empty.</h2>
          <p className="text-gray-300 mb-4">
            Add your favorite superhero T-shirts to the cart and make your wardrobe heroic!
          </p>
          <Link
            to="/home"
            className="px-4 py-2 bg-yellow-600 text-gray-900 rounded hover:bg-teal-600 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4 flex flex-wrap gap-6 justify-center">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center bg-gray-700 p-4 rounded-lg w-full md:w-[300px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px] object-contain mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{item.title}</h2>
              <p className="text-center text-yellow-400 font-bold">{item.price}</p>
              <div className="flex items-center gap-2 my-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="px-2 py-1 bg-gray-600 rounded disabled:opacity-50"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-600 rounded"
                >
                  +
                </button>
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => removeFromCart(product)}
                  className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-800"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleBuyNow(item)}
                  className="bg-green-600 px-3 py-1 rounded text-white hover:bg-green-800"
                >
                  Buy This Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;

