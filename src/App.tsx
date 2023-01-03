import React from "react";
import { Outlet } from "react-router";
import "./App.css";
import { assets } from "./Assets/Assets";
import Logo from "./Components/Logo";
import MenuItem from "./Components/MenuItem";

function App() {
  return (
    <div className="App flex h-screen">
      <div className="bg-gray-100 pt-8 px-6 relative">
        <Logo />
        <div className="mt-[15%]">
          <MenuItem name="Dashboard" />
          <MenuItem name="Transactions" />
          <MenuItem name="Invoices" />
          <MenuItem name="My Wallets" />
          <MenuItem name="Settings" />
        </div>
        <div className="mt-auto absolute bottom-9">
          <div className="flex py-3 pl-4 pr-20 cursor-pointer">
            <img src={assets.help} alt="help" />
            <p className="font-sm text-gray-500  ml-3">Help</p>
          </div>
          <div className="flex py-3 pl-4 pr-20 cursor-pointer">
            <img src={assets.logout} alt="help" />
            <p className="font-sm text-gray-500  ml-3">Logout</p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
