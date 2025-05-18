import React from 'react'
import emptyCartImage from "../assets/empty-cart.png";

const CartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 mt-[-50px] mb-10">
      <img
        src={emptyCartImage}
        alt="Empty Cart"
        className="w-150 h-auto mb-6"
      />

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Hey, your bag feels so light!
      </h2>
      <p className="text-gray-600 mb-6">
        Let’s add some items in your bag
      </p>

      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg w-full max-w-md">
        START SHOPPING
      </button>
    </div>
  );
}

export default CartPage; 
