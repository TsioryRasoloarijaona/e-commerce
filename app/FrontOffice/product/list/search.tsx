'use client'
 import { parseAsString, useQueryState } from 'nuqs'
import { FaSearch } from "react-icons/fa";
export default function Search() {
  const [research, setResearch] = useQueryState('research',{shallow : false , defaultValue : '',throttleMs: 500})
  return(
    <div className="flex flex-row items-center w-1/4 justify-evenly border border-gray-500 rounded-lg " >
      <FaSearch className="text-xl text-gray-500"/>
      <input
        type="text"
        placeholder="search car"
        className="outline-none bg-transparent text-gray-500 text-sm w-5/6  py-1"
         onChange={e => {setResearch('')
          setResearch(e.target.value)}}
      />
    </div>
  );
}
