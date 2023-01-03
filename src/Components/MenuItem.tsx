import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DashBoardIcon,
  InvoicesIcon,
  MyWalletsIcon,
  SettingsIcon,
  TransactionIcon,
} from "./MenuIcons";

const MenuItem = ({ name }: { name: string }) => {
  const { pathname } = useLocation();
  const to = convertNameToUrlString(name);
  const baseUrl = getBaseUrl(pathname);
  const isActive = baseUrl === "/" + to;

  return (
    <Link
      className={`${
        isActive ? "bg-magloGreen" : ""
      } cursor-pointer rounded-lg flex py-3 pl-4 pr-20 transition-all items-center h-12`}
      to={to}
    >
      {getIcon(name, isActive)}
      <p
        className={`text-sm font-semibold transition-all ml-3 ${
          isActive ? "" : "text-gray-500"
        }`}
      >
        {name}
      </p>
    </Link>
  );
};

export default MenuItem;

const convertNameToUrlString = (str: string) => {
  return str.toLowerCase().replace(/\s/g, "");
};

const getBaseUrl = (pathname: string): string => {
  let baseUrl: string = "/";

  for (let i = 1; i < pathname.length; i++) {
    const char = pathname[i];
    if (char !== "/") {
      baseUrl = baseUrl + char;
    } else {
      return baseUrl;
    }
  }

  return pathname;
};

const getIcon = (name: string, isActive: boolean): React.ReactNode => {
  switch (name) {
    case "Dashboard":
      return <DashBoardIcon isActive={isActive} />;
    case "Transactions":
      return <TransactionIcon isActive={isActive} />;
    case "Invoices":
      return <InvoicesIcon isActive={isActive} />;
    case "My Wallets":
      return <MyWalletsIcon isActive={isActive} />;
    case "Settings":
      return <SettingsIcon isActive={isActive} />;
    default:
      return null;
  }
};
