import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { carInterface } from "@/app/FrontOffice/interface/carInterface";
export default function CarInfo({car} : {car : carInterface}) {
  const select = {
    borderColor: "white",
    color: "white",
    transition: "all 1s ease-in-out",
  };
  return (
    <div>
      <Tabs color={"white"}>
        <TabList borderColor={"gray.700"} color={"gray"} fontSize={"x-small"}>
          <Tab _selected={select}>car information</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 mb-16 text-sm mt-4">
              <div className="border border-gray-700 w-fit py-2 px-5 rounded-full">
                <p>model - {car.model} </p>
              </div>
              <div className="border border-gray-700 w-fit py-2 px-5 rounded-full">
                <p>sit number - {car.placeNumber} </p>
              </div>
              <div className="border border-gray-700 w-fit py-2 px-5 rounded-full">
                <p>engine - {car.motorType} </p>
              </div>
              <div className="border border-gray-700 w-fit py-2 px-5 rounded-full">
                <p>type - {car.type} </p>
              </div>
              <div className="border border-gray-700 w-fit py-2 px-5 rounded-full">
                <p>brand - {car.brand} </p>
              </div>
            </div>

            <div className="border border-gray-700 w-fit py-2 px-5 rounded-full text-sm">
                <p className="">description - {car.description} </p>
              </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
