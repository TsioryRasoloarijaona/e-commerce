"use client";
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
import { appointmentRequest } from "@/app/interface/appointmentInterface";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const appointmentSchema = z.object({
  firstName: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "First Name is required",
    }),
  lastName: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "Last Name is required",
    }),
  phoneNumber: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "Phone Number is required",
    }),
  appointmentDate: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "Appointment date is required",
    }),
  email: z
    .string()
    .email()
    .trim()
    .refine((value) => value !== "", {
      message: "Email is required",
    }),
  message: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "Message is required",
    }),
});

export default function AppointmentForm({ idCar }: { idCar: number }) {
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm<appointmentRequest>({
    resolver: zodResolver(appointmentSchema),
  });
  const onSubmit: SubmitHandler<appointmentRequest> = (data) =>
    console.log(`car id : ${idCar} data : ${data.email}`);

  return (
    <div>
      <ModalContent>
        <ModalHeader>appointment information</ModalHeader>
        <ModalCloseButton />
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="First name"
                focusBorderColor="gray.300"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                focusBorderColor="gray.300"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>phone number</FormLabel>
              <Input
                type="tel"
                placeholder="+03305654545"
                focusBorderColor="gray.300"
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>date</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="date"
                focusBorderColor="gray.300"
                {...register("appointmentDate", { required: true })}
              />
              {errors.appointmentDate && <p>{errors.appointmentDate.message}</p>}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>email</FormLabel>
              
              <Input
                placeholder="@gmail.com"
                type="email"
                focusBorderColor="gray.300"
                {...register("email", { required: true })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="write your message here ......."
                focusBorderColor="gray.300"
                {...register("message", { required: true })}
              />
              {errors.message && <p>{errors.message.message}</p>}
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
