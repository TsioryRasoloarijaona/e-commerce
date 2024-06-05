import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,

} from "@chakra-ui/react";

export default function CarInfo() {
    
    const select = {borderColor : "white",color : "white",transition: "all 1s ease-in-out"}
  return (
    <div>
      <Tabs color={"white"}>
        <TabList borderColor={"gray.700"} color={"gray"} fontSize={"x-small"}>
          <Tab  _selected={select} >brand</Tab>
          <Tab  _selected={select}>motor</Tab>
          <Tab  _selected={select}>desciption</Tab>
          <Tab  _selected={select}>sits</Tab>
          <Tab  _selected={select}>Three</Tab>
         
        </TabList>
        <TabPanels>
          <TabPanel>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            A natus perspiciatis repudiandae illum sapiente voluptatum cupiditate ratione,
             laborum molestiae, officia impedit cum ipsa dolores laboriosam, velit et? Fugiat, ex inventore.
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            A natus perspiciatis repudiandae illum sapiente voluptatum cupiditate ratione,
             laborum molestiae, officia impedit cum ipsa dolores laboriosam, velit et? Fugiat, ex inventore.
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            A natus perspiciatis repudiandae illum sapiente voluptatum cupiditate ratione,
             laborum molestiae, officia impedit cum ipsa dolores laboriosam, velit et? Fugiat, ex inventore.</TabPanel>
          <TabPanel>motor</TabPanel>
          <TabPanel>sits</TabPanel>
          <TabPanel>three</TabPanel>
          <TabPanel>three</TabPanel>
          
        </TabPanels>
      </Tabs>
    </div>
  );
}
