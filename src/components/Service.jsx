import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import twtwtw2 from "@assets/twtwtw2.jpg";

export default function Simple() {
  return (
    <Container maxW={"100%"} my={"200px"}>
      <Flex gap={"30px"}>
        <Image
          rounded={"xl"}
          alt={"product image"}
          src={twtwtw2}
          fit={"contain"}
          align={"center"}
          w={"100%"}
          h={{ base: "150px", sm: "200px", lg: "400px" }}
        />

        <Stack spacing={{ base: 4, md: 8 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              align={"center"}
            >
              두 유 노우 조율해
              <Text as={"span"} color={"green.400"}>
                DAO
              </Text>
              ?
            </Heading>
            {/* <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              1 / 2 / 3 eth
            </Text> */}
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                조별 모임 참여 시 중요 고려 요소
                <br />
                모임 일정 29.1% & 모임 횟수 18.3%
              </Text>
              <Text fontSize={"lg"} maxW={"90%"} lineHeight={"180%"}>
                조율해 DAO는 블록체인 기술을 활용하여, 팀 프로젝트의 시작부터
                마무리까지 의사소통과 기여도의 투명성을 제공하기 위해
                탄생하였습니다. 팀 프로젝트를 성공적으로 마무리 할 수 있도록
                기여한 참여자들은 공정하게 배분된 토큰을 가질 수 있습니다.
              </Text>
              {/* 저희 서비스는 블록체인 기술을 활용하여 팀 프로젝트 과정 중
              발생하는 문제 해결에 도움을 주어, 대학생 여러분들의 평화로운
              팀플을 돕는 것을 목표로 합니다. */}
            </VStack>
            <Box ml={"20px"}>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={"orange.500"}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"1"}
              >
                특성
              </Text>

              <Flex direction={"column"} lineHeight={"30px"}>
                <span>
                  토큰 민팅 기능을 제공하여 구성원들의 합의를 통한 최대 토큰
                  설정
                </span>
                <span>
                  예치금을 받고 팀플 완료 후 토큰의 최종 보유량에 따라 분배
                </span>
                <span>참여자 간 합의를 통해 토큰 거래 혹은 송수신 가능</span>
                <span>
                  조별과제 활동에 참여한 모든 활동 시간들을 공개 기록하여 확인
                  가능
                </span>
              </Flex>
            </Box>
            <Box ml={"20px"}>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={"orange.500"}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"1"}
              >
                상세
              </Text>

              <Flex direction={"column"} lineHeight={"30px"}>
                <span>
                  조직의 자발적 합의를 통한 알고리즘 설정을 통해 불필요한 갈등
                  완화
                </span>
                <span>기여도에 따른 차별화된 보상으로 적극적인 참여 유도</span>
                <span>공개된 기록을 통한 패널티 부과로 신뢰 형성</span>
                <span>스마트 컨트렉트를 통한 강제 벌금 청산</span>
              </Flex>
            </Box>
          </Stack>

          {/* <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack> */}
        </Stack>
      </Flex>
    </Container>
  );
}
