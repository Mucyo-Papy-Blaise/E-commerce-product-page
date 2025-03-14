import React from "react";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

const Login: React.FC = () => {
    const {userName,setUsername, setShowHome} =useContext(LoginContext)
    
    const handleShowHome = () =>{
        if(!userName || userName.trim() === ""){
            console.log("Current userName:", userName);
            alert("Please Enter Email")
            return
        }else{
            setShowHome(true)
        }
    }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-[1024px] mx-auto font-kumbh flex justify-center items-center p-4">
        <div className="bg-DarkGrayishBlue w-96 p-4 flex flex-col gap-5 h-[400px] rounded-lg">
          <h1 className="text-Orange text-center text-[30px] font-bold mb-10">
            Login
          </h1>
          <div className="flex flex-col ml-2">
            <label className="text-white text-[15px] ml-2">Email</label>
            <input
              type="email"
              className="bg-gray-400 p-2 rounded-2xl outline-none text-white font-semibold mb-3"
              onChange={(e)=>setUsername(e.target.value)}
            />
            <label className="text-white text-[15px] ml-2">Password</label>
            <input
              type="password"
              className="bg-gray-400 p-2 rounded-2xl outline-none text-white font-semibold mb-8" 
            />

            <button className="bg-Orange text-white text-[20px] font-bold rounded-xl p-1"
            onClick={handleShowHome}
            >
                Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
