import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
export default function Search() {
  return (
    <div className="flex flex-row items-center w-1/4 justify-evenly border border-gray-500 rounded-lg ">
      <FaSearch className="text-xl text-gray-500"/>
      <input
        type="text"
        placeholder="search car"
        className="outline-none bg-transparent text-gray-500 text-sm w-5/6  py-1"
      />
    </div>
  );
}
