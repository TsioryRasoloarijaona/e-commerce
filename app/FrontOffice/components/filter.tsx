"use client";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useQueryState } from "nuqs";

interface filterProps {
  option: string;
  menu: string[];
}

const Filter: React.FC<filterProps> = ({ option, menu }) => {
  const [motor, setMotor] = useQueryState("motor", {
    shallow: false,
    defaultValue: "",
  });
  const [type, setType] = useQueryState("type", {
    shallow: false,
    defaultValue: "",
  });
  const [choice, setChoice] = useState(option);

  const keyWord = (word: string) => {
    if (option === "motor type") {
      setMotor(word !== "motor type" ? word : "");
    } else if (option === "type") {
      setType(word !== "type" ? word : "");
    }
    setChoice(word);
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
            onClick={() => keyWord(option)}
            backgroundColor={"gray.800"}
            color={"white"}
          >
            {option}
          </MenuItem>
          {menu.map((menu , index) => (
            <MenuItem
              onClick={() => keyWord(menu)}
              backgroundColor={"gray.800"}
              color={"white"}
              key={index}
            >
              {menu}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default Filter;
