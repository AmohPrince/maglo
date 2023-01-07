import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

const DashboardTransactions = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="rounded-md border mt-5 py-4 px-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">Recent Transaction</p>
        <Link
          className="font-semibold text-sm text-green-600"
          to="/transactions"
        >
          View All
        </Link>
      </div>
      <div className="uppercase flex justify-between font-normal my-5 text-xs text-gray-400 text-center">
        <p className="w-[30%] text-left">Name/Business</p>
        <p className="w-1/4">Type</p>
        <p className="w-[20%]">Amount</p>
        <p className="w-1/4">Date</p>
      </div>
      {transactions.slice(0, 3).map((transaction) => (
        <div className="flex text-sm items-center justify-between border-b pb-3 pt-1">
          <div className="flex w-[30%]">
            <img
              src={transaction.img}
              alt="company logo"
              className="h-9 w-9 mr-3 object-cover rounded"
            />
            <div className="text-left">
              <p className="font-semibold">{transaction.name}</p>
              <p className="text-gray-400 text-xs">{transaction.company}</p>
            </div>
          </div>
          <p className="text-gray-400 w-1/4">{transaction.type}</p>
          <p className="w-[20%]">${transaction.amount}</p>
          <p className="text-gray-400 w-1/4">{transaction.date}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardTransactions;
