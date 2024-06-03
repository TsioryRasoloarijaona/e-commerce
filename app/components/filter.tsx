"use client";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { parseAsString, useQueryState} from "nuqs";
import { shallow } from "zustand/shallow";


interface filterProps {
  option : string,
  menu : string[]

}

 const Filter :  React.FC<filterProps> =  ({ option, menu })=> {
  const [brand, setBrand] = useQueryState('brand' ,{shallow : false , defaultValue : ''})
  const [color, setColor] = useQueryState('color', {shallow : false ,defaultValue : ''})
  const [motor, setMotor] = useQueryState('motor', {shallow : false,defaultValue : ''})
  const [name, setName] = useQueryState('name', {shallow : false,defaultValue : ''})
  const [choice, setChoice] = useState(option);


  
  const keyWord =  (word : string)=> {
    if (option === 'brand') {
      setBrand(word !== 'brand' ? word : '');
    } else if (option === 'color') {
      setColor(word !== 'color' ? word : '');
    } else if (option === 'name') {
      setName(word !== 'name' ? word : '');
    } else if (option === 'motor type') {
      setMotor(word !== 'motor type' ? word : '');
    }
    setChoice(word);
  }

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
          _hover={{ bg: 'transparent' }}
          _focus={{ bg: 'transparent' }}
          _expanded={{ bg: 'transparent' }}
        >
          {choice}
        </MenuButton>
        <MenuList backgroundColor={"gray.800"} border={0}>
        <MenuItem onClick={() => keyWord(option)} backgroundColor={"gray.800"} color={"white"}>{option}</MenuItem>
          {menu.map((menu) => (
            <MenuItem onClick={() => keyWord(menu)} backgroundColor={"gray.800"} color={"white"}>{menu}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}

export default Filter;
