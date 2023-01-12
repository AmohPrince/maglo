import React, { useContext, useState } from "react";
import { GlobalContext } from "../App";
import { assets } from "../Assets/Assets";
import CreditCards from "../Components/CreditCards";
import TransactionSmall from "../Components/TransactionSmall";

const MyWallets = () => {
  const { transactions } = useContext(GlobalContext);
  const [localTransactionsList, setLocalTransactionsList] =
    useState(transactions);

  const [showAll, setShowAll] = useState(true);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value.toLowerCase();
    setLocalTransactionsList(
      transactions.filter(
        (transaction) =>
          transaction.company.toLowerCase().includes(searchValue) ||
          transaction.name.toLowerCase().includes(searchValue)
      )
    );
  };

  return (
    <div className="flex">
      <div className="w-[36%]">
        <CreditCards />
        <div className="mt-7 p-6 text-left bg-gray-100 rounded-lg">
          <p className="text-gray-400 text-sm font-medium">Your balance</p>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-lg">${5240.0}</p>
            <div className="text-sm flex">
              <div className="flex items-center">
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.666748 5.50008L1.60675 6.44008L5.33341 2.72008V10.8334H6.66675V2.72008L10.3867 6.44675L11.3334 5.50008L6.00008 0.166748L0.666748 5.50008Z"
                    fill="#19D076"
                  />
                </svg>
                <p className="text-green-500 ml-1">23.65%</p>
              </div>
              <div className="flex items-center ml-3">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_407_185)">
                    <path
                      d="M13.3333 8.49992L12.3933 7.55992L8.66659 11.2799L8.66659 3.16659L7.33325 3.16659L7.33325 11.2799L3.61326 7.55325L2.66659 8.49992L7.99992 13.8333L13.3333 8.49992Z"
                      fill="#E5363D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_407_185">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(16 16.5) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-red-500 ml-1">10.40%</p>
              </div>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="mr-14">
              <p className="text-gray-400 text-sm font-medium">Currency</p>
              <p className="font-semibold">USD/US DOLLAR</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium">Currency</p>
              <p className="font-semibold">Active</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-10 text-left flex-grow mt-6">
        <p className="font-semibold text-xl">My Payments</p>
        <div className="font-medium text-sm flex justify-between text-gray-400 mt-6">
          <div>
            <button
              className={`mr-5 ${
                showAll ? "text-black border-b-2 border-green-600" : ""
              } pb-3`}
              onClick={() => setShowAll(true)}
            >
              All Payments
            </button>
            <button
              className={`pb-3 ${
                showAll ? "" : "text-black border-b-2 border-green-600"
              }`}
              onClick={() => setShowAll(false)}
            >
              Regular Payments
            </button>
          </div>
          <div className="flex items-center pb-3">
            <img
              src={assets.searchIcon}
              alt="search"
              className="mr-2 w-5 h-5"
            />
            <input
              type="search"
              placeholder="Search"
              className="focus:outline-none w-16 focus:w-28 transition-all"
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </div>
        <div className="h-[1px] bg-gray-200" />
        {showAll ? (
          <div>
            <p className="font-sm text-gray-400 font-light my-5">Today</p>
            {localTransactionsList.map((transaction) => (
              <TransactionSmall transaction={transaction} />
            ))}
            <p className="font-semibold text-xl mt-8">Upcoming Payments</p>
            <p className="text-xs text-gray-400 font-light mt-4 mb-5">
              Next Month
            </p>
            {localTransactionsList
              .slice(transactions.length - 2, transactions.length)
              .map((transaction) => (
                <TransactionSmall transaction={transaction} />
              ))}
          </div>
        ) : (
          <div className="mt-4">
            {localTransactionsList.map((transaction) => (
              <TransactionSmall transaction={transaction} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWallets;
