
"use client";
import { useToast } from "@chakra-ui/react";
import { useEffect } from 'react';

export function Toast({ shouldShow } : {shouldShow : boolean}) {
  const toast = useToast();

  useEffect(() => {
    if (shouldShow) {
      toast({
       description: "no matching items",
        status: "warning",
        duration: 3000,
        isClosable: true,
        colorScheme : "gray",
        position : 'bottom-left'
      });
    }
  }, [shouldShow, toast]);

  return null; 
}
