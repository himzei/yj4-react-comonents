import { Box } from "@chakra-ui/react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselContainer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoPlay: true,
    swipeToSlide: true,
    nextArrow: (
      <Box
        as="div"
        position="absolute"
        transform={"translateY(-20px)"}
        rounded="full"
        w="20px"
        h="20px"
        zIndex={99}
        lineHeight="35px"
        bg="gray.900"
        border="5px"
        borderColor={"blue.500"}
        textAlign={"center"}
        _hover={{
          bg: "black",
        }}
      >
        <MdOutlineArrowForwardIos />
      </Box>
    ),
    prevArrow: (
      <Box
        as="div"
        position="absolute"
        transform={"translateY(-20px)"}
        rounded="full"
        w="20px"
        h="20px"
        zIndex={99}
        lineHeight="35px"
        bg="gray.900"
        border="5px"
        borderColor={"blue.500"}
        textAlign={"center"}
        _hover={{
          bg: "black",
        }}
      >
        <MdOutlineArrowBackIosNew />
      </Box>
    ),
  };

  return (
    <Slider {...settings}>
      {Array(18)
        .fill("")
        .map((item) => (
          <Box p="2" bg="gray.100">
            <Box w="190px" h="280px" bg="white" />
          </Box>
        ))}
    </Slider>
  );
}
