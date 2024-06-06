"use client";
import { useState } from "react";
import { useQueryState } from "nuqs";
export default function BrandFilter({list} : {list: string[]}) {
  const [brand , setBrand] = useQueryState('brand', {shallow : false , defaultValue : 'pined'})
  const [selectedButton, setSelectedButton] = useState<number>(list.indexOf(brand));
  const handleClick = (index : number , brand : string) => {
    setSelectedButton(index);
    setBrand(brand);
    
  };

  
  return (
    <div className="bg-transparent space-x-3">

      {list.map((el , index)=>
      <button  className={`${selectedButton === index ? 'bg-white text-black' : 'bg-transparent text-white'}  px-4 py-2 border border-gray-700 rounded-full mb-2`}
      onClick={()=>handleClick(index , el)}>
        {el}
      </button>
    )}
      
    </div>
  );
}
