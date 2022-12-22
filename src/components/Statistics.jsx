import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

// import { BsPerson } from "react-icons/bs";
// import { FiServer } from "react-icons/fi";

// function StatsCard(props) {
//   const { title, stat, icon } = props;
//   return (
//     <Stat
//       px={{ base: 2, md: 4 }}
//       py={"5"}
//       shadow={"xl"}
//       border={"1px solid"}
//       borderColor={useColorModeValue("gray.800", "gray.500")}
//       rounded={"lg"}
//     >
//       <Flex justifyContent={"space-between"}>
//         <Box pl={{ base: 2, md: 4 }}>
//           <StatLabel fontWeight={"medium"} isTruncated>
//             {title}
//           </StatLabel>
//           <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
//             {stat}
//           </StatNumber>
//         </Box>
//         <Box my={"auto"} color={"green.400"} alignContent={"center"}>
//           {icon}
//         </Box>
//       </Flex>
//     </Stat>
//   );
// }

export default function BasicStatistics() {
  return (
    <Box
      maxW="7xl"
      my={"100px"}
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
    >
      <chakra.h1
        textAlign={"center"}
        fontSize={"5xl"}
        py={10}
        fontWeight={"bold"}
      >
        <Text as={"span"} color={"green.400"}>
          DAO
        </Text>
        가 뭔지 알려{" "}
        <Text as={"span"} color={"green.400"}>
          DAO
        </Text>
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
        <Stat
          px={{ base: 2, md: 4 }}
          py={"5"}
          shadow={"xl"}
          rounded={"lg"}
          bgColor={"gray.200"}
        >
          <Flex justifyContent={"space-between"}>
            <Box pl={{ base: 2, md: 4 }}>
              <StatLabel
                fontWeight={"2xl"}
                fontSize={"2xl"}
                isTruncated
                color={"green.400"}
              >
                {"DAO란"}
              </StatLabel>
              <StatNumber
                fontSize={"lg"}
                fontWeight={"medium"}
                lineHeight={"180%"}
                width={"98%"}
              >
                다오(DAO, Decentralized Autonomous Organization)란 탈중앙화 자율
                조직 블록체인의 탄생과 더불어 등장한 새로운 조직 (또는 공동체)의
                한 형태입니다. 블록체인 이전의 기존 여러 형태의 조직과는 달리,
                별도의 중앙화된 관리 주체의 위계나 서열이 없이(탈중앙화) 스마트
                컨트랙트을 통해 투명하게 정해진 규칙에 따라 구성원 모두가
                자율적으로 공동의 의사결정에 참여(자율)해 목표 달성을 추구하는
                조직이라고 할 수 있습니다.
              </StatNumber>
            </Box>
          </Flex>
        </Stat>
        <Stat
          px={{ base: 2, md: 4 }}
          py={"5"}
          shadow={"xl"}
          rounded={"lg"}
          bgColor={"gray.200"}
        >
          <Flex justifyContent={"space-between"}>
            <Box pl={{ base: 2, md: 4 }}>
              <StatLabel
                fontWeight={"2xl"}
                fontSize={"2xl"}
                isTruncated
                color={"green.400"}
              >
                {"왜 DAO일까"}
              </StatLabel>
              <StatNumber
                fontSize={"lg"}
                fontWeight={"medium"}
                lineHeight={"180%"}
                width={"98%"}
              >
                1) 기존 다오 & 토크노믹스와 지속가능성의 한계를 넘어서기 위해
                한시적 DAO 구성
                <br /> 2) 한시적 DAO임에도 기록은 체인에 남기 때문에 공개기록에
                기반한 개개인 DATA를 지표화
                <br /> 3) 평가자(교수님) 입장에서도 공정하게 성적을 낼 수 있다
              </StatNumber>
            </Box>
          </Flex>
        </Stat>
      </SimpleGrid>
    </Box>
  );
}
