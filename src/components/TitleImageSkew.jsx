import { Box, HStack, Text, VStack, Image, Button } from "@chakra-ui/react";
import { BsBoxArrowInRight } from "react-icons/bs";

export default function TitleImageSkew({ title, description, imgUrl }) {
  return (
    <HStack
      w="full"
      h="400px"
      bg="gray.800"
      overflow={"hidden"}
      position="relative"
    >
      <Box w="50%" h="full">
        <Box
          bg="gray.800"
          w="full"
          h="full"
          transform={
            "rotate(-10deg) scale(1.4) translateX(-100px) translateY(40px)"
          }
        />
      </Box>
      <Box w="50%" h="full">
        <Image
          w="full"
          h="full"
          src={imgUrl}
          objectFit="cover"
          objectPosition={"center"}
        />
      </Box>
      <VStack
        position="absolute"
        color="white"
        top="0"
        left="0"
        w="full"
        h="full"
        justifyContent="center"
      >
        <VStack
          w="7xl"
          h="full"
          justifyContent="center"
          alignItems="flex-start"
          transform="translateY(-20px)"
        >
          <Text fontWeight={700} fontSize="32">
            {title}
          </Text>
          <Text w="2xl" fontSize="18">
            {description}
          </Text>
          <Button
            mt="6"
            rightIcon={<BsBoxArrowInRight />}
            textTransform={"uppercase"}
            variant="outline"
            colorScheme={"red"}
            aria-label={title}
          >
            List More
          </Button>
        </VStack>
      </VStack>
    </HStack>
  );
}
