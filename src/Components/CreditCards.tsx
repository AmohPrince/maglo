import React from "react";
import { assets } from "../Assets/Assets";

const CreditCards = () => {
  return (
    <>
      <div className="credit-card pt-4 pb-10 px-7 relative mt-4 z-10">
        <div className="flex items-center">
          <p className="text-white font-bold">Maglo.</p>
          <div className="bg-magloGrey w-[1px] ml-[15px] mr-2 h-5" />
          <p className="text-xs font-medium text-magloGrey">Universal bank</p>
        </div>
        <div className="flex mt-[30px] justify-between items-center">
          <img src={assets.creditCardSimThing} alt="i don`t know" />
          <img src={assets.creditCardNetworkThing} alt="i don`t know" />
        </div>
        <div className="font-medium text-base text-white flex w-[58%] mt-5 tracking-widest [&>*]:mr-2">
          <p>5495</p> <p>7381</p> <p>3759</p> <p>2321</p>
        </div>
        <p className="text-left mt-3 text-magloGrey text-sm">04/24</p>
        <img
          src={assets.masterCardLogo}
          alt="master card"
          className="absolute right-5 bottom-5"
        />
      </div>
      <div className="w-[92%] white-credit-card mx-auto -mt-11 z-20 relative pt-4 pl-5 pr-3 pb-5">
        <div className="flex items-center">
          <p className="text-white font-bold">Maglo.</p>
          <div className="bg-white w-[1px] ml-[15px] mr-2 h-5" />
          <p className="text-xs font-medium text-white">Universal bank</p>
        </div>
        <div className="flex mt-[30px] justify-between items-center">
          <img
            src={assets.creditCardSimThing}
            alt="i don`t know"
            className="w-7 h-6"
          />
          <img
            src={assets.creditCardNetworkThing}
            alt="i don`t know"
            className="w-8 h-8"
          />
        </div>
        <p className="font-semibold text-left mt-6">85952548****</p>
        <p className="text-left mt-3 text-magloGrey text-sm">09/25</p>
        <img
          src={assets.visaLogo}
          alt="visa card"
          className="absolute right-5 bottom-5"
        />
      </div>
    </>
  );
};

export default CreditCards;
