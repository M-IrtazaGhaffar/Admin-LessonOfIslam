import React from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const n = useNavigate()
  const signin = async () => {
    alert("Hey")
    n('/dashboard')
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form method="post" onSubmit={signin} className="border px-5 py-10 rounded shadow-custom">
        <h1 className="text-4xl py-10 text-center text-[#FF385C] font-bold">Signin as Admin</h1>
        <div className="space-y-3">
          <input className="outline-[#FF385C] w-full px-3 py-2 border" type="email" required placeholder="Your Email" />
          <input className="outline-[#FF385C] w-full px-3 py-2 border" type="password" required placeholder="Your Password" />
          <button type="submit" className="bg-[#FF385C] text-lg  text-white p-2 text-center w-full rounded hover:bg-opacity-75 transition-all">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
