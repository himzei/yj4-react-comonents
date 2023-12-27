import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function ComicContent({ comicId, path, extension, title }) {
  return (
    <>
      <Link to={`/${comicId}`} key={comicId}>
        <Box role="group" data-aos="fade-up">
          <VStack spacing={4}>
            <Box
              w="40"
              overflow={"hidden"}
              transition={"0.4s"}
              _groupHover={{
                transform: "scale(1.1)",
                boxShadow: "xl",
              }}
              h="64"
              rounded="lg"
              bg="red.500"
            >
              <Image
                h="full"
                objectFit={"cover"}
                objectPosition="center"
                src={`${path}.${extension}`}
              />
            </Box>

            <VStack alignItems={"flex-start"} w="90%" spacing={0} px="2">
              <Text
                fontWeight={"600"}
                letterSpacing={"-1px"}
                lineHeight={"20px"}
                _groupHover={{
                  color: "red.400",
                }}
              >
                {title.substr(0, 38)}
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Link>
    </>
  );
}
