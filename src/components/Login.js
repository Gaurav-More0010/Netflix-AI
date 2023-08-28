import React from "react";
import Header from "./Header";
import { useState } from "react";
//import Header from "./Header";

const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="bg-opacity-80 text-white mx-auto right-0 left-0 my-36 w-3/12 absolute p-12 bg-black ">
        <h1 className="py-4 font-bold text-3xl">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className=" rounded-lg w-full bg-red-700 p-4 my-6 ">
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInform
            ? "New to Netflix? Sign-up Now"
            : "Already Registered? Sign-In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
