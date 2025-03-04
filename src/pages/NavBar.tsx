import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from '../assets/icon-cart.svg'
import prflImage from '../assets/image-avatar.png'
import image1 from "../assets/image-product-1.jpg";
import iconDelte from "../assets/icon-delete.svg";

const NavBar: React.FC = () => {
  const [isCartOpen, setisCartOpen] = useState<boolean>(false)

const handleCart = () =>{
    setisCartOpen(!isCartOpen)
}

  return (
    <>
    <div className="w-full h-10 p-6 pb-36">
      <div className="max-w-[1024px] flex flex-row mx-auto justify-between items-center relative border-b-2 p-3">

        <nav className="flex gap-10 flex-row justify-start items-center">
          <h1 className="font-kumbh font-[700] text-[25px]">SNEAKERS</h1>
          <Link to="" className="text-DarkGrayishBlue">Collections</Link>
          <Link to="" className="text-DarkGrayishBlue">Men</Link>
          <Link to="" className="text-DarkGrayishBlue">Women</Link>
          <Link to="" className="text-DarkGrayishBlue">About</Link>
          <Link to="" className="text-DarkGrayishBlue">Contact</Link>
        </nav>

        <div className="flex flex-row justify-center items-center gap-16 font-kumbh cursor-pointer">
            <img src={cartIcon} alt="Cart Icon" className="w-5 h-5"
            onClick={handleCart}
            />
            {isCartOpen && (
              <div className="absolute w-80 p-5 h-48 bg-PadeOrange rounded-lg z-10 top-16 shadow-2xl cursor-pointer">
                <h1 className="font-[700] mb-5">Cart</h1>
                 
                <div className="flex flex-row gap-3">
                <div className="w-16 h-16 bg-black rounded-lg overflow-hidden">
                  <img src={image1} alt="Image" /> 
                </div>
                  <div className="flex flex-row items-center gap-6">
                    <div className="flex flex-col">
                      <h2 className="text-DarkGrayishBlue text-[13px] mb-1">Fall Limited Edition Sneakers</h2>
                      <p className="text-DarkGrayishBlue text-[13px]">$125.00 x <span className="font-black text-black">$375.00</span></p>
                    </div>
                    <img src={iconDelte} alt="Delete Icon" className="w-4 h-4" />
                  </div>
                </div>

                <button className="w-72 h-8 bg-Orange mt-4 rounded-lg hover:bg-[#ff7d1ac0]">Checkout</button>
              </div>
            )}
            <img src={prflImage} alt="Cart Icon" className="w-10 h-10"/>
        </div>
      </div>
    </div>
    </>
  );
};

export default NavBar;
