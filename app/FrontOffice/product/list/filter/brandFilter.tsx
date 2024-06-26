"use client";
import { useState } from "react";
import { useQueryState } from "nuqs";
export default function BrandFilter({list} : {list: string[]}) {
  const [brand , setBrand] = useQueryState('brand', {shallow : false , defaultValue : 'latest'})
  const [selectedButton, setSelectedButton] = useState<number>(list.indexOf(brand));
  const handleClick = (index : number , brand : string) => {
    setSelectedButton(index);
    setBrand(brand);
    
  };

  
  return (
    <div className="bg-transparent flex space-x-3 overflow-x-auto">

      {list.map((el , index)=>
      <button  className={`${selectedButton === index ? 'bg-white text-black' : 'bg-transparent text-white'}  px-4 lg:md:py-2 border border-gray-700 rounded-full mb-2`}
      onClick={()=>handleClick(index , el)} key={index}>
        {el}
      </button>
    )}
      
    </div>
  );
}
