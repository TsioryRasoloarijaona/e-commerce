import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { carInterface } from "@/app/interface/carInterface";
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
            <div className="grid grid-cols-3 gap-6 mb-16 text-sm mt-4">
              <div className="border border-gray-700 w-fit py-2 px-5 rounded-2xl">
                <p>model - {car.model} </p>
              </div>
              <div className="border border-gray-700 w-fit py-2 px-5 rounded-2xl">
                <p>sit number - {car.placeNumber} </p>
              </div>
              <div className="border border-gray-700 w-fit py-2 px-5 rounded-2xl">
                <p>engine - {car.motorType} </p>
              </div>
              <div className="border border-gray-700 w-fit py-2 px-5 rounded-2xl">
                <p>type - {car.type} </p>
              </div>
              <div className="border border-gray-700 w-fit py-2 px-5 rounded-2xl">
                <p>brand - {car.brand} </p>
              </div>
            </div>

            <div className="border border-gray-700 w-fit py-2 px-5 rounded-2xl text-sm">
                <p className="leading-9">description - {car.description} </p>
              </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
