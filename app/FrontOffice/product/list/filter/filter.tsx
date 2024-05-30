"use client";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
export default function Filter({ option }: { option: string }) {
  const [choice, setChoice] = useState(option);
  const menu: string[] = ["choice1", "choice2", "choice3"];
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
          {menu.map((menu) => (
            <MenuItem onClick={() => setChoice(menu)} backgroundColor={"gray.800"} color={"white"}>{menu}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}
