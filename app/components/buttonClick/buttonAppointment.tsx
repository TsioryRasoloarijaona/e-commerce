'use client'
import React from "react";
import { Button, Text } from "@chakra-ui/react";

export default function ButtonAppointment({id} : {id : number}) {
const click = ()=>{
    alert(id)
}
  return (
    <div>
      <Button background={"white"} onClick={click}>
        <Text color={"black"}>appointment</Text>
      </Button>
    </div>
  );
}
