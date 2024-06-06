'use client'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
  } from '@chakra-ui/react'
import React from 'react'

  interface drawerProps {
    position : any,
    header : React.ReactNode,
    content : React.ReactNode,
    button : React.ReactNode
    cssButton : string
  }

const DrawerComponent : React.FC<drawerProps>= ({position,header,content,button,cssButton}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
  return (
    <>
   
    <button onClick={onOpen} className= {cssButton}>
      {button}
    </button>
    <Drawer placement={position} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>{header}</DrawerHeader>
        <DrawerBody>
          {content}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default DrawerComponent;