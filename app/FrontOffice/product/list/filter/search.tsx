'use client'
 import { parseAsString, useQueryState } from 'nuqs'
import { FaSearch } from "react-icons/fa";
export default function Search() {
  const [research, setResearch] = useQueryState('research',{shallow : false , defaultValue : '',throttleMs: 500})
  return(
    <div className="flex flex-row items-center justify-evenly border border-gray-600 rounded-full " >
      <FaSearch className=" text-gray-300"/>
      <input
        type="text"
        placeholder="search car ....."
        className="outline-none bg-transparent text-gray-300 text-sm w-5/6  py-2"
         onChange={e => {setResearch('')
          setResearch(e.target.value)}}
      />
    </div>
  );
}
