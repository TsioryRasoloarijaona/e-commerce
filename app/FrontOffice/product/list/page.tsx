import Nav from "../../hero/nav";
import Search from "./filter/search";
import { getData } from "@/app/hooks/getData";
import { carInterface } from "@/app/interface/carInterface";
import CardProduct from "@/app/components/card";
import FilterList from "./filter/filterList";
import { searchParamsCache } from "@/app/hooks/searchParam";
import { Toast } from "@/app/components/toastComponent";


export default async function ProductList({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  var cars: carInterface[] | null = [];
  let show = false
  const parsedSearchParams = searchParamsCache.parse(searchParams);
  const key = {
    type: parsedSearchParams.type || "",
    motor: parsedSearchParams.motor || "",
    research: parsedSearchParams.research || "",
    interval: parsedSearchParams.interval || [],
  };

  if (key.type.length !== 0 && key.motor.length !== 0 && key.interval.length == 2) {
    cars = await getData(
      `http://localhost:8080/car/motor/type/price?&motorType=${
        key.motor
      }&type=${key.type}&priceMin=${key.interval[0]}&priceMax=${key.interval[1]}` , 'car'
    );
    (cars?.length == 0 ? show = true : show = false)
  
  }
  if (key.research.length > 0) {
    cars = await getData(
      `http://localhost:8080/car/research?&input=${key.research}` , 'car'
    );
    (cars?.length == 0 ? show = true : show = false)
  }
  if (cars?.length == 0) {
    cars = await getData("http://localhost:8080/car/allCar" , 'car');
    
  }

  return (
    <div className="bg-gray-950">
      <header className="px-6 py-4 flex items-center justify-between ">
        <Nav/>
        <Search />
      </header>

      <FilterList />
      <Toast shouldShow={show} description="no matching items" status="warning"/>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center mx-auto bg-gray-950 pt-7">
        {cars?.map((el) => (
          <div>
            <CardProduct
              detailLink={`/FrontOffice/product/details/${el.id}`}
              key={el.id}
              data={el}
            />
            <p className="text-white">{key.interval[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
