import React from "react";
import { useState } from "react";
import Cart from '../assets/icon-cart.svg'
import { shoesDetails } from '../Data/Data'

interface CartItem {
  id:number;
  image:string;
  heading: string;
  perPair:Number;
}


const Home: React.FC = () => {
  const [selectedImage, setselectedImage] = useState(shoesDetails[0].image)
  const  [selectedDetails, setSelectedDetails] = useState<any | null>(shoesDetails[0])
  const [activeImage,setActiveImage] = useState(shoesDetails[0].id)
  const [count, setCount] = useState<number>(0)
  const [cart, setCart] = useState<CartItem[]>([])

  const handleIncrement = () =>{
    setCount((prev)=> prev + 1)
  }

  const handleDecrement = () =>{
    setCount((prev)=> count > 0 ? prev - 1 : 0)
  }

  const addToCart = () => {
    if (count === 0) return;

    const existingItemIndex = cart.findIndex(item => item.id === selectedDetails.id);

    if (existingItemIndex > -1) {
      const updatedCart = [...cart];
      setCart(updatedCart);
    } else {
      const newCartItem: CartItem = {
        id: selectedDetails.id,
        heading: selectedDetails.Heading,
        perPair: selectedDetails.price,
        image: selectedDetails.image,
      };
      setCart([...cart, newCartItem]);
    }

    setCount(0);
  }

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  }

  return (
    <div className="w-full h-full ">
      <div className="max-w-[1024px] mx-auto font-kumbh">
        <div className="flex flex-col md:pt-36 pl-5 md:flex-row gap-10 md:gap-20">
          <div className="flex flex-col">
          <div className="bg-VeryDarkBlue w-[350px] h-[340px] rounded-xl overflow-hidden">
            {shoesDetails.map((shoe)=>
              <img
              key={shoe.id}
              src={selectedImage}
              alt={shoe.Heading}
              className="object-cover w-full h-full"
            />
            )}
          </div>

          <div className="flex flex-row mt-8 gap-3">
             {shoesDetails.map((shoe)=>
                <div 
                key={shoe.image}
                className={`w-20 h-20 rounded-xl overflow-hidden hover:opacity-60 cursor-pointer ${
                  activeImage ===  shoe.id ? "border-2 border-Orange opacity-60": ""
                }`}
                onClick={() => {
                  setselectedImage(shoe.image);
                  setActiveImage(shoe.id);
                  setSelectedDetails(shoe)
                }}
                >
                <img src={shoe.image} alt="Images" />
                </div>
            )}
          </div>
          </div>

          <div className="mt-10 flex flex-col gap-3">

            <div className=" flex flex-col gap-5">
              {selectedDetails && (
                <div className="font-kumbh flex flex-col justify-center items-start">
                  <h1 className="text-[12px] text-DarkGrayishBlue font-[700] mb-4">{selectedDetails.company}</h1>
                  <h1 className="text-[30px] font-semibold max-w-[300px] mb-4">{selectedDetails.Heading}</h1>
                  <p className="max-w-[390px] text-[15px] text-DarkGrayishBlue mb-4">{selectedDetails.Description}</p>
                  
                  <div className="flex flex-row gap-5 mb-7">
                    <p className="text-black text-[20px] font-bold">{selectedDetails.price}</p>
                    <p className="bg-black text-white text-center h-6 w-14 rounded-lg">{selectedDetails.percentage}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-row justify-start items-center gap-10">
                <p className="text-Orange text-[25px] font-bold cursor-pointer hover:text-[#ff7d1ac0]"
                onClick={handleDecrement}
                >-</p>
                <p className=" font-bold text-[25px]">{count}</p>
                <p className="text-Orange text-[25px] font-bold cursor-pointer hover:text-[#ff7d1ac0]"
                onClick={handleIncrement}
                >+</p>
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
