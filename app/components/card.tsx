import Image from "next/image";
import Link from "next/link";
import ButtonAppointment from "./buttonClick/buttonAppointment";
import { formatter } from "../hooks/numberFormat";
import {
  Card,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  
} from "@chakra-ui/react";
import { carInterface } from "../interface/carInterface";

interface cardProps {
  data: carInterface;
  detailLink : string
}

const CardProduct: React.FC<cardProps> = ({ data , detailLink}) => {
  return (
    <div className="mx-auto">
      <Card maxW="lg" backgroundColor={"grey.400"} borderRadius={0}>
        <CardBody>
          <div className="w-full h-[300px] relative overflow-hidden ">
            <Image
              src={data.images[0]}
              alt="Green double couch with wooden legs"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            />
          </div>
          <Stack mt="6" spacing="3">
            <Heading fontSize={"2xl"} color={"white"}>
              {data.name}
            </Heading>
            <div className="h-[65px] overflow-y-hidden">
              <Text color="white" fontSize="small" lineHeight={6}>
                {data.description}
              </Text>
            </div>
            <Text color="white" fontSize="2xl" fontWeight={"bold"}>
              {formatter(data.price)}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <div className="space-x-4 flex items-center">
            <ButtonAppointment id={data.id} />
            <Link href={detailLink}>
              <Text color="white">detail</Text>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardProduct;
