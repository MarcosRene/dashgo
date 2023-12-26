import {
  Center,
  Flex,
  Text,
  Heading,
  Input,
  Icon,
  HStack,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

import { RiSearchLine, RiNotificationLine, RiUserLine } from "react-icons/ri";

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Center>
      <Flex w="100%" maxW={1480} h="20" mt="4" px="6" align="center">
        <Heading
          as="h1"
          fontSize={["2xl", "3xl"]}
          fontWeight="bold"
          letterSpacing="tight"
          w="64"
        >
          dashgo
          <Text as="span" color="pink.500">
            .
          </Text>
        </Heading>

        {isWideVersion && (
          <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxW={400}
            alignSelf="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
          >
            <Input
              px="4"
              mx="4"
              variant="unstyled"
              placeholder="Buscar na plataforma"
              color="gray.50"
              _placeholder={{ color: "gray.400" }}
            />
            <Icon as={RiSearchLine} fontSize="20" />
          </Flex>
        )}

        <Flex align="center" ml="auto">
          <HStack
            spacing={["6", "8"]}
            mx={["6", "8"]}
            pr={["6", "8"]}
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
          >
            <Icon as={RiNotificationLine} fontSize="20" />
            <Icon as={RiUserLine} fontSize="20" />
          </HStack>

          <Flex align="center">
            {isWideVersion && (
              <Box mr="4" textAlign="right">
                <Text as="strong" display="block">
                  Marcos Renê
                </Text>
                <Text as="span" color="gray.300" fontSize="sm">
                  marcosrene789@gmail.com
                </Text>
              </Box>
            )}

            <Avatar
              size="md"
              name="Marcos Renê"
              src="https://github.com/MarcosRene.png"
            />
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};
