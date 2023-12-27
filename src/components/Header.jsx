import {
  Stack,
  HStack,
  Text,
  Box,
  Image,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Header() {
  const GNB = [
    { href: "/", text: "home", ariaLabel: "Home" },
    { href: "/characters", text: "characters", ariaLabel: "Character" },
    { href: "/comics", text: "Comics", ariaLabel: "Comics" },
    { href: "/events", text: "Events", ariaLabel: "Events" },
  ];
  const { colorMode, toggleColorMode } = useColorMode();
  const [scroll, setScroll] = useState(true);
  const [winScroll, setWinScroll] = useState(true);

  useEffect(() => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        // console.log(event.deltaY);
        setScroll(true);
      } else if (event.deltaY > 0) {
        // console.log(event.deltaY);
        setScroll(false);
      }
      if (window.scrollY < 80) {
        setWinScroll(true);
      } else if (window.scrollY > 80) {
        setWinScroll(false);
      }
    });
  });
  return (
    <Stack
      transform={scroll ? "translateY(0px)" : "translateY(-60px)"}
      transition="0.4s"
      zIndex={999}
      w="100%"
      h="60px"
      color="white"
      fontWeight={"600"}
      fontSize={"sm"}
      alignItems={"center"}
      justifyContent={"center"}
      boxShadow="sm"
      bg={winScroll ? "transparent" : "gray.800"}
      position="fixed"
    >
      <HStack
        w={{ md: "3xl", lg: "5xl", xl: "7xl" }}
        justifyContent={"space-between"}
      >
        <HStack
          spacing={"8"}
          fontWeight="600"
          fontSize={16}
          textTransform="uppercase"
        >
          <Link to="/">
            <Box w="24">
              <Image src="https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png" />
            </Box>
          </Link>
          <HStack spacing="4">
            {GNB.map((item) => (
              <div key={item.href}>
                <Link to={item.href} aria-label={item.ariaLabel}>
                  <Text>{item.text}</Text>
                </Link>
              </div>
            ))}
          </HStack>
        </HStack>
        <HStack>
          <IconButton
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle dxark mode"
            icon={
              colorMode === "light" ? (
                <BsFillSunFill color="white" />
              ) : (
                <BsFillMoonFill color="white" />
              )
            }
          />
        </HStack>
      </HStack>
    </Stack>
  );
}
