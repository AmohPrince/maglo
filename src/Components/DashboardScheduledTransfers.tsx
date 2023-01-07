import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

export const DashboardScheduledTransfers = () => {
  const { scheduledTransfers } = useContext(GlobalContext);
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">Scheduled Transfers</p>
        <Link
          className="font-semibold text-sm text-green-600"
          to="/transactions"
        >
          View All
        </Link>
      </div>
      {scheduledTransfers.slice(0, 2).map((transfer) => (
        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <img
              src={transfer.img}
              alt="person"
              className="w-[33px] h-[33px] mr-4 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{transfer.recipient}</p>
              <p className="text-xs text-gray-400">
                {transfer.date} at {transfer.time}
              </p>
            </div>
          </div>
          <p className="font-semibold">- ${transfer.amount}</p>
        </div>
      ))}
    </div>
  );
};
