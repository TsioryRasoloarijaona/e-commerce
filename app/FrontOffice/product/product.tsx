import Card from "../../components/card";
import { getData } from "@/app/hooks/getData";
import { carInterface } from "@/app/interface/carInterface";
export default async function Product() {
  const car: carInterface[] = await getData("http://localhost:8080/car/pined");

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center mx-auto bg-gray-950 pt-7">
      {car.map((el) => (
        <div>
          <Card
            detailLink="/FrontOffice/product/list/details"
            key={el.id}
            data={el}
          />
        </div>
      ))}
    </div>
  );
}
