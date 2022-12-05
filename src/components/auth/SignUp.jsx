import React from "react";
import cover_image from '../../d.jpg'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
    <div className="bg-gray-100 flex rounded-2xl shadow-2xl max-w-5xl p-5 items-center">
      <div className="md:w-1/2 px-8 md:px-16">
        <h2 className="font-bold text-2xl text-[#002D74]">Sign Up</h2>
  
        <form action="" className="flex flex-col gap-4">
          <input className="p-2 mt-8 rounded-xl border" type="tel" name="Phone" placeholder="Mobile number"/>
       
          <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Send OTP</button>
        </form>
  
      

  
        <div className="mt-5 text-sm flex justify-between items-center text-[#002D74]">
          <p>Already have an account?</p>
          <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" onClick={() => navigate("/")}>Login</button>
        </div>
      </div>
  
      <div className="md:block hidden w-1/2">
        <img className="rounded-2xl" src={cover_image} alt="cover"/>
      </div>
    </div>
  </section>
  );
};

export default SignUp;
