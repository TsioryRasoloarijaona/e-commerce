import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import InputFile from "../inputFile/inputFule";
import { useImageStore } from "../inputFile/inputFule";
import { useState, ChangeEvent } from "react";

export default function AddCarForm() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const { urls } = useImageStore();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    model: "",
    color: "",
    motorType: "",
    power: "",
    placeNumber: 0,
    status: "",
    price: 0,
    type: "",
    images: [] as string[], 
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = { ...formData, status: formData.status.toLowerCase() === 'true' };
    try {
      const response = await fetch("http://localhost:8080/car/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });
      if (!response.ok) {
        throw new Error("Failed to save car");
      }
      console.log("Car saved successfully");
    } catch (error) {
      console.error("Error saving car:", error);
    }
  };

  return (
    <Box ml={56} as="form" onSubmit={handleSubmit}>
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(2, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
        mt="45px"
        w={600}
      >
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Name</FormLabel>
          <Input name="name" type="text" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Description</FormLabel>
          <Input name="description" type="text" value={formData.description} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Brand</FormLabel>
          <Input name="brand" type="text" value={formData.brand} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Model</FormLabel>
          <Input name="model" type="text" value={formData.model} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Color</FormLabel>
          <Input name="color" type="text" value={formData.color} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>MotorType</FormLabel>
          <Input name="motorType" type="text" value={formData.motorType} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Power</FormLabel>
          <Input name="power" type="text" value={formData.power} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Place number</FormLabel>
          <Input name="placeNumber" type="number" value={formData.placeNumber} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Status</FormLabel>
          <Input name="status" type="text" value={formData.status} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Price</FormLabel>
          <Input name="price" type="number" value={formData.price} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Type</FormLabel>
          <Input name="motorType" type="text" value={formData.type} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Images</FormLabel>
          <InputFile />({urls})         
        </FormControl>
      </Grid>
      <Button type="submit" ml={64} colorScheme="gray" size="lg">
        Add car
      </Button>
    </Box>
  );
}
