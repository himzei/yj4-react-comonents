import { Box, HStack, VStack } from "@chakra-ui/react";
import CarouselSlick from "../components/CarouselSlick";
import TitleImageSkew from "../components/TitleImageSkew";
import { Helmet } from "react-helmet";
import Features from "../components/Features";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { settingsComic } from "../lib/slideSettings";
import ComicContent from "../components/ComicContent";
import AOS from "aos";
import "aos/dist/aos.css";
import SkeletonPage from "../components/SkeletonPage";

AOS.init();

export default function Home() {
  const { isLoading, data } = useQuery(
    "comics",
    async () =>
      await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?format=comic&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
      ).then((res) => res.json())
  );
  console.log(isLoading);
  return (
    <>
      {/* SEO 최적화를 위한 react-helmet 설정 */}
      <Helmet>
        <title>마블웹앱</title>
        <meta
          name="description"
          content="영진직업전문학교 마블 API를 활용한 웹앱"
        />
      </Helmet>

      {/* 캐러셀 슬라이드  */}
      <Box as="div" h="450px">
        <CarouselSlick />
      </Box>

      {/* 3가지 특장점 */}
      <HStack w="full" justifyContent="center" py="16">
        <Features />
      </HStack>

      {/* 기울어지 이미지 타이틀 */}
      <TitleImageSkew
        title="Comics"
        description="“LONG SHADOW” Concludes! The battle for Wakanda comes to a head! T’Challa has owned the path his secrets paved for the Hatut Zeraze’s takeover"
        imgUrl="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
      />

      {/* 캐러셀 컨테이너 */}
      <VStack w="full" position="relative" h="400px">
        <Box
          w="7xl"
          h="full"
          py={8}
          px={4}
          position={"absolute"}
          top={-16}
          zIndex={99}
          bg="white"
        >
          {isLoading && <SkeletonPage num={7} column={7} />}

          {/* Comics 데이터 */}
          <Slider {...settingsComic}>
            {data?.data?.results.map((item) => (
              <>
                <ComicContent
                  num={4}
                  isLoading={isLoading}
                  key={item.id}
                  comicId={item.id}
                  path={item.thumbnail.path}
                  extension={item.thumbnail.extension}
                  title={item.title}
                  modified={item.modified}
                />
              </>
            ))}
          </Slider>
        </Box>
      </VStack>
      <TitleImageSkew
        title="Comics"
        description="“LONG SHADOW” Concludes! The battle for Wakanda comes to a head! T’Challa has owned the path his secrets paved for the Hatut Zeraze’s takeover"
        imgUrl="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
      />
    </>
  );
}
