import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";

export default function QueryComics() {
  const { isLoading, error, data } = useQuery(
    "comics",
    async () =>
      await fetch(
        "https://gateway.marvel.com:443/v1/public/comics?format=comic&apikey=1f2be9e5633db8ee3608691d7e342629"
      ).then((res) => res.json())
  );

  console.log(isLoading, error, data);
  return (
    <div>
      {data?.data?.results.map((list) => (
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
    </div>
  );
}
