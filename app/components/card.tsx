import Image from "next/image";
import Link from "next/link";
import {
  Card,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
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
}

const CardProduct: React.FC<cardProps> = ({
  imgURL,
  carName,
  description,
  price,
  detailLink,
}) => {
  return (
    <div>
      <Card maxW="lg">
        <CardBody>
          <Image
            src={imgURL}
            alt="Green double couch with wooden legs"
            width={700}
            height={600}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{carName}</Heading>
            <Text>{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <div className="space-x-4">
            <button className="text-white bg-black px-4 py-2 rounded-sm">
              appointement
            </button>
           
              <Link href={detailLink} className="text-sky-700">
                details
              </Link>
           
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardProduct;
