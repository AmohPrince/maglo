import React from "react";
import { assets } from "../Assets/Assets";

const Search = ({
  handleSearch,
  placeholder,
}: {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => {
  return (
    <div className="w-1/3 mt-3 bg-gray-50 dark:bg-magloDarkBlue py-2 px-3 rounded-lg flex cursor-pointer">
      <img src={assets.searchIcon} alt="search" className="mr-4" />
      <input
        type="text"
        className="w-full bg-transparent focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default Search;
