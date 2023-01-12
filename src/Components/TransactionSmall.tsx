import React from "react";
import { Transaction } from "../Types/GlobalTypes";

const TransactionSmall = ({ transaction }: { transaction: Transaction }) => {
  return (
    <div className="flex text-sm justify-between items-center mb-4">
      <div className="flex items-center">
        <img
          src={transaction.img}
          alt="company logo"
          className="mr-4 w-9 h-9 p-[2px] rounded-md object-cover"
        />
        <div>
          <p className="font-medium">{transaction.company}</p>
          <p className="text-gray-400 text-xs font-normal">
            {transaction.date + " , " + transaction.time}
          </p>
        </div>
      </div>
      <p className="font-semibold text-base">+${transaction.amount}</p>
    </div>
  );
};

export default TransactionSmall;
