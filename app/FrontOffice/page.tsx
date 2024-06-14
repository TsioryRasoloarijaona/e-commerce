import Nav from "./hero/nav";
import Search from "./product/list/filter/search";
import { getData } from "@/app/FrontOffice/hooks/getData";
import {
  carInterface,
  content,
} from "@/app/FrontOffice/interface/carInterface";
import CardProduct from "@/app/FrontOffice/components/card";
import FilterList from "./product/list/filter/filterList";
import { searchParamsCache } from "@/app/FrontOffice/hooks/searchParam";
import { Toast } from "@/app/FrontOffice/components/toastComponent";
import { PopPin } from "./components/popover/popPin";
import Pagination from "./components/pagination";
import Footer from "./components/footer";

export default async function ProductList({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  var cars: carInterface[] | null = [];
  const carPages: number = await getData(
    "https://e-car.onrender.com/car/totalPage",
    "car"
  );
  let show = false;
  const parsedSearchParams = searchParamsCache.parse(searchParams);
  const key = {
    type: parsedSearchParams.type || "",
    motor: parsedSearchParams.motor || "",
    research: parsedSearchParams.research || "",
    interval: parsedSearchParams.interval || [],
    page: parsedSearchParams.page || 0,
  };

  if (
    key.type.length !== 0 &&
    key.motor.length !== 0 &&
    key.interval.length == 2
  ) {
    cars = await getData(
      `https://e-car.onrender.com/car/motor/type/price?&motorType=${key.motor}&type=${key.type}&priceMin=${key.interval[0]}&priceMax=${key.interval[1]}`,
      "car"
    );
    cars?.length == 0 ? (show = true) : (show = false);
  }
  if (key.research.length > 0) {
    cars = await getData(
      `https://e-car.onrender.com/car/research?&input=${key.research}`,
      "car"
    );
    cars?.length == 0 ? (show = true) : (show = false);
  }
  if (cars?.length == 0) {
    cars = await getData(
      `https://e-car.onrender.com/car/page/${key.page}`,
      "car"
    );
  }

  return (
    <>
      <div className="bg-gray-950">
        <PopPin />
        <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-10 bg-gray-950">
          <Nav />

          <Search />
        </header>

        <FilterList />

        <Toast
          shouldShow={show}
          description="no matching items"
          status="warning"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center mx-auto bg-gray-950 pt-7">
          {cars?.map((el, index) => (
            <div key={index}>
              <CardProduct
                detailLink={`/FrontOffice/details/${el.id}`}
                data={el}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center py-6">
          <Pagination page={carPages} />
        </div>
      </div>
      <Footer />
    </>
  );
}
