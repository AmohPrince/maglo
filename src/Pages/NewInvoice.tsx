import React, { useRef } from "react";
import { assets } from "../Assets/Assets";

const NewInvoice = () => {
  const invoiceDate = useRef<HTMLInputElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);

  return (
    <div className="flex justify-between mt-4">
      <div className="w-[65%]">
        <div className="bg-magloSemiBlack text-white p-5 pb-6 rounded-xl flex justify-between">
          <div className="flex">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <circle cx="18.5" cy="18.5" r="18.5" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_388_503"
                    transform="scale(0.0166667)"
                  />
                </pattern>
                <image
                  id="image0_388_503"
                  width="60"
                  height="60"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEnklEQVRoBe1ai1HkMAzdEiiBEiiBEujg6ODo4OgAOoAOuA4ogRIogRJ087JSsGXJlp2wn+x5hnESHEtPfzm72wUHEV0R0T0RvRDRBxF90fEGaIMH8AKeroIw2suI6JqIno4MMCJagL9uI3JWsEYB9NzGkwPJf8xa/Tw3pAm/4D2mbSK6IaJzBiu4geHGV+tut9uAZgWszHVNb0SzAlZmgC6jOEdiWbS1OQ9kbMpbA6nxfAcxTuB6wdbun6cAxvl2a+AsPKjOrhCZUZpdyrgHYJRklzJeABhF+KWMDwA+ZtdzaEF/AfBFjf+AT1TdcLtnIrrjIumWiN5HeD11DQPoo1kL75udbtA/BRiMQCPI8Q8D2qgClZaPiKDprrEUMIC9McUqkyyACHOoC8ruRlAmM/fukT3nNUsAPwjtyEEal7AQijfQxt3KnpF5pEocBTyDjTAma9gfLcAw/5BWZS/MI/37CODHlGjPtdGGdmtV6I34LyTdC/hdCI7OiVZcrbL5/+FgZ9Ic7QF6AFfPh5jJpg8yo+46Ivqtyt0PLVzDUiw3MZ/1AL7XhOWeiKANGQhM3T7OIKy8+lfoyDwSrIS5KOA3IaZnBVb2Nc1Qvyv37I9eBC8EvaTDiwL+Pg8SLvdREqWeNcIaJqJf1gbJs4z2SO5N9goFLTMqswnCr62RMZnIKLt0rCPd7yV7YS/kRQcWLQ0DkJkfK1Gy8DnNNO4DmgXwTHAcGD3TTwXlXrcAF/7DzNbOwe4sgOkz7npcpvgflnZrdFv7Tf+vAf5MmUyvk1yqibjvyPvsChEtZdrF+wNNiOav6sOedtMUpDesmnPD79O99mfIIqU9WHynXjw8DZtpJaAdU0jCdzCdmAVOpQ7vEoIHuDAnNqlWhDTf43ejH9cL3+X3vYywGLBHsGVSrjlzuRhlrBDa0tybErY0XBAMatc054AbpPx4wsapySpDA/YIto5SviAUa1QiugXAbCrWiM5CTAP2tNvyH09QtYguPMyzIzD8XGq1kQL2mI4k+6LYGGjQizYQAhjYJxUOui+4A363AsFNXw9lwah2TXPuNGXwYAa9YFUmGDCjqMHRbvGDFrSVomFPu2jGW6NgNNAUWHt6PHgdmd4DHwWhTa/2Rxz6BGAv0SMNtXwXRLNWsDMqp0x7XRlMscYHzNYMduwSwDHXDwCcMSyBI12UcmVcZ8Q63tNbmWktYRrn3wCOPwBwtcnvQFAImlndDsCFCXQGihkwa1cDid4X9bMIv2fm4FQAZSamz6UW4JoJaQCQPMpGmFYmTb2wcW/W71GwDaBCevogDmeeI/RgwJENl86ztawMVPiafvIgeRZRzjo1lMWHmGFZhcVZ4IMa1TxPaQnOvcQU9aZL7wF6tjgNdhCo8LQXZseXPXnxEDOsDQUEojH+cL3EAr/z/MLoegjwa9DIreZEtbwGUOxRpjz2jZ50tBYzP72Pf7DIpr0l0NUAOAVEbqW2ABoYio5JR30BHW0cftocR/dva1YjZ5/GR+tzG+6Hdo3RvGe/fj1x1CicADRPPSai4EPWOMpQgEcZeszqDLTBA9pE8BQqRwH1H+TvIDXZ4dkWAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            <div className="text-left ml-4">
              <p className="font-semibold text-lg">Maglo</p>
              <p className="text-sm font-normal">sales@maglo.com</p>
            </div>
          </div>
          <div className="text-right text-sm font-medium">
            <p>1333 Grey Fox Farm Road</p>
            <p>Houston, TX 77060</p>
            <p>Bloomfield Hills, Michigan(MI), 48301</p>
          </div>
        </div>
        <div className="rounded-lg p-5 flex justify-between bg-magloLightGrey text-sm text-left mt-4 font-medium">
          <div>
            <p className="text-lg font-semibold mb-4">Invoice Number</p>
            <p className="text-gray-500">MAG 2541420</p>
            <p className="text-gray-500">Issued Date: 10 Apr 2022</p>
            <p className="text-gray-500">Due Date: 20 Apr 2022</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold mb-4">Billed to</p>
            <p className="text-gray-500">Sajib Rahman</p>
            <p className="text-gray-500">3471 Rainy Day Drive</p>
            <p className="text-gray-500">Needham, MA 02192</p>
          </div>
        </div>
        <div className="text-left mt-5 text-sm">
          <p className="font-semibold">Item Details</p>
          <p className="text-gray-400">Details item with more info</p>
          <div className="font-semibold text-sm flex text-gray-400 justify-between mt-6">
            <p className="w-[35%]">ITEM</p>
            <p>ORDER/TYPE</p>
            <p>RATE</p>
            <p>AMOUNT</p>
          </div>
          <div className="flex justify-between py-5 [&>*]:border [&>*]:py-2 [&>*]:px-3 [&>*]:rounded-md">
            <p className="w-[35%]">Iphone 13 Pro Max</p>
            <p>01</p>
            <p>$244</p>
            <p>$244.00</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="font-semibold text-sm text-green-500 cursor-pointer">
              Add item
            </p>
            <div className="font-semibold w-[40%]">
              <div className="flex justify-between mb-3">
                <p>Subtotal</p>
                <p>$244.00</p>
              </div>
              <div className="flex justify-between mb-3">
                <p>Discount</p>
                <p className="text-green-500">Add</p>
              </div>
              <div className="flex justify-between mb-3">
                <p>Tax</p>
                <p className="text-green-500">Add</p>
              </div>
              <div className="flex justify-between mb-3 pt-3 border-t">
                <p>Total</p>
                <p>$244.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[32%] text-left">
        <div className="rounded-lg py-3 px-4 border">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Client Details</p>
            <p className="cursor-pointer">...</p>
          </div>
          <div className="flex my-3">
            <img
              src={assets.Rahman}
              alt="person"
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-semibold">Sajib Rahman</p>
              <p className="text-gray-400 text-sm">rahmansajib@uihut.com</p>
            </div>
          </div>
          <div className="h-[1px] bg-gray-100 mb-3" />
          <p className="font-semibold">UIHUT Agency LTD</p>
          <p className="text-gray-400 text-sm">
            3471 Rainy Day Drive Tulsa, USA
          </p>
          <div className="bg-green-100 rounded-md text-center py-3 mt-4 cursor-pointer">
            <p className="text-green-600 text-xs font-semibold">Add customer</p>
          </div>
        </div>
        <div className="rounded-lg border px-6 py-4 mt-5">
          <p className="font-lg font-semibold">Basic Info</p>
          <div className="mt-2">
            <p className="text-gray-400 text-sm">Invoice Date</p>
            <input
              type="date"
              ref={invoiceDate}
              className="w-full rounded-md mt-3 border py-1 px-5"
            />
            <p className="text-gray-400 text-sm mt-3">Due Date</p>
            <input
              type="date"
              ref={dueDate}
              className="w-full rounded-md mt-3 border py-1 px-5"
            />
            <button className="bg-magloGreen rounded-lg py-2 w-full text-sm font-semibold mt-5">
              Send Invoice
            </button>
            <div className="flex justify-between text-sm text-green-600 font-semibold mt-5">
              <button className="bg-magloLightGrey rounded-lg flex items-center px-5 py-3">
                <img src={assets.Preview} alt="preview" className="mr-2" />
                <p>Preview</p>
              </button>
              <button className="bg-magloLightGrey rounded-lg flex items-center px-5">
                <img src={assets.Download} alt="preview" className="mr-2" />
                <p>Download</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInvoice;
