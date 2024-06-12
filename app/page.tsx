import Hero from "./FrontOffice/hero/hero";
import BrandFilter from "./FrontOffice/product/list/filter/brandFilter";
import { carInterface } from "./FrontOffice/interface/carInterface";
import { getData } from "./FrontOffice/hooks/getData";
import Card from "./FrontOffice/components/card";
import { searchParamsCache } from "./FrontOffice/hooks/searchParam";
import { PopPin } from "./FrontOffice/components/popover/popPin";
async function Home({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const brandList: string[] = await getData(
    "https://e-car.onrender.com/car/brandList",
    "car"
  );
  const brandListFilter = [...brandList, "latest"];
  var car: carInterface[] = [];
  const parsedSearchParams = searchParamsCache.parse(searchParams);
  const param = {
    brand: parsedSearchParams.brand || "",
  };

  if (param.brand == "latest") {
    car = await getData(
      `https://e-car.onrender.com/car/byBrand/${param.brand}`,
      "car"
    );
  }
  if (param.brand == "latest") {
    car = await getData("https://e-car.onrender.com/car/latest", "car");
  }
  return (
    <div>
      <PopPin />
      <Hero />
      <div className=" bg-gray-950">
        <div className="sticky top-0 z-10 p-5 bg-gray-950">
          <BrandFilter list={brandListFilter} />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center mx-auto pt-7">
          {car.map((el, index) => (
            <div className="pb-3" key={index}>
              <Card detailLink={`/FrontOffice/details/${el.id}`} data={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
