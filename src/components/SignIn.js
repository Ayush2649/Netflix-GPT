import React, { useState } from "react";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKGROUND } from "../utils/constants"; 

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSignUp = Boolean(location.state?.isSignUp);

  const [name, setName] = useState("");
  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleButtonClick = async () => {
    try {
      if (isSignUp) {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCred.user, { displayName: name });
        console.log("User signed up:", userCred.user);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/browse");
    } catch (err) {
      setErrors({ password: "Authentication failed" });
    }
  };

  return (
    <div className="relative h-screen w-screen text-white">
      <Header />

      {/* 🔥 BACKGROUND IMAGE */}
      <img
        className="absolute inset-0 h-full w-full object-cover -z-10"
        src={BACKGROUND}
        alt="bg"
      />

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔥 FORM CONTAINER */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="w-full max-w-md bg-black/70 px-14 py-12 rounded-md">
          <h1 className="text-3xl font-semibold mb-8">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>

          <div className="space-y-5">
            {isSignUp && (
              <input
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-12 px-4 rounded-sm bg-[#333] focus:outline-none"
              />
            )}

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 rounded-sm bg-[#333] focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-sm bg-[#333] focus:outline-none"
            />
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-3">{errors.password}</p>
          )}

          <button
            onClick={handleButtonClick}
            className="w-full h-12 mt-6 bg-red-600 rounded-sm font-semibold hover:bg-red-700 transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
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
