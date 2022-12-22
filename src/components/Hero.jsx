import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Image,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import twtwtw6 from "@assets/twtwtw6.png";
import noExit from "@assets/noExit.png";
import { BiGlasses } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import { SlMagicWand } from "react-icons/sl";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        justify={"center"}
        h={"100vh"}
      >
        <Flex
          fontWeight={800}
          fontSize={{ base: "5xl", sm: "6xl", md: "7xl" }}
          lineHeight={"110%"}
          direction={"row"}
          align={"center"}
        >
          <p>조율해</p>
          <Image
            rounded={"md"}
            src={noExit}
            w="80px"
            maxH="80px"
            objectFit={"cover"}
            mx={"10px"}
          />
          <Text as={"span"} color={"green.400"}>
            DAO
          </Text>
        </Flex>
        <Text
          fontSize={"xl"}
          color={"gray.500"}
          maxW={"5xl"}
          lineHeight={"180%"}
        >
          조별과제, 피할 수도 없고 즐길 수도 없다. <br /> 그래도 해내야 한다면?{" "}
          <br />
          조율해 DAO로 우리 팀과 인류애를 지키자!
        </Text>
      </Stack>
      <Flex
        direction={"row"}
        gap={10}
        justify={"center"}
        align={"center"}
        my={"100px"}
      >
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            이거슨 비단 남의 일이 아닙니다
          </Text>
          <Heading>
            분명 당신도 겪었을 일이고, <br /> 아패로도 계속 겪게 될 일
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"} align={"center"}>
            아무래도 부담스러운 조별과제. <br />
            만약 이런 팀원들과 함께라면?
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={RiLeafLine} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"1) 자연인 형: 사라지지 않는 카톡의 1"}
            />
            <Feature
              icon={
                <Icon as={AiOutlineFieldTime} color={"blue.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("blue.100", "blue.900")}
              text={'2) 시간여행자 형: "앗 우리 회의 내일 아니었나요?"'}
            />
            <Feature
              icon={<Icon as={SlMagicWand} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={'3) 엔딩요정 형: (아무말 없다가) "이제 집에 가도 되나요?"'}
            />
            <Feature
              icon={<Icon as={BiGlasses} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"4) 내 이름은 코난 형: 끊이지 않는 주변의 사건사고"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            src={twtwtw6}
            mt={"20px"}
            w="400px"
            maxH="700px"
            objectFit={"cover"}
          />
        </Flex>
      </Flex>
    </Container>
  );
}

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};
