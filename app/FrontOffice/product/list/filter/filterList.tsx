import React from 'react'
import Filter from '@/app/components/filter'
import { getData } from '@/app/hooks/getData';
export default async function FilterList() {

    const motor: string[] = await getData("http://localhost:8080/car/motorList");
    const type : string[] = await getData("http://localhost:8080/car/typeList");

 

  return (
    <div className="flex flex-row justify-center items-center gap-5 my-3 overflow-x-auto no-scrollbar">
    
        <Filter option="motor type" menu={motor} />
        <Filter option="type" menu={type} />
       
      </div>
  )
}
