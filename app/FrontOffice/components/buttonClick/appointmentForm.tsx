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
import { appointmentRequest } from "@/app/FrontOffice/interface/appointmentInterface";
import { Car } from "@/app/FrontOffice/interface/appointmentInterface";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { postData } from "@/app/FrontOffice/hooks/postData";
import { useState } from "react";
import { PromiseToast } from "../promiseToast";
import GoogleAuth from "@/app/FrontOffice/hooks/googleAuth";
import { usePersonStore } from "@/app/FrontOffice/hooks/googleAuth";
import { useEffect } from "react";
const digitsOnlyRegex = /^\d+$/;

const appointmentSchema = z.object({
  lastName: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: " Name is required",
    }),
  contact: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "Phone Number is required",
    })
    .refine((value) => digitsOnlyRegex.test(value), {
      message: "Phone Number must contain only digits",
    }),
  appointmentDate: z
    .string()
    .trim()
    .refine((value) => value !== "", {
      message: "Appointment date is required",
    })
    .refine(
      (value) => {
        const appointmentDate = new Date(value);
        const now = new Date();
        return appointmentDate > now;
      },
      {
        message: "Appointment date must be in the future",
      }
    ),
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
    setValue,
    reset,
    formState: { errors },
  } = useForm<appointmentRequest>({
    resolver: zodResolver(appointmentSchema),
  });

  const [time, setTime] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const { name, email } = usePersonStore();

  useEffect(() => {
    setValue("lastName", name);
    setValue("email", email);
  }, [name, email, idCar, setValue]);

  const onSubmit: SubmitHandler<appointmentRequest> = async (
    data: appointmentRequest
  ) => {
    const car: Car = { id: idCar };
    const body: appointmentRequest = {
      car: car,
      lastName: data.lastName,
      contact: data.contact,
      email: data.email,
      appointmentDate: data.appointmentDate,
      message: data.message,
    };
    setOpen(true);
    const startTime = Date.now();
    await postData("https://e-car.onrender.com/rdv/take", body);
    const endTime = Date.now();
    setTime(endTime - startTime);
    reset();
  };
  const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowString = tomorrow.toISOString().split('T')[0];


  return (
    <div>
      <PromiseToast show={open} timeOut={5000} />

      <ModalContent>
        <ModalHeader>Appointment request </ModalHeader>
        <ModalCloseButton />
        <div className="pl-4">
          <GoogleAuth />
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl mt={4}>
              <FormLabel fontSize={"small"}>name</FormLabel>
              <Input
                placeholder="name"
                focusBorderColor="gray.300"
                defaultValue={name}
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize={"small"}>email</FormLabel>

              <Input
                placeholder="@gmail.com"
                type="email"
                focusBorderColor="gray.300"
                value={email}
                {...register("email", { required: true })}
                readOnly
              />
              {errors.email && (
                <p className="text-red-500 text-sm ">{errors.email.message}</p>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize={"small"}>phone number</FormLabel>
              <Input
                type="tel"
                placeholder="+03305654545"
                focusBorderColor="gray.300"
                {...register("contact", { required: true })}
              />
              {errors.contact && (
                <p className="text-red-500 text-sm">{errors.contact.message}</p>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize={"small"}>date</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="date"
                focusBorderColor="gray.300"
                {...register("appointmentDate", { required: true })}
                min={tomorrowString}
              />
              {errors.appointmentDate && (
                <p className="text-red-500 text-sm ">
                  {errors.appointmentDate.message}
                </p>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize={"small"}>Message</FormLabel>
              <Textarea
                placeholder="write your message here ......."
                focusBorderColor="gray.300"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
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
