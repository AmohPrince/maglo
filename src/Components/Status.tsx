import React from "react";
import { getCapitalized } from "../Util/UtilityFunctions";

const Status = ({ status }: { status: string }) => {
  let style = {
    bg: "bg-magloLightOrange",
    text: "text-magloOrange",
  };

  if (status === "paid") {
    style = {
      bg: "bg-magloLightGreen",
      text: "text-magloTextGreen",
    };
  } else if (status === "unpaid") {
    style = {
      bg: "bg-magloLightRed",
      text: "text-magloRed",
    };
  }
  return (
    <div
      className={`py-2 rounded-md ${
        style.bg + " " + style.text
      } w-[7%] text-center`}
    >
      {getCapitalized(status)}
    </div>
  );
};

export default Status;
