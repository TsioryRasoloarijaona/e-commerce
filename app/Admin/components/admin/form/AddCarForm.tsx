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
import { useForm } from "react-hook-form";
import { carInterface } from "@/app/FrontOffice/interface/carInterface";
import { postData } from "@/app/FrontOffice/hooks/postData";
import { message } from "@/app/FrontOffice/interface/message";
import dataRevalidation from "@/app/FrontOffice/hooks/dataRevalidation";

export default function AddCarForm() {
  const { urls } = useImageStore((state) => ({
    urls: state.urls,
  }));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<carInterface>();
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const onClick = async (data: carInterface) => {
    const car: carInterface = { ...data, images: urls };
    const response: message = await postData(
      "http://localhost:8080/car/save",
      car
    );
    alert(response.success);
    reset();
    dataRevalidation("car");
  };

  return (
    <Box ml={56}>
      <InputFile />
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(2, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
        mt="45px"
        w={600}
      >
        <form action="" className="text-black" onSubmit={handleSubmit(onClick)}>
          <FormControl isRequired>
            <FormLabel textColor={textColor}>Name</FormLabel>
            <Input type="text" {...register("name", { required: true })} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel textColor={textColor}>Description</FormLabel>
            <Input
              type="text"
              {...register("description", { required: true })}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel textColor={textColor}>Brand</FormLabel>
            <Input type="text" {...register("brand", { required: true })} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel textColor={textColor}>Model</FormLabel>
            <Input type="text" {...register("model", { required: true })} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel textColor={textColor}>type</FormLabel>
            <Input type="text" {...register("type", { required: true })} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel textColor={textColor}>Color</FormLabel>
            <Input type="text" {...register("color", { required: true })} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel textColor={textColor}>MotorType</FormLabel>
            <Input type="text" {...register("motorType", { required: true })} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel textColor={textColor}>Place number</FormLabel>
            <Input
              type="number"
              {...register("placeNumber", { required: true })}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel textColor={textColor}>Price</FormLabel>
            <Input type="number" {...register("price", { required: true })} />
          </FormControl>
          <Button
            type="submit"
            ml={64}
            colorScheme="gray"
            size="lg"
            marginBlockStart={3}
          >
            Add car
          </Button>
        </form>
      </Grid>
    </Box>
  );
}
