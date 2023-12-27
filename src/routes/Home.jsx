import { Box, HStack, VStack } from "@chakra-ui/react";
import TitleImageSkew from "../components/TitleImageSkew";
import { Helmet } from "react-helmet";
import Features from "../components/Features";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Home() {
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
      {/* <Box as="div" h="450px">
        <CarouselSlick />
      </Box> */}

      {/* 3가지 특장점 */}
      {/* <HStack w="full" justifyContent="center" py="16">
        <Features />
      </HStack> */}

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
          <HStack w="full" justifyContent="center" py="16">
            <Features />
          </HStack>
        </Box>
        {/* <Box
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
        </Box> */}
      </VStack>

      <TitleImageSkew
        title="영진직업전문학교"
        description="대구국비지원 최우수훈련기관 K디지털트레이닝 빅데이터 VR/AR 앱개발 웹디자인 용접 전기 CAD/CAM 건축 세무회계 조경 패션 대구직업전문학교."
        imgUrl="https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
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
          <HStack w="full" justifyContent="center" py="16">
            <Features />
          </HStack>
        </Box>
        {/* <Box
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
        </Box> */}
      </VStack>
    </>
  );
}
