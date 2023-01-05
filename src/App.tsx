import React, { createContext, useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import { assets } from "./Assets/Assets";
import Logo from "./Components/Logo";
import MenuItem from "./Components/MenuItem";
import { GlobalContextType, Transaction } from "./Types/GlobalTypes";
import devTransactions from "./Util/transactions.json";

export const GlobalContext = createContext<GlobalContextType>(null as any);

function App() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(devTransactions);

  return (
    <GlobalContext.Provider
      value={{
        transactions,
      }}
    >
      <div className="App flex h-screen dark:bg-magloBlack">
        <div className="bg-gray-100 pt-8 px-6 relative dark:bg-magloSemiBlack">
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
    </GlobalContext.Provider>
  );
}

export default App;
