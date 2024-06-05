import Nav from "@/app/FrontOffice/hero/nav";
import Image from "next/image";
import CarInfo from "./carInfo";
import { Heading } from "@chakra-ui/react";
import ButtonAppointment from "@/app/components/buttonClick/buttonAppointment";
import { SwipperComponent } from "@/app/components/swipper";

export default function Details() {
  return (
    <>
      <div className="h-screen overflow-y-hidden">
        <header className="bg-gray-950 p-4 flex flex-row items-center">
          <Nav></Nav>
          <Heading className="text-white mx-auto" size={"xl"}>
            ferrarri
          </Heading>
        </header>
        <div className="bg-gray-950 grid grid-cols-2 h-[95vh] w-screen">
          <div className="p-3">
            <SwipperComponent />
          </div>

          <div className="px-7 py-4 w-">
            <div className="h-3/4">
              <CarInfo />
            </div>
            <div className="py-3">
              <ButtonAppointment idCar={1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
