import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
export default function CarouselMulti() {
  const { isLoading, error, data } = useQuery(
    "comics",
    async () =>
      await fetch(
        "https://gateway.marvel.com:443/v1/public/comics?format=comic&apikey=1f2be9e5633db8ee3608691d7e342629"
      ).then((res) => res.json())
  );

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={5000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {data?.data?.results?.map((list) => (
        <div key={list.id}>
          <VStack w="190px">
            <Box w="180px" h="260px" overflow={"hidden"}>
              <Image
                w="full"
                h="full"
                transform={"scale(1.2)"}
                objectFit={"cover"}
                src={`${list.thumbnail?.path}.${list.thumbnail?.extension}`}
                alt={list.title}
              />
            </Box>
            <Text w="full" align="left" px="2">
              {list.title.substr(0, 40)}
            </Text>
          </VStack>
        </div>
      ))}
    </Carousel>
  );
}
