import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen text-white">
      <Header />

      {/* Background */}
      <img
        className="absolute inset-0 h-full w-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_large.jpg"
        alt="bg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Sign In Card */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="w-full max-w-md bg-black/75 p-10 rounded-md">
          <h1 className="text-3xl font-semibold mb-8">Sign In</h1>

          {/* Email */}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full h-12 mb-4 px-4 rounded-sm
                       bg-[#333] text-white placeholder-gray-400
                       focus:outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 mb-6 px-4 rounded-sm
                       bg-[#333] text-white placeholder-gray-400
                       focus:outline-none"
          />

          {/* Sign In Button */}
          <button
            className="w-full h-12 bg-red-600 rounded-sm
                       font-semibold hover:bg-red-700 transition"
          >
            Sign In
          </button>

          <div className="mt-6 text-gray-400 text-sm">
            New to Netflix?
            <span
              onClick={() => navigate("/")}
              className="text-white hover:underline cursor-pointer ml-1"
            >
              Sign up now.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
