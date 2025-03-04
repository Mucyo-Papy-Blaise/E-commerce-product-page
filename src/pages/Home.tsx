import React from "react";
import image from "../assets/image-product-1.jpg";
import Cart from '../assets/icon-cart.svg'

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="max-w-[1024px] mx-auto font-kumbh">
        <div className="flex flex-row gap-20">
          <div className="bg-VeryDarkBlue w-[380px] h-96 rounded-xl overflow-hidden">
            <img
              src={image}
              alt="Image"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="mt-10 flex flex-col gap-3">
            <h3 className="text-DarkGrayishBlue text-[12px] font-medium">SNAKER COMPANY</h3>
            <h1 className="text-[30px] max-w-[300px] font-[700]">Fall Limited Edition Sneakers</h1>
            <p className="text-DarkGrayishBlue text-[13px] max-w-[330px]">These low-profile sneakers are your perfect casual waer comparison. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>

            <div className="flex flex-row justify-start items-center gap-3 mt-3">
                <h1 className="text-black font-[700] text-[20px]">$125.00</h1>
                <p className="bg-black text-white text-[14px] text-center p-1 rounded-md w-14 h-7">50%</p>
            </div>
            <p className="text-DarkGrayishBlue line-through font-[500]">250.00</p>

            <div className="flex flex-row justify-center items-center gap-10">
                <p className="text-Orange text-[25px] font-bold">-</p>
                <p className=" font-bold text-[25px]">0</p>
                <p className="text-Orange text-[25px] font-bold">+</p>
                <div className="bg-Orange w-44 h-10 rounded-lg flex flex-row justify-center items-center gap-2 cursor-pointer hover:bg-[#ff7d1ac0]">
                    <img src={Cart} alt="Cart" />
                    <p className="text-[13px] font-semibold">Add to cart</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
