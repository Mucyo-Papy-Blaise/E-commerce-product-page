import React from "react";
import { Link } from "react-router-dom";
import cartIcon from '../assets/icon-cart.svg'
import prflImage from '../assets/image-avatar.png'

const NavBar: React.FC = () => {
  return (
    <>
    <div className="w-full h-10 p-6 pb-36 ">
      <div className="max-w-[1024px] flex flex-row mx-auto justify-between items-center">

        <nav className="flex gap-10 flex-row justify-start items-center">
          <h1 className="font-kumbh font-[700] text-[25px]">SNEAKERS</h1>
          <Link to="" className="text-DarkGrayishBlue">Collections</Link>
          <Link to="" className="text-DarkGrayishBlue">Men</Link>
          <Link to="" className="text-DarkGrayishBlue">Women</Link>
          <Link to="" className="text-DarkGrayishBlue">About</Link>
          <Link to="" className="text-DarkGrayishBlue">Contact</Link>
        </nav>

        <div className="flex flex-row justify-center items-center gap-16">
            <img src={cartIcon} alt="Cart Icon" className="w-5 h-5"/>
            <img src={prflImage} alt="Cart Icon" className="w-10 h-10"/>
        </div>
      </div>
    </div>
    </>
  );
};

export default NavBar;
