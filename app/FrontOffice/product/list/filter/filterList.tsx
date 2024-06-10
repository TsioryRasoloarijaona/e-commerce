import React from 'react'
import Filter from '@/app/FrontOffice/components/filter'
import { getData } from '@/app/FrontOffice/hooks/getData';
import FilterPrice from '@/app/FrontOffice/components/filterPrice';
export default async function FilterList() {

    const motor: string[] = await getData("https://e-car.onrender.com/car/motorList" , 'car');
    const type : string[] = await getData("https://e-car.onrender.com/car/typeList" , 'car');
    const prices : [number,number][] = await getData('https://e-car.onrender.com/car/intervalPrice' , 'car')
 

  return (
    <div className="flex flex-row justify-center items-center gap-5 my-3 overflow-x-auto no-scrollbar">
    
        <Filter option="motor type" menu={motor} />
        <Filter option="type" menu={type} />
        <FilterPrice option='price range' menu={prices}/>
       
      </div>
  )
}
