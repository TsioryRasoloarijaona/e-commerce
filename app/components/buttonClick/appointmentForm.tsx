'use client'
import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
export default function AppointmentForm({idCar}:{idCar:number}) {
  return (
    <div>
      <ModalContent>
        <ModalHeader>appointment information</ModalHeader>
        <ModalCloseButton />
        <form action="">
          <ModalBody>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" focusBorderColor="gray.300" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" focusBorderColor="gray.300" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>phone number</FormLabel>
              <Input
                type="tel"
                placeholder="+03305654545"
                focusBorderColor="gray.300"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>date</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                focusBorderColor="gray.300"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>email</FormLabel>
              <Input
                placeholder="@gmail.com"
                type="email"
                focusBorderColor="gray.300"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="write your message here ......."
                focusBorderColor="gray.300"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              rightIcon={<ArrowForwardIcon />}
              color="white"
              bgColor="gray.800"
              variant="solid"
              _hover={{ bg: "gray.800" }}
              type="submit"
            >
              send
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </div>
  );
}
