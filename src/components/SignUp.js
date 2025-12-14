import React, { useState } from "react";
import Header from "./Header";
import { validateSignUp } from "../utils/validate";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const validationErrors = validateSignUp(email);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/signin", {
        state: { email },
      });
    }
  };

  return (
    <div className="relative h-screen w-screen text-white">
      <Header />

      <img
        className="absolute inset-0 h-full w-full object-cover scale-105 -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_large.jpg"
        alt="Background-img"
      />

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black">
          Unlimited movies,
        </h1>
        <h1 className="text-4xl md:text-6xl font-black">
          shows, and more.
        </h1>

        <h2 className="text-lg md:text-2xl mt-4">
          Starts at ₹149. Cancel anytime.
        </h2>

        <p className="mt-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="mt-6 w-full max-w-xl">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 px-4 text-lg text-white
                         bg-black/60 border border-gray-400/40
                         rounded-sm placeholder-gray-400
                         focus:outline-none focus:border-white"
            />

            <button
              onClick={handleGetStarted}
              className="h-14 px-6 bg-red-600 text-white
                         text-lg font-semibold rounded-sm
                         hover:bg-red-700 transition"
            >
              Get Started →
            </button>
          </div>

          {errors.email && (
            <p className="text-[#e87c03] text-sm mt-2 text-left">
              {errors.email}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
