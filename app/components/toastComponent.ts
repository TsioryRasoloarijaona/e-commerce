"use client";
import { useToast } from "@chakra-ui/react";


export function Toast() {
  const toast = useToast();
  const open = ()=> toast({
    title: "Account created.",
    description: "We've created your account for you.",
    status: "success",
    duration: 9000,
    isClosable: true,
  });

  return open();
}
