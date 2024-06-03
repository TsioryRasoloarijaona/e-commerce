import Nav from "../../hero/nav";
import Search from "./search";
import { getData } from "@/app/hooks/getData";
import { carInterface } from "@/app/interface/carInterface";
import CardProduct from "@/app/components/card";
import FilterList from "./filter/filterList";
import { createSearchParamsCache, parseAsString } from "nuqs/server";


export const searchParamsCache = createSearchParamsCache({
  research: parseAsString.withDefault(""),
  brand: parseAsString.withDefault(""),
  color: parseAsString.withDefault(""),
  name: parseAsString.withDefault(""),
  motor: parseAsString.withDefault(""),
});

export default async function ProductList({
  searchParams
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const cars: carInterface[] = await getData(
    "http://localhost:8080/car/allCar"
  );

  const {} = searchParamsCache.parse(searchParams)

  const key : string = searchParamsCache.get('brand')+
                        " "+searchParamsCache.get('color');
                        " "+searchParamsCache.get('name');
                      
  
  const carSearch : carInterface[] = await getData(`http://localhost:8080/car/research?input=${key}`)

  return (
    <div className="bg-gray-950">
      <header className="px-6 py-4 flex items-center justify-between">
        <Nav />
        <Search />
      </header>
      <FilterList />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center mx-auto bg-gray-950 pt-7">
        {carSearch?.map((el) => (
          <div>
            <CardProduct
              detailLink={"/FrontOffice/product/list/details"}
              key={el.id}
              data={el}
            />
           
          </div>
        ))}
      </div>
    </div>
  );
}
