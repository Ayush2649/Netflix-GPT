import React, { useState } from "react";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";
import { validateSignIn } from "../utils/validate";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handelButtonClick = () => {
    const validationErrors = validateSignIn(email, password);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/browse");
    }
  };

  return (
    <div className="relative h-screen w-screen text-white">
      <Header />

      <img
        className="absolute inset-0 h-full w-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_large.jpg"
        alt="bg"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="w-full max-w-md bg-black/60 px-14 py-12 rounded-md">
          <h1 className="text-3xl font-semibold mb-12 mt-6">Sign In</h1>

          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Email or mobile number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-sm
                  bg-[#333] text-white placeholder-gray-400
                  focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 rounded-sm
                  bg-[#333] text-white placeholder-gray-400
                  focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handelButtonClick}
            className="w-full h-12 mt-6 bg-red-600 rounded-sm
              font-semibold hover:bg-red-700 transition"
          >
            Sign In
          </button>

          <div className="mt-6 mb-8 text-gray-400 text-sm">
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