"use client";
import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";

interface toastProps{
    show : boolean,
    timeOut : number
}
export const PromiseToast : React.FC<toastProps>=({show,timeOut})=> {
  const toast = useToast();

  useEffect(()=>{
    if(show){
        const examplePromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(200), timeOut)
          })

          toast.promise(examplePromise, {
            success: {  description: 'your request has been sent' },
            error: {  description: 'Something wrong' },
            loading: {  description: 'request pending...' },
          })
    }
  },[show,toast])
 
  return null;
}
