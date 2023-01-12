import React from "react";
import { assets } from "../Assets/Assets";
import BalanceIcon from "../Components/BalanceIcon";
import CreditCards from "../Components/CreditCards";
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
          <CreditCards />
          <DashboardScheduledTransfers />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
