"use client"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";

import { useCountStore } from "../../hooks/usePineStore";
import { usePinedStore } from "../../hooks/usePineStore";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { TiPin } from "react-icons/ti";

export const PopPin = () => {

  const {count} = useCountStore((state)=>({
    count : state.count
  }))

  const {cars} = usePinedStore((state)=>({
    cars : state.cars
  }))
  return (
    <div className="fixed top-1/2 right-[2vw] transform -translate-y-1/2 z-50 ">
      <Popover>
        <PopoverTrigger>
          <Button rounded={"full"} _hover={{ colorScheme: "gray.800" }} marginInline={"auto"}>
          <TiPin className="text-2xl"/> {count}
          </Button>
        </PopoverTrigger>

        <PopoverContent background={"whitesmoke"}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader color={"black"}>pined cars</PopoverHeader>
          <PopoverBody>
            <ul>
              {cars.map((el , index)=>
              <li className="space-x-4 flex justify-between text-black" key={index}>
                <p>{el.name}</p>
                <span>
                  <Link href={`FrontOffice/details/${el.id}`} className="text-blue-500 underline text-sm"><FaArrowRight /></Link>
                </span>
              </li>
              )}
              
            </ul>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};
