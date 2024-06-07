"use client";
import Image from "next/image";
import Link from "next/link";
import ButtonAppointment from "./buttonClick/buttonAppointment";
import { formatter } from "../hooks/numberFormat";
import { MdPushPin } from "react-icons/md";
import { create } from "zustand";
import { carInterface } from "../interface/carInterface";
import { Toast } from "./toastComponent";
import {
  Card,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

interface cardProps {
  data: carInterface;
  detailLink: string;
}

interface pinedCar {
  cars: carInterface[];
  addCar: (car: carInterface) => void;
  removeCar: (car: carInterface) => void;
}

export const usePinedStore = create<pinedCar>((set) => ({
  cars: [],
  addCar: (car: carInterface) =>
    set((state) => ({ cars: [...state.cars, car] })),
  removeCar: (car: carInterface) =>
    set((state) => ({ cars: state.cars.filter((c) => c.id !== car.id) })),
}));

const CardProduct: React.FC<cardProps> = ({ data, detailLink }) => {
  const { addCar, removeCar, cars } = usePinedStore();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"warning" | "success" | "error">(
    "success"
  );
  const [description, setDescirption] = useState("");
  const pinClick = (car: carInterface) => {
    if (cars.length < 6 && !cars.includes(car)) {
      addCar(car);
    }

    if (cars.length == 6) {
      setStatus("error");
      setOpen(true);
      setDescirption("you already have 6 pined car");
    }

    if (cars.includes(car)) {
      removeCar(car);
    }

    console.log(cars);
  };

  return (
    <div className="mx-auto">
      <Toast status={status} shouldShow={open} description={description} />
      <Card maxW="lg" backgroundColor={"grey.400"} borderRadius={0}>
        <CardBody>
          <div className="w-full h-[300px] relative overflow-hidden ">
            <Image
              src={data.images[0]}
              alt="Green double couch with wooden legs"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            />
          </div>
          <Stack mt="6" spacing="3">
            <Heading fontSize={"2xl"} color={"white"}>
              {data.name}
            </Heading>
            <div className="h-[65px] overflow-y-hidden">
              <Text color="white" fontSize="small" lineHeight={6}>
                {data.description}
              </Text>
            </div>
            <Text color="white" fontSize="2xl" fontWeight={"bold"}>
              {formatter(data.price)}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <div className="space-x-4 flex items-center">
            <ButtonAppointment idCar={data.id} />
            <Link href={detailLink}>
              <Text color="white">detail</Text>
            </Link>
            <Button colorScheme="transparent" onClick={() => pinClick(data)}>
              <MdPushPin
                className={`${
                  cars.includes(data) ? "text-white" : "text-gray-500"
                } text-2xl`}
              />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardProduct;
