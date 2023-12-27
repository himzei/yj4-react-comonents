import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const GridItemList = [
  {
    title: "Customer dashboard",
    description: "iew a summary of all your customers over the last month.",
    href: "/description",
  },
  {
    title: "Customer dashboard",
    description: "iew a summary of all your customers over the last month.",
    href: "/description",
  },
  {
    title: "Customer dashboard",
    description: "iew a summary of all your customers over the last month.",
    href: "/description",
  },
];
export default function Features() {
  return (
    <Grid w="7xl" templateColumns="repeat(3, 1fr)" gap={6}>
      {GridItemList.map((item) => (
        <Card key={item.title} data-aos="fade-up">
          <CardHeader>
            <Heading size="lg">{item.title}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{item.description}</Text>
          </CardBody>
          <CardFooter>
            <Link to={item.href} aria-label={item.title}>
              <Button>View here</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </Grid>
  );
}
