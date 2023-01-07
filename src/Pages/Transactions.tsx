import React, { useContext, useState } from "react";
import { GlobalContext } from "../App";
import Search from "../Components/Search";
import { Transaction } from "../Types/GlobalTypes";

const Transactions = () => {
  const { transactions } = useContext(GlobalContext);
  const [localTransactionsList, setLocalTransactionsList] =
    useState<Transaction[]>(transactions);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value.toLowerCase();
    setLocalTransactionsList(
      transactions.filter(
        (transaction) =>
          transaction.company.toLowerCase().includes(searchValue) ||
          transaction.name.toLowerCase().includes(searchValue) ||
          transaction.type.toLowerCase().includes(searchValue) ||
          transaction.invoiceId.toLowerCase().includes(searchValue)
      )
    );
  };

  return (
    <div>
      <Search
        handleSearch={handleSearch}
        placeholder="Search anything on Transactions"
      />
      <div className="h-[1px] bg-gray-100 mt-7" />
      <div className="flex my-5 uppercase text-xs font-normal text-gray-400 text-left justify-between">
        <p className="w-[20%]">Name/Business</p>
        <p className="w-[15%]">Type</p>
        <p className="w-[15%]">Amount</p>
        <p className="w-[15%]">Date</p>
        <p className="w-[15%]">Invoice Id</p>
        <p className="w-[15%]">Action</p>
      </div>
      {localTransactionsList.map((transaction, index) => (
        <div
          className="flex pb-5 mb-2 border-b border-gray-100 dark:border-gray-50 text-left justify-between dark:text-white"
          key={index}
        >
          <div className="flex justify-start w-[20%] ">
            <img
              src={transaction.img}
              alt="product icon"
              className="w-9 h-9 mr-3 object-cover rounded"
            />
            <div className="text-left">
              <p className="font-semibold text-sm">{transaction.name}</p>
              <p className="text-xs font-normal">{transaction.company}</p>
            </div>
          </div>
          <p className="text-sm font-medium w-[15%] dark:text-gray-400">
            {transaction.type}
          </p>
          <p className="text-sm font-medium w-[15%]">${transaction.amount}</p>
          <div className="w-[15%] ">
            <p className="text-sm">{transaction.date}</p>
            <p className="text-xs text-gray-400">at {transaction.time}</p>
          </div>
          <p className="text-sm font-medium w-[15%] text-gray-400">
            {transaction.invoiceId}
          </p>
          <div className="w-[15%]">
            <button className="bg-magloGreen py-3 px-5 rounded h-10 text-sm font-medium text-black">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
