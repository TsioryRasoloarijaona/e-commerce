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
import { Car } from "@/app/interface/appointmentInterface";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { postData } from "@/app/hooks/postData";
import { useState } from "react";
import { PromiseToast } from "../promiseToast";

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
  contact: z
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

  const [time, setTime] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const onSubmit: SubmitHandler<appointmentRequest> = async (data) => {
    const car: Car = { id: idCar };
    const body: appointmentRequest = {
      car: car,
      firstName: data.firstName,
      lastName: data.lastName,
      contact: data.contact,
      email: data.email,
      appointmentDate: data.appointmentDate,
      message: data.message,
    };
    setOpen(true);
    const startTime = Date.now();
    await postData("http://localhost:8080/rdv/take", body);
    const endTime = Date.now();
    setTime(endTime - startTime);
  };

  return (
    <div>
      <PromiseToast show={open} timeOut={time} />

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
                {...register("contact", { required: true })}
              />
              {errors.contact && <p>{errors.contact.message}</p>}
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
              {errors.appointmentDate && (
                <p>{errors.appointmentDate.message}</p>
              )}
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
