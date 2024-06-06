import Nav from "@/app/FrontOffice/hero/nav";
import CarInfo from "../carInfo";
import { Heading } from "@chakra-ui/react";
import ButtonAppointment from "@/app/components/buttonClick/buttonAppointment";
import { SwipperComponent } from "@/app/components/swipper";
import { carInterface } from "@/app/interface/carInterface";
import { getData } from "@/app/hooks/getData";

export default async function Page({ params }: { params: { id: number } }) {
  const car: carInterface = await getData(
    `http://localhost:8080/car/byId/${params.id}` , 'car'
  );
  return (
    <>
      <div className="h-screen overflow-y-hidden">
        <header className="bg-gray-950 p-4 flex flex-row items-center">
          <Nav></Nav>
          <Heading className="text-white mx-auto" size={"xl"}>
            {car.name}
          </Heading>
        </header>
        <div className="bg-gray-950 grid grid-cols-2 h-[95vh] w-screen">
          <div className="p-3">
            <SwipperComponent urls={car.images} />
          </div>

          <div className="px-7 py-4">
            <div className="h-3/4">
              <CarInfo car={car} />
            </div>
            <div className="py-3 px-7">
              <ButtonAppointment idCar={params.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
