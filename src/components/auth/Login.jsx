import React, { useState } from "react";

import cover_image from '../../d.jpg'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email,setEmail]=useState("")
  // const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // const handlePhone = (e) => {
  //   setPhone(e.target.value);
  //   console.log(phone);
  // };

  const handleEmail=(e)=>{
    setEmail(e.target.value);
    console.log(email)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const handleApi=()=>{
    console.log({email,password})
    axios.post('https://reqres.in/api/login',{
      email:email,
      password:password
    })
    .then((result)=>{
      console.log(result)
      // localStorage.setItem('token', result.token)

      navigate("/dashboard/home")

    })
    .catch((error)=>{
      console.log(error)
    })

  }

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-2xl max-w-5xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-sm mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>

          <form action="" className="flex flex-col gap-4">
            {/* <input
              className="p-2 mt-8 rounded-xl border"
              type="tel"
              name="Phone"
              placeholder="Mobile number"
              value={phone}
              onChange={handlePhone}
            /> */}
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleEmail}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <button type="button" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" onClick={handleApi}>
              Login
            </button>
          </form>

          <div className="mt-5 text-sm border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="mt-3 text-sm flex justify-between items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <button
              className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
              onClick={() => navigate("signup")}
            >
              Register
            </button>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={cover_image} alt="cover" />
        </div>
      </div>
    </section>
  );
};

export default Login;
