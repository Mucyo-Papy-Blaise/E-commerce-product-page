import React from "react";
import Cart from '../assets/icon-cart.svg'
import { shoesDetails } from '../Data/Data'

const Home: React.FC = () => {
  return (
    <div className="w-full h-full ">
      <div className="max-w-[1024px] mx-auto font-kumbh">
        <div className="flex flex-row gap-20">
          <div className="flex flex-col">
          <div className="bg-VeryDarkBlue w-[350px] h-[340px] rounded-xl overflow-hidden">
            {shoesDetails.map((shoe)=>
              <img
              key={shoe.id}
              src={shoe.image}
              alt={shoe.Heading}
              className="object-cover w-full h-full"
            />
            )}
          </div>

          <div className="flex flex-row mt-8 gap-3">
             {shoesDetails.map((shoe)=>
                <div 
                key={shoe.image}
                className="w-20 h-20 rounded-xl overflow-hidden hover:opacity-80"
                >
                <img src={shoe.image} alt="Images" />
                </div>
            )}
          </div>
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
                <p className="text-Orange text-[25px] font-bold cursor-pointer hover:text-[#ff7d1ac0]">-</p>
                <p className=" font-bold text-[25px]">0</p>
                <p className="text-Orange text-[25px] font-bold cursor-pointer hover:text-[#ff7d1ac0]">+</p>
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
