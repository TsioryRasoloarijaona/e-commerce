import Product from "../product";
import Nav from "../../hero/nav";
import Search from "./search";
import Filter from "./filter/filter";

export default function ProductList() {
  return (
    <div className="bg-gray-950">
      <header className="px-6 py-4 flex items-center justify-between">
        <Nav />
        <Search />
      </header>
      <div className="flex flex-row justify-center items-center gap-5 my-3 overflow-x-auto no-scrollbar">
        <Filter option="brand" />
        <Filter option="sit number" />
        <Filter option="color" />
        <Filter option="name" />
        <Filter option="motor type" />
      </div>
      <Product />
    </div>
  );
}
