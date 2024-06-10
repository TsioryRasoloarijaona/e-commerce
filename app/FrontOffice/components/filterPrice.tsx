"use client";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useQueryState } from "nuqs";
import { formatter } from "../hooks/numberFormat";

interface filterProps {
  option: string ;
  menu: [number,number][];
}

const FilterPrice: React.FC<filterProps> = ({ option, menu }) => {
  const [choice, setChoice] = useState(option);
  const [interval, setInterval] = useQueryState<[number, number]>("interval", {
    shallow: false,
    defaultValue: [0,0],
    parse: (value: string | string[]) => {
      const parsedValue = value instanceof Array ? value : value.split(",");
      return [parseFloat(parsedValue[0]), parseFloat(parsedValue[1])];
    },
  });

  const keyWord = (word: [number,number]) => {
   
      setInterval(word);
    
    setChoice(formatter(word[0])+"-"+formatter(word[1]));
  };
  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          fontWeight={"normal"}
          fontSize={"smaller"}
          color={"white"}
          backgroundColor={"gray.800"}
          border={0}
          borderColor={"gray.800"}
          _hover={{ bg: "transparent" }}
          _focus={{ bg: "transparent" }}
          _expanded={{ bg: "transparent" }}
        >
          {choice}
        </MenuButton>
        <MenuList backgroundColor={"gray.800"} border={0}>
          <MenuItem
            // onClick={() =>/* keyWord(option)*/}
            backgroundColor={"gray.800"}
            color={"white"}
          >
            {option}
          </MenuItem>
          {menu.map((menu,index) => (
            <MenuItem
              onClick={() => keyWord(menu)}
              backgroundColor={"gray.800"}
              color={"white"}
              key={index}
            >
              {formatter(menu[0]) + " - " + formatter(menu[1])}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default FilterPrice;
