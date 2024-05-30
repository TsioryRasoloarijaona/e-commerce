import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
    
  } from '@chakra-ui/react'
interface modalProp{
    content : React.ReactNode,
    open : boolean
    close : ()=>void
}
const  ModalCompenent: React.FC<modalProp>= ({content,open,close})=> {
  return (
    <div>
       <Modal isOpen={open} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {content}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={close}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ModalCompenent
