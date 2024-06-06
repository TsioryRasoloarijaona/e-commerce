"use client";
import React from "react";
import { Button, Text } from "@chakra-ui/react";
import ModalCompenent from "../modal";
import { useDisclosure } from "@chakra-ui/react";

export default function ButtonAppointment({ idCar }: { idCar: number }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const click = () => {
    onOpen();
  };
  return (
    <div>
      <ModalCompenent open = {isOpen} close={onClose} idCar={idCar}/>
      <Button background={"white"} onClick={click}>
        <Text color={"black"}>appointment</Text>
      </Button>
    </div>
  );
}
