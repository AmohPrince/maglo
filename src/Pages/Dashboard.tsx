import React from "react";
import { assets } from "../Assets/Assets";
import BalanceIcon from "../Components/BalanceIcon";
import DashboardGraph from "../Components/DashboardGraph";
import DashboardTransactions from "../Components/DashboardTransactions";
import SavedIcon from "../Components/SavedIcon";

const DashBoard = () => {
  return (
    <div className="bg-white dark:bg-magloBlack py-8 px-10 flex-grow">
      <div className="flex justify-between items-center w-full">
        <p className="font-bold text-2xl dark:text-white">Dashboard</p>
        <div className="flex items-center">
          <img
            src={assets.searchIcon}
            alt="search icon"
            className={`w-4 h-4 mr-11`}
          />
          <img src={assets.bell} alt="bell" className={`w-4 h-4 mr-11`} />
          <div className="flex items-center bg-gray-50 rounded-full py-1 px-2 cursor-pointer">
            <img
              src={assets.profile}
              alt="profile"
              className="h-7 w-7 object-cover rounded-full mr-3"
            />
            <p className="text-sm font-semibold mr-7">Mahfuzul Nabil</p>
            <img
              src={assets.dropDownIcon}
              alt="drop-down-icon"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
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
        <div className={`w-[32%]`}>b</div>
      </div>
    </div>
  );
};

export default DashBoard;
