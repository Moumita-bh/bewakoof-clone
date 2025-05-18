import React, { useState } from "react";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
const [showMenDropdown, setShowDropdown] = useState(false);
const [showWomenDropdown, setShowWomenDropdown] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs px-6 py-1 flex justify-between items-center">
        <div className="flex space-x-4">
          <span className="cursor-pointer">Offers</span>
          <span className="cursor-pointer">Fanbook</span>
          <span className="cursor-pointer">📱 Download App</span>
          <span className="cursor-pointer">Find a store near me</span>
        </div>
        <div className="flex space-x-4">
          <span className="cursor-pointer">Contact Us</span>
          <span className="cursor-pointer">Track Order</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4 shadow pl-45">
        {/* Left */}
        <div className="flex items-center space-x-8">
          <img
            src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
            alt="Bewakoof Logo"
            className="w-32"
          />
          <nav className="flex space-x-6 ">
            {/* MEN NAV ITEM WITH DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link
  to="/men"
  className="hover:border-b-5 hover:border-yellow-400 pb-3 transition duration-150"
>
  MEN
</Link>

                {showMenDropdown && (
                  <div className="absolute left-0 top-full bg-white  w-[1510px] flex p-6 z-50 left-[-350px] right-[-350px] mt-5">
                    <div className="w-full">
                      <h4 className="font-semibold mb-2">Topwear</h4>
                      <ul className="space-y-1 text-sm">
                       <li>All Topwear</li>
                <li>All T-Shirts</li>
                <li>Oversized T-shirts</li>
                <li>Classic Fit T-shirts</li>
                <li>All Shirts</li>
                <li>Half Sleeve T-Shirts</li>
                <li>Printed T-Shirts</li>
                <li>Plain T-Shirts</li>
                <li>Plus Size Topwear</li>
                <li>Customize T-shirts</li>
                <li>Polo T-Shirts</li>
                      </ul>
                    </div>
                    <div className="w-full">
                      <h4 className="font-semibold mb-2">Bottomwear</h4>
                      <ul className="space-y-1 text-sm">
                        <li>All Bottomwear</li>
                <li>Joggers</li>
                <li>Trousers & Pants</li>
                <li>Trackpants</li>
                <li>Jeans</li>
                <li>Pajamas</li>
                <li>Shorts</li>
                <li>Boxers</li>
                <li>Plus Size Bottomwear</li>
                <li>Cargos</li>
                <li>Cargo Joggers</li>
                      </ul>
                    </div>
                    <div className="w-full">
                      <h4 className="font-semibold mb-2">Plus Size</h4>
                      <ul className="space-y-1 text-sm">
                        <li>All Plus-size</li>
                <li>All Topwear</li>
                <li>All Bottomwear</li>
                <li>All T-shirts</li>
                <li>All Shirts</li>
                <li>Joggers</li>
                <li>Pants & Trousers</li>
                <li>Jeans</li>
                <li>Pajamas</li>
                <li>Shorts</li>
                <li>Hoodies</li>
                      </ul>
                    </div>
                    <div className="w-full">
                      <h4 className="font-semibold mb-2">Footwear</h4>
                      <ul className="space-y-1 text-sm">
                        <li>Bewakoof Sneakers</li>
                <li>Sliders</li>
                <li>Casual Shoes</li>
                      </ul>
                      <h4 className="font-semibold mb-2">Accessories</h4>
                      <ul className="space-y-1 text-sm">
                        <li>Mobile covers</li>
                <li>Backpacks</li>
                <li>Sunglasses</li>
                <li>Sling bags</li>
                <li>Caps</li>
                <li>Mobile Card-holder</li>
                      </ul>
                    </div>
                    <div className="w-full">
              <h3 className="font-bold text-gray-800 mb-2">SPECIALS</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/Circle-Nab-336x336-RM--1--1746093764.png"
                    alt="Ishaan"
                    className="rounded-full w-16 h-16 mx-auto"
                  />
                  <p className="text-xs mt-1">Bwkf X Ishaan Khatter</p>
                </div>
                <div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168--10--1747128042.png"
                    alt="Denim"
                    className="rounded-full w-16 h-16 mx-auto"
                  />
                  <p className="text-xs mt-1">Denim Verse</p>
                </div>
                <div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168--4--1744016988.png"
                    alt="Naruto"
                    className="rounded-full w-16 h-16 mx-auto"
                  />
                  <p className="text-xs mt-1">Naruto Shippuden</p>
                </div>
                <div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168--4--1738910651.png"
                    alt="Captain"
                    className="rounded-full w-16 h-16 mx-auto"
                  />
                  <p className="text-xs mt-1">Captain America</p>
                </div>
                <div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168--3--1742454238.png"
                    alt="Captain"
                    className="rounded-full w-16 h-16 mx-auto"
                  />
                  
                </div>
                <div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/4T-1737460577.png"
                    alt="Captain"
                    className="rounded-full w-16 h-16 mx-auto"
                  />
                  
                </div>
              </div>
            </div>
                  </div>
                )}
              </div>
             <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
            
            <Link
  to="/women"
  className="hover:border-b-5 hover:border-yellow-400 pb-3 transition duration-150"
>
  WOMEN
</Link>
            {showWomenDropdown && (
                  <div className="absolute left-0 top-full bg-white  w-[1500px] flex p-6 z-50 left-[-350px] right-[-350px] mt-5">
                    <div className="w-full">
                      <h4 className="font-semibold mb-2">Topwear</h4>
                      <ul className="space-y-1 text-sm">
                       <li>All Topwear</li>
                <li>All T-Shirts</li>
                <li>Oversized T-shirts</li>
                <li>Boyfriend T-Shirts</li>
                <li>Classic Fit T-Shirts</li>
                <li>All Shirts</li>
                <li>Half Sleeves T-Shirts</li>
                <li>Printed T-Shirts</li>
                <li>Plus Size Topwear</li>
                <li>Customize T-shirts</li>
                <li>Polo T-Shirts</li>
                      </ul>
                    </div>
                    <div className="w-full">
                      <h4 className="font-semibold mb-2">Bottomwear</h4>
                      <ul className="space-y-1 text-sm">
                        <li>All Bottomwear</li>
                <li>Joggers</li>
                <li>Trousers & Pants</li>
                <li>Trackpants</li>
                <li>Jeans</li>
                <li>Pajamas</li>
                <li>Shorts</li>
                <li>Boxers</li>
                <li>Plus Size Bottomwear</li>
                <li>Cargos</li>
                <li>Cargo Joggers</li>
                      </ul>
                    </div>
                    <div className="w-full">
                      <h4 className="font-semibold mb-2">Plus Size</h4>
                      <ul className="space-y-1 text-sm">
                        <li>All Plus-size</li>
                <li>All Topwear</li>
                <li>All Bottomwear</li>
                <li>All T-shirts</li>
                <li>All Shirts</li>
                <li>Joggers</li>
                <li>Pants & Trousers</li>
                <li>Jeans</li>
                <li>Pajamas</li>
                <li>Shorts</li>
                <li>Hoodies</li>
                      </ul>
                    </div>
                    <div className="w-full">
                      <h4 className="font-semibold mb-2">Footwear</h4>
                      <ul className="space-y-1 text-sm">
                        <li>Bewakoof Sneakers</li>
                <li>Sliders</li>
                <li>Casual Shoes</li>
                      </ul>
                      <h4 className="font-semibold mb-2">Accessories</h4>
                      <ul className="space-y-1 text-sm">
                        <li>Mobile covers</li>
                <li>Backpacks</li>
                <li>Sunglasses</li>
                <li>Sling bags</li>
                <li>Caps</li>
                <li>Mobile Card-holder</li>
                      </ul>
                    </div>
                    <div className="w-full">
              <h3 className="font-bold text-gray-800 mb-2">SPECIALS</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/Circle-Nab-336x336-RM--1--1746093764.png"
                    alt="Ishaan"
                    className="rounded-full w-16 h-16 mx-auto"
                  />
                  <p className="text-xs mt-1">Bwkf X Ishaan Khatter</p>
                </div>
                <div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168--10--1747128042.png"
                    alt="Denim"
                    className="rounded-full w-16 h-16 mx-auto"
                  />
                  <p className="text-xs mt-1">Denim Verse</p>
                </div>
                <div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168--4--1744016988.png"
                    alt="Naruto"
                    className="rounded-full w-16 h-16 mx-auto"
                  />
                  <p className="text-xs mt-1">Naruto Shippuden</p>
                </div>
                <div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168--4--1738910651.png"
                    alt="Captain"
                    className="rounded-full w-16 h-16 mx-auto"
                  />
                  <p className="text-xs mt-1">Captain America</p>
                </div>
                <div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/Circle-Nav-168x168--3--1742454238.png"
                    alt="Captain"
                    className="rounded-full w-16 h-16 mx-auto"
                  />
                  
                </div>
                <div>
                  <img
                    src="https://images.bewakoof.com/nav_menu/4T-1737460577.png"
                    alt="Captain"
                    className="rounded-full w-16 h-16 mx-auto"
                  />
                  
                </div>
              </div>
            </div>
                  </div>
                )}
              </div>
            
            
            
            
            <Link
  to="/mobile-covers"
  className="hover:border-b-5 hover:border-yellow-400 pb-3 transition duration-150"
>
  MOBILE COVERS
</Link>
          </nav>
        </div>

        {/* Center - Search */}
        <div className="flex items-center relative w-96 ml-50">
          <FaSearch className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search by products"
            className="w-[350px] pl-10 pr-4 py-2 rounded bg-gray-100 focus:outline-none "
          />
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4 pr-36 pl-8">
          <a href="/login" className="font-semibold cursor-pointer">LOGIN</a>
  <FaHeart className="text-xl cursor-pointer" />
  <a href="/cart">
    <FaShoppingBag className="text-xl cursor-pointer" />
  </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
