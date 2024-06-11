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
import { useEffect, useState } from "react";
import { usePinedStore } from "../hooks/usePineStore";
import { useCountStore } from "../hooks/usePineStore";

interface cardProps {
  data: carInterface;
  detailLink: string;
}



const CardProduct: React.FC<cardProps> = ({ data, detailLink }) => {
  const { addCar, removeCar, cars } = usePinedStore((state)=> ({
    addCar : state.addCar,
    removeCar : state.removeCar,
    cars : state.cars
  }));

  const {inc , dec} = useCountStore((state)=>({
    inc : state.inc,
    dec : state.dec
  }))
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"warning" | "success" | "error">(
    "success"
  );
  const [description, setDescirption] = useState("");
  useEffect(()=>{
    console.log(cars)
  } , [cars])
  const pinClick = (car: carInterface) => {
   if ( !cars.some(c=>c.id === car.id) && cars.length < 6) {
      addCar(car);
      inc()
    }

    if (cars.length === 6 && !cars.includes(car)) {
      setStatus("error");
      setOpen(true);
      setDescirption("you already have 6 pined car");
    }

    if (cars.some(c=>c.id === car.id)) {
      removeCar(car);
      dec()
    }
   
  };

  return (
    <div className="mx-auto">
      <Toast status={status} shouldShow={open} description={description} />
      <Card maxW="md" backgroundColor={"grey.400"} borderRadius={0}>
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
                  cars.some(c=>c.id === data.id) ? "text-white" : "text-gray-500"
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
