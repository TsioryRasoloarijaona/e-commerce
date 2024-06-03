import Product from "../product";
import Nav from "../../hero/nav";
import Search from "./search";
import Filter from "./filter/filter";
import { getData } from "@/app/hooks/getData";

export default async function ProductList() {
const brand : string[] = await getData("http://localhost:8080/car/brandList")
const color : string[] = await getData("http://localhost:8080/car/colorList")
const name : string[] = await getData("http://localhost:8080/car/nameList")
const motor : string[] = await getData("http://localhost:8080/car/motorList")


  return (
    <div className="bg-gray-950">
      <header className="px-6 py-4 flex items-center justify-between">
        <Nav />
        <Search />
      </header>
      <div className="flex flex-row justify-center items-center gap-5 my-3 overflow-x-auto no-scrollbar">
        <Filter option="brand" menu={brand}/>
        <Filter option="color" menu={color}/>
        <Filter option="name" menu={name}/>
        <Filter option="motor type" menu={motor}/>
      </div>
      <Product />
    </div>
  );
}
