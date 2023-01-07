import React from "react";
import { assets } from "../Assets/Assets";
import BalanceIcon from "../Components/BalanceIcon";
import DashboardGraph from "../Components/DashboardGraph";
import { DashboardScheduledTransfers } from "../Components/DashboardScheduledTransfers";
import DashboardTransactions from "../Components/DashboardTransactions";
import SavedIcon from "../Components/SavedIcon";

const DashBoard = () => {
  return (
    <div className="bg-white dark:bg-magloBlack">
      <div className="flex justify-between mt-7">
        <div className={`w-[65%]`}>
          <div className="flex w-full justify-between">
            <div className="py-6 px-5 rounded-lg bg-magloDashBoardTabsBlack w-[31%] flex items-center cursor-pointer">
              <BalanceIcon isActive />
              <div className="ml-4">
                <p className="font-normal text-sm text-gray-400">
                  Total balance
                </p>
                <p className="font-semibold text-2xl text-white mt-2">
                  $5240.21{" "}
                </p>
              </div>
            </div>
            <div className="py-6 px-5 rounded-lg bg-gray-100 w-[31%] flex items-center cursor-pointer">
              <BalanceIcon isActive={false} />
              <div className="ml-4">
                <p className="font-normal text-sm text-gray-400">
                  Total spending
                </p>
                <p className="font-semibold text-2xl mt-2">$250.80</p>
              </div>
            </div>
            <div className="py-6 px-5 rounded-lg bg-gray-100 w-[31%] flex items-center cursor-pointer">
              <SavedIcon isActive={false} />
              <div className="ml-4">
                <p className="font-normal text-sm text-gray-400">Total saved</p>
                <p className="font-semibold text-2xl mt-2">$550.25 </p>
              </div>
            </div>
          </div>
          <DashboardGraph />
          <DashboardTransactions />
        </div>
        <div className={`w-[32%]`}>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-lg">Wallet</p>
            <p className="text-2xl h-min cursor-pointer">...</p>
          </div>
          <div className="credit-card pt-4 pb-10 px-7 relative mt-4 z-10">
            <div className="flex items-center">
              <p className="text-white font-bold">Maglo.</p>
              <div className="bg-magloGrey w-[1px] ml-[15px] mr-2 h-5" />
              <p className="text-xs font-medium text-magloGrey">
                Universal bank
              </p>
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
          <DashboardScheduledTransfers />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
