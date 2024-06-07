
"use client";
import { useToast } from "@chakra-ui/react";
import { useEffect } from 'react';

interface toastProps {
  shouldShow : boolean,
  status : "warning" | "success" | "error",
  description : string | null
}

export const Toast : React.FC<toastProps> =  ({ shouldShow,status,description })=> {
  const toast = useToast();

  useEffect(() => {
    if (shouldShow) {
      toast({
       description: description,
        status: status,
        duration: 3000,
        isClosable: true,
        position : 'bottom-left'
      });
    }
  }, [shouldShow, toast]);

  return null; 
}
