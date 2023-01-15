import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";
import { assets } from "../Assets/Assets";
import Search from "../Components/Search";
import Status from "../Components/Status";
import { Invoice } from "../Types/GlobalTypes";
import { getCapitalized } from "../Util/UtilityFunctions";

const Invoices = () => {
  const { invoices } = useContext(GlobalContext);
  const [localInvoiceList, setLocalInvoiceList] = useState<Invoice[]>(invoices);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setLocalInvoiceList(
      invoices.filter(
        (invoice) =>
          invoice.name.toLowerCase().includes(searchValue) ||
          invoice.status.toLowerCase().includes(searchValue)
      )
    );
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <Search handleSearch={handleSearch} placeholder="Search invoices" />
        <div className="flex">
          <Link
            className="flex bg-magloGreen py-3 px-5 rounded-md items-center font-semibold text-sm mr-7"
            to="new-invoice"
          >
            <img src={assets.CreateInvoice} alt="invoice" className="mr-2" />
            Create invoice
          </Link>
          <button className="flex py-3 px-5 rounded-md items-center font-semibold text-sm border dark:text-white">
            <img src={assets.Filters} alt="invoice" className="mr-2" />
            Filters
          </button>
        </div>
      </div>
      <div className="text-xs text-gray-400 uppercase flex justify-between mt-9 mb-6 text-left">
        <p className="w-[20%]">Name/client</p>
        <p className="w-[15%]">Date</p>
        <p className="w-[10%]">Orders/type</p>
        <p className="w-[15%]">Amount</p>
        <p className="w-[7%]">Status</p>
        <p className="w-[10%]">Action</p>
      </div>
      {localInvoiceList.map((invoice) => (
        <div className="flex items-center text-sm justify-between border-b pb-5 pt-1 text-left">
          <div className="flex w-[20%]">
            <img
              src={invoice.img}
              alt="invoice"
              className="w-9 h-9 rounded-full mr-4"
            />
            <div className="text-left">
              <p className="text-sm dark:text-white">{invoice.name}</p>
              <p className="text-gray-400 text-xs">Inv. {invoice.invoiceId}</p>
            </div>
          </div>
          <div className="text-left w-[15%]">
            <p className="text-sm dark:text-white">{invoice.date}</p>
            <p className="text-gray-400 text-xs">at {invoice.time}</p>
          </div>
          <p className="text-gray-400 font-medium w-[10%]">
            {!invoice.noOfItems
              ? getCapitalized(invoice.type!)
              : invoice.noOfItems}
          </p>
          <p className="font-semibold w-[15%] dark:text-white">
            ${invoice.amount}
          </p>
          <Status status={invoice.status} />
          <p className="cursor-pointer w-[10%]">...</p>
        </div>
      ))}
    </div>
  );
};

export default Invoices;
