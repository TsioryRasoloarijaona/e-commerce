import Nav from "@/app/FrontOffice/hero/nav";
import CarInfo from "../carInfo";
import { Heading } from "@chakra-ui/react";
import ButtonAppointment from "@/app/FrontOffice/components/buttonClick/buttonAppointment";
import { SwipperComponent } from "@/app/FrontOffice/components/swipper";
import { carInterface } from "@/app/FrontOffice/interface/carInterface";
import { getData } from "@/app/FrontOffice/hooks/getData";

export default async function Page({ params }: { params: { id: number } }) {
  const car: carInterface = await getData(
    `https://e-car.onrender.com/car/byId/${params.id}` , 'car'
  );
  return (
    <>
      <div className="lg:h-screen h-fit overflow-y-hidden">
        <header className="bg-gray-950 p-4 flex flex-row items-center">
          <Nav></Nav>
          <Heading className="text-white mx-auto" size={"xl"}>
            {car.name}
          </Heading>
        </header>
        <div className="bg-gray-950 grid lg:grid-cols-2 grid-cols-1 lg:h-[95vh] h-fit w-screen">
          <div className="p-3">
            <SwipperComponent urls={car.images} />
          </div>

          <div className="px-7 py-4 lg:h-full h-fit">
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
