"use client";

import { useState } from "react";
import { parseAsInteger, useQueryState } from "nuqs";
export default function Pagination({ page }: { page: number }) {
  const [active, setActive] = useState<number>(1);
const [pagination , setPagination] = useQueryState<number>('page'  ,parseAsInteger.withDefault(0).withOptions({shallow : false}))
  const pageList: number[] = [];

  for (let i = 1; i <= page; i++) {
    pageList.push(i);

  }

  console.log(pageList);

  const click = (index: number) => {
    setActive(index);
    setPagination(index - 1)
  };
  return (
    <div className="w-fit flex items-center">
      {pageList.map((el) => (
        <div
          className={`${
            active === el ? "border border-white" : ""
          }  px-3 py-1 cursor-pointer text-white`}
          onClick={() => click(el)}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
