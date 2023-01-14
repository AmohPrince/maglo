import React, { useContext } from "react";
import { GlobalContext } from "../App";
import { assets } from "../Assets/Assets";

const Settings = () => {
  const { isDarkMode, setIsDarkMode } = useContext(GlobalContext);
  return (
    <div className="text-left px-[5%] py-[2%] rounded-xl dark:bg-magloSemiBlack">
      <div className="flex justify-between">
        <p className="text-xl font-semibold dark:text-white">
          Account Information
        </p>
        {isDarkMode ? (
          <img
            src={assets.Sun}
            alt="sun"
            className="w-7 h-7 cursor-pointer"
            onClick={() => setIsDarkMode(false)}
          />
        ) : (
          <img
            src={assets.CrescentMoon}
            alt="moon"
            className="w-7 h-7 cursor-pointer"
            onClick={() => setIsDarkMode(true)}
          />
        )}
      </div>
      <p className="text-gray-400 text-sm">Update your account Information</p>
      <p className="text-xl font-semibold mt-8 mb-6 dark:text-white">
        Person Information
      </p>
      <div className="flex text-sm w-3/4">
        <div className="w-1/2 mr-10">
          <p className="font-medium mb-3 dark:text-gray-400">First Name</p>
          <input
            type="text"
            className="w-full px-3 py-3 rounded-md border dark:bg-transparent dark:border-gray-100 dark:text-white focus:outline-none"
            placeholder="Mahfuzul Islam"
          />
        </div>
        <div className="w-1/2">
          <p className="font-medium mb-3 dark:text-gray-400">Last Name</p>
          <input
            type="text"
            className="w-full px-3 py-3 rounded-md border dark:bg-transparent dark:border-gray-100 dark:text-white focus:outline-none"
            placeholder="Nabil"
          />
        </div>
      </div>
      <div className="flex text-sm w-3/4 mt-5">
        <div className="w-1/2 mr-10">
          <p className="font-medium mb-3 dark:text-gray-400">Date of Birth</p>
          <input
            type="date"
            className="w-full px-3 py-3 rounded-md border dark:bg-transparent dark:border-gray-100 dark:text-white focus:outline-none"
            placeholder="27/09/1998"
          />
        </div>
        <div className="w-1/2">
          <p className="font-medium mb-3 dark:text-gray-400">Mobile number</p>
          <input
            type="tel"
            className="w-full px-3 py-3 rounded-md border dark:bg-transparent dark:border-gray-100 dark:text-white focus:outline-none"
            placeholder="+123 456 7890"
          />
        </div>
      </div>
      <div className="text-sm w-3/4 mt-5">
        <p className="font-medium mb-3 dark:text-gray-400">Email</p>
        <input
          type="email"
          className="w-full px-3 py-3 rounded-md border dark:bg-transparent dark:border-gray-100 dark:text-white focus:outline-none"
          placeholder="hellouihut@gmail.com"
        />
      </div>
      <div className="flex text-sm w-3/4 mt-5">
        <div className="w-1/2 mr-10">
          <p className="font-medium mb-3 dark:text-gray-400">New Password</p>
          <input
            type="password"
            className="w-full px-3 py-3 rounded-md border dark:bg-transparent dark:border-gray-100 dark:text-white focus:outline-none"
            placeholder="password"
          />
        </div>
        <div className="w-1/2">
          <p className="font-medium mb-3 dark:text-gray-400">
            Confirm password
          </p>
          <input
            type="password"
            className="w-full px-3 py-3 rounded-md border dark:bg-transparent dark:border-gray-100 dark:text-white focus:outline-none"
            placeholder="password"
          />
        </div>
      </div>
      <button className="text-white bg-green-600 rounded-md text-xs py-3 px-9 mt-5">
        Update
      </button>
    </div>
  );
};

export default Settings;
