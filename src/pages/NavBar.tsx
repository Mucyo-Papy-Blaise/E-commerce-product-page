import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="w-full h-10 bg-DarkGrayishBlue p-6 ">
      <div className="max-w-[1024px] flex flex-row mx-auto justify-between">
        <nav className="flex gap-10">
          <h1 className="font-kumbh font-[700]">SNEAKERS</h1>
          <Link to="">Collections</Link>
          <Link to="">Men</Link>
          <Link to="">Women</Link>
          <Link to="">About</Link>
          <Link to="">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
