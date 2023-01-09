import React from "react";
import ActualLogo from "./ActualLogo";

const Logo = () => {
  return (
    <div className="flex items-center">
      <ActualLogo />
      <p className="font-bold text-lg dark:text-white ml-2 gordita">Maglo</p>
    </div>
  );
};

export default Logo;
