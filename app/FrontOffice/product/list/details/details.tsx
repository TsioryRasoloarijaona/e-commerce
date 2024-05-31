import Nav from "@/app/FrontOffice/hero/nav";
import Image from "next/image";
import CarInfo from "./carInfo";

export default function Details() {
  return (
    <>
      <div className="h-screen overflow-y-hidden">
        <header className="bg-gray-950 p-4 flex flex-row items-center">
          <h1 className="text-white mx-auto">car name</h1>
          <Nav></Nav>
        </header>
        <div className="bg-gray-950 grid grid-cols-2 h-[95vh] w-screen">
          <div className="bg-red-500 relative w-full h-full">
            <Image
              src={
                "https://cdn.motor1.com/images/mgl/zxQBp4/s3/2024-lamborghini-revuelto-exterior.jpg"
              }
              alt="lambo"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            />
          </div>
          <div className="p-4">
            <CarInfo/>
          </div>
        </div>
      </div>
    </>
  );
}
