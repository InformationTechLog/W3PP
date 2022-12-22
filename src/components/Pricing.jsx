import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={200}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="5xl">
          팀 조율해{" "}
          <Text as={"span"} color={"green.400"}>
            DAO
          </Text>
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          팀원들과 각자의 할 일 (feat. 조율해DAO 서타일)
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 2, lg: 5 }}
        py={10}
      >
        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("orange.300", "orange.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                조.장.
              </Text>
            </Box>
            <Box py={4} px={6} bgColor={"gray.200"} borderTopRadius={"xl"}>
              <Text fontWeight="500" fontSize="2xl">
                형준 Kim.eth
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600"></Text>
                <Text fontSize="5xl" fontWeight="900">
                  70
                </Text>
                <Text fontSize="2xl" color="gray.500">
                  냥(토큰)
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.100", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={10}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  팀장 맡기 (30토큰)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />첫 팀 회의
                  참석 (20토큰)
                </ListItem>
                <ListItem>
                  <ListIcon
                    fontSize={"20px"}
                    as={IoIosCloseCircle}
                    color="orange.500"
                    ml={"-2px"}
                  />
                  1차 자료조사 (20토큰)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  발표 하기 (20토큰)
                </ListItem>
              </List>
              <Box w="80%" pt={5}>
                <Button w="full" colorScheme="orange">
                  팀원의 과거 팀플 이력
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box py={4} px={6} bgColor={"gray.200"} borderTopRadius={"xl"}>
            <Text fontWeight="500" fontSize="2xl">
              율 Jo.eth
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600"></Text>
              <Text fontSize="5xl" fontWeight="900">
                40
              </Text>
              <Text fontSize="2xl" color="gray.500">
                냥(토큰)
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.100", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={10}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />첫 팀 회의 참석
                (20토큰)
              </ListItem>
              <ListItem>
                <ListIcon
                  fontSize={"20px"}
                  as={IoIosCloseCircle}
                  color="orange.500"
                  ml={"-2px"}
                />
                1차 자료조사 (10토큰)
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                아이디어 제안 (20토큰)
              </ListItem>
            </List>
            <Box w="80%" pt={5}>
              <Button w="full" colorScheme="orange" variant="outline">
                팀원의 과거 팀플 이력
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box py={4} px={6} bgColor={"gray.200"} borderTopRadius={"xl"}>
            <Text fontWeight="500" fontSize="2xl">
              준식 Eom.eth
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600"></Text>
              <Text fontSize="5xl" fontWeight="900">
                35
              </Text>
              <Text fontSize="2xl" color="gray.500">
                냥(토큰)
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.100", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={10}>
              <ListItem>
                <ListIcon
                  fontSize={"20px"}
                  as={IoIosCloseCircle}
                  color="orange.500"
                  ml={"-2px"}
                />
                첫 팀 회의 참석 (20토큰)
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                1차 자료조사 (15토큰)
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                기초 코오딩 (20토큰)
              </ListItem>
            </List>
            <Box w="80%" pt={5}>
              <Button w="full" colorScheme="orange" variant="outline">
                팀원의 과거 팀플 이력
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box py={4} px={6} bgColor={"gray.200"} borderTopRadius={"xl"}>
            <Text fontWeight="500" fontSize="2xl">
              성현 Kim.eth
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600"></Text>
              <Text fontSize="5xl" fontWeight="900">
                35
              </Text>
              <Text fontSize="2xl" color="gray.500">
                냥(토큰)
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.100", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={10}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />첫 팀 회의 참석
                (20토큰)
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                1차 자료조사 (15토큰)
              </ListItem>
              <ListItem>
                <ListIcon
                  fontSize={"20px"}
                  as={IoIosCloseCircle}
                  color="orange.500"
                  ml={"-2px"}
                />
                기초 디자인 (20토큰)
              </ListItem>
            </List>
            <Box w="80%" pt={5}>
              <Button w="full" colorScheme="orange" variant="outline">
                팀원의 과거 팀플 이력
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
