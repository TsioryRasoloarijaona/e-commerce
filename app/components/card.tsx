import Image from "next/image";
import Link from "next/link";
import ButtonAppointment from "./buttonClick/buttonAppointment";
import {
  Card,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";

interface cardProps {
  imgURL: string;
  carName: string;
  description: string;
  price: number;
  detailLink: string;
  id: number
}

const CardProduct: React.FC<cardProps> = ({
  imgURL,
  carName,
  description,
  price,
  detailLink,
  id
}) => {
  return (
    <div>
      <Card maxW="lg" backgroundColor={"grey.400"} borderRadius={0}>
        <CardBody>
          <div className="max-w-[700px] h-[300px] overflow-hidden">
            <Image
              src={imgURL}
              alt="Green double couch with wooden legs"
              width={600}
              height={300}
              className="object-contain w-full h-full"
            />
          </div>
          <Stack mt="6" spacing="3">
            <Heading fontSize={"2xl"} color={"white"}>
              {carName}
            </Heading>
            <div className="h-[65px] overflow-y-hidden">
              <Text color="white" fontSize="small" lineHeight={6}>
                {description}
              </Text>
            </div>
            <Text color="white" fontSize="2xl" fontWeight={"bold"}>
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <div className="space-x-4 flex items-center">
            <ButtonAppointment id={id}/>
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
