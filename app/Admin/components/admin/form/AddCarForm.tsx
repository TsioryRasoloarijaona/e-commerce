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

export default function AddCarForm() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const { urls } = useImageStore();
  return (
    <Box ml={56}>
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
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Description</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Brand</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Model</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Color</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>MotorType</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Power</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Place number</FormLabel>
          <Input type="number" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Status</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Price</FormLabel>
          <Input type="number" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel textColor={textColor}>Images</FormLabel>
          <InputFile />
        </FormControl>
      </Grid>
      <Button type="submit" ml={64} colorScheme="gray" size="lg">
        Add car
      </Button>
    </Box>
  );
}
