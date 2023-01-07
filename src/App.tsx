import React, { createContext, useState } from "react";
import { Outlet, useLocation } from "react-router";
import "./App.css";
import { assets } from "./Assets/Assets";
import Logo from "./Components/Logo";
import MenuItem from "./Components/MenuItem";
import { GlobalContextType, Invoice, Transaction } from "./Types/GlobalTypes";
import devTransactions from "./Util/transactions.json";
import devTransfers from "./Util/scheduledtransfers.json";
import devInvoices from "./Util/invoices.json";
import { getCapitalized } from "./Util/UtilityFunctions";

export const GlobalContext = createContext<GlobalContextType>(null as any);

function App() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(devTransactions);
  const [scheduledTransfers, setScheduledTransfers] = useState(devTransfers);
  const [invoices, setInvoices] = useState<Invoice[]>(devInvoices);

  const { pathname } = useLocation();

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        scheduledTransfers,
        invoices,
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
        <div className="show py-8 px-10 flex-grow">
          <div className="flex justify-between items-center w-full">
            <p className="font-bold text-2xl dark:text-white">
              {getCurrentPage(pathname)}
            </p>
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
          <Outlet />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;

const getCurrentPage = (pathname: string): React.ReactNode => {
  let i = "/";
  for (let index = 1; index < pathname.length; index++) {
    const char = pathname[index];
    if (char !== "!") {
      i = i + char;
    } else {
      return getCapitalized(i.replace("/", ""));
    }
  }
  return getCapitalized(i.replace("/", ""));
};
