import React from "react";
import { assets } from "../Assets/Assets";

const SignUp = () => {
  return (
    <div className="h-screen">
      <div className="w-1/2 py-[4%] px-[10%] h-full">
        <div className="flex items-center">
          <img src={assets.Logo} alt="logo" />
          <p className="font-bold text-lg dark:text-white ml-2">Maglo</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
