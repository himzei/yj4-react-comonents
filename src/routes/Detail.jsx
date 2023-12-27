import {
  Image,
  Text,
  VStack,
  Box,
  HStack,
  Grid,
  GridItem,
  Avatar,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { detail, detailCharacters } from "../api";
import { useQuery } from "react-query";
export default function Detail() {
  const { id } = useParams();

  const { data } = useQuery(["Detail", id], detail);
  console.log(data);
  const { data: dataCharacter } = useQuery(
    ["DetailCharacter", id],
    detailCharacters
  );
  return (
    <>
      <Box>
        <VStack
          w="full"
          h="650px"
          backgroundImage={`url(${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension})`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition={"center"}
          backdropBlur="50px"
          position="relative"
          justifyContent="center"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            bg="rgba(0, 0, 0, 0.85)"
            display={"flex"}
            justifyContent="center"
            py={10}
          />
          <Box
            w="6xl"
            h="500px"
            zIndex={99}
            overflow="hidden"
            transform={"translateY(20px)"}
          >
            <Grid templateColumns={"350px 1fr"} gap={12}>
              <GridItem>
                <Box w="full" h="450px">
                  <Image
                    zIndex={2}
                    src={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`}
                  />
                </Box>
              </GridItem>
              <GridItem>
                <VStack
                  h="450px"
                  alignItems={"flex-start"}
                  justifyContent="flex-start"
                  spacing={8}
                >
                  <Text
                    zIndex={2}
                    color="gray.100"
                    fontWeight={600}
                    fontSize="2xl"
                  >
                    {data?.data?.results[0].title}
                  </Text>
                  <Text color="gray.200">
                    {data?.data?.results[0].description.substr(0, 400)}
                  </Text>
                  <VStack w="full" alignItems={"flex-start"} spacing={0}>
                    <Text color="gray.100" fontWeight={600} fontSize="xl">
                      Published
                    </Text>
                    <Text color="rgba(255, 255, 255, 0.7)" fontSize={18}>
                      {data?.data?.results[0].modified.substr(0, 10)}
                    </Text>
                  </VStack>
                  <VStack w="full" alignItems={"flex-start"} spacing={4}>
                    <Text color="gray.200" fontWeight={600} fontSize="xl">
                      Creator
                    </Text>
                    <VStack alignItems={"flex-start"} spacing={3}>
                      {data?.data?.results[0].characters.items.map(
                        (item, index) => {
                          if (index < 6) {
                            return (
                              <HStack key={index}>
                                <Avatar w="8" h="8" name={item.name} />
                                <Text color="gray.200">{item.name}</Text>
                              </HStack>
                            );
                          }
                          return null;
                        }
                      )}
                    </VStack>
                  </VStack>
                </VStack>
              </GridItem>
            </Grid>
          </Box>
        </VStack>

        <VStack w="full" h="auto" bg="gray.700" alignItems="center" py={16}>
          <VStack w="6xl" alignItems={"flex-start"}>
            <Text
              color="gray.100"
              textTransform={"uppercase"}
              fontSize={24}
              fontWeight="600"
              mb="4"
            >
              the Characters
            </Text>

            <HStack
              spacing={4}
              alignItems={"flex-start"}
              w="full"
              flexWrap={"wrap"}
            >
              {dataCharacter?.data?.results.map((item, index) => (
                <VStack justifyContent={"flex-start"} key={index}>
                  <Box w="24" h="24" overflow={"hidden"} rounded="full">
                    <Image
                      w="24"
                      h="24"
                      objectFit={"cover"}
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    />
                  </Box>
                  <Text w="24" color="gray.100" textAlign={"center"}>
                    {item.name}
                  </Text>
                </VStack>
              ))}
            </HStack>
          </VStack>
        </VStack>

        <VStack w="full" h="auto" bg="gray.700" alignItems={"center"} py={16}>
          <VStack w="6xl" alignItems={"flex-start"}>
            <Text
              color="gray.100"
              textTransform={"uppercase"}
              fontSize={24}
              fontWeight="600"
              mb="4"
            >
              the Stories
            </Text>
            <VStack spacing={4} alignItems="flex-start">
              {data?.data?.results[0].stories.items.map((item, index) => (
                <VStack alignItems={"flex-stat"} spacing={0} key={index}>
                  <Text fontWeight={600} color="gray.100">
                    {item.name}
                  </Text>
                  <Text color="gray.300">{item.resourceURI}</Text>
                </VStack>
              ))}
            </VStack>
          </VStack>
        </VStack>

        <VStack w="full" h="auto" bg="gray.700" alignItems={"center"} py={16}>
          <VStack w="6xl" alignItems={"flex-start"}>
            <Text
              color="gray.100"
              textTransform={"uppercase"}
              fontSize={24}
              fontWeight="600"
              mb="4"
            >
              the Images
            </Text>
            <HStack spacing={4} alignItems="flex-start">
              {data?.data?.results[0].images.map((item, index) => (
                <Box w={40} key={index}>
                  {index > 5 ? null : (
                    <Image src={`${item.path}.${item.extension}`} />
                  )}
                </Box>
              ))}
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </>
  );
}
