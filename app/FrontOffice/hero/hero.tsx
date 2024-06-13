import Nav from "./nav";
import { getData } from "../hooks/getData";
import { carInterface } from "../interface/carInterface";

import CarShow from "./carShow";
export default async function Hero() {
  const  car : carInterface[]= await getData("https://e-car.onrender.com/car/show", "car");

  return (
    <>
      <div className="absolute top-2 left-3 z-20">
        <Nav></Nav>
      </div>
      <CarShow car={car}/>
    </>
  );
}
