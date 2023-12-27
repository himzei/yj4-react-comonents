import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { charactersData } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import "./Paging.css";
import SkeletonPage from "../components/SkeletonPage";

export default function Characters({ numContents }) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(36);

  const { data, isLoading, refetch } = useQuery([page, limit], charactersData);
  console.log(data);
  const total = Number(data?.data?.total);
  console.log(total);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <VStack w="full">
      <Box w="full" h="64" overflow="hidden" shadow="lg">
        <Image
          w="full"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1562563436-a73bab993173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Characters image"
        />
      </Box>
      <VStack w="7xl" pb="32">
        {/* 타이틀 */}
        <HStack w="full" py="16" justifyContent="space-between">
          <Box position="relative" overflow="hidden" w="250px" h="50px">
            <Box
              position="absolute"
              top="15px"
              left="40px"
              w="100px"
              h="100px"
              borderLeft={"5px solid red"}
              transform={"translate(-30px) rotate(45deg)"}
            />
            <Box position={"absolute"} top="7px">
              <Text textTransform={"uppercase"} fontSize={24} fontWeight="600">
                Characters
              </Text>
            </Box>
          </Box>
          <Select
            placeholder="게시물 수"
            w="32"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="24">24</option>
            <option value="30">30</option>
            <option value="36">36</option>
            <option value="42">42</option>
            <option value="48">48</option>
          </Select>
        </HStack>
        {/*  */}
        <Grid templateColumns={"repeat(6, 1fr)"} w="full" gap="4" rowGap={8}>
          {isLoading ? (
            <SkeletonPage num={limit} column={6} width="190px" height="320px" />
          ) : null}
          {data?.data.results.map((item, index) => (
            <Link to={`/characters/${item.id}`} key={index}>
              <GridItem bg="red" w="full" role="group">
                <VStack h="auto">
                  <Box w="full" h="48" overflow={"hidden"}>
                    <Image
                      transition="0.4s"
                      _groupHover={{
                        transform: "scale(1.2)",
                      }}
                      w="full"
                      h="48"
                      objectFit={"cover"}
                      objectPosition="center"
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    />
                  </Box>
                  <Box
                    w="full"
                    h="36"
                    py={4}
                    px={6}
                    position="relative"
                    overflow={"hidden"}
                    // 컷팅
                  >
                    <Box
                      bg="gray.800"
                      position="absolute"
                      w="full"
                      h="full"
                      top="0"
                      left="0"
                      transition="0.4s"
                      _groupHover={{
                        top: "160px",
                      }}
                    />
                    <Box
                      position="absolute"
                      bottom={-5}
                      right={-5}
                      w="30px"
                      h="30px"
                      bg="white"
                      transform={"rotate(45deg) scale(2)"}
                    />
                    <Text
                      fontSize={14}
                      position="absolute"
                      color="gray.100"
                      fontWeight={600}
                      textTransform="uppercase"
                    >
                      {item.name}
                    </Text>
                  </Box>
                </VStack>
              </GridItem>
            </Link>
          ))}
        </Grid>
        <Box>
          <Pagination
            activePage={page}
            itemsCountPerPage={limit}
            totalItemsCount={total}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </Box>
      </VStack>
    </VStack>
  );
}
