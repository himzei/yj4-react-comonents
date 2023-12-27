import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CarouselSlick() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const CarouselList = [
    {
      imageUrl:
        "https://media.contentapi.ea.com/content/dam/news/www-ea/common/ea-motive-new-title-teaser-16x9.jpg.adapt.1456w.jpg",
      title: "November 16's New Marvel",
      description: "This week's Marvel comics are filled with new beginnings.",
    },
    {
      imageUrl:
        "https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg",
      title: "최고의 마블",
      description: "This week's Marvel comics are filled with new beginnings.",
    },
    {
      imageUrl:
        "https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg",
      title: "marvel number one",
      description: "This week's Marvel comics are filled with new beginnings.",
    },
  ];

  return (
    <Box w="full" h="full" overflow={"hidden"}>
      <Slider {...settings}>
        {CarouselList.map((item) => (
          <HStack
            key={item.title}
            w="full"
            h="450px"
            justifyContent="center"
            alignItems={"center"}
            color="white"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundImage={`url('${item.imageUrl}')`}
          >
            <VStack
              spacing={8}
              w={"7xl"}
              h="full"
              mx="auto"
              alignItems={"flex-start"}
              pt="50px"
            >
              <VStack
                alignItems="flex-start"
                h="full"
                w="full"
                justifyContent="center"
              >
                <Heading
                  fontSize={{
                    sm: 20,
                    lg: 30,
                    "2xl": 40,
                  }}
                  fontWeight={700}
                >
                  {item.title}
                </Heading>
                <Text
                  fontSize={{
                    sm: 16,
                    lg: 20,
                    "2xl": 24,
                  }}
                  fontWeight={600}
                  mb={10}
                >
                  {item.description}
                </Text>
              </VStack>
            </VStack>
          </HStack>
        ))}
      </Slider>
    </Box>
  );
}
