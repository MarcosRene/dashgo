import dynamic from "next/dynamic";

import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

import { Header, Sidebar } from "../../components";
import { CHART_SETUP } from "../../constants";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Dashboard() {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mx="auto" maxW={1480} px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth={320} align="flex-start">
          <Box
            p={["6", "8"]}
            bg="gray.800"
            transitionDuration="180ms"
            transitionTimingFunction="ease-in-out"
            borderRadius={8}
            border="2px"
            borderColor="transparent"
            _hover={{
              borderColor: "blue.900",
            }}
          >
            <Heading fontSize="lg" mb="4">
              Inscritos da semana
            </Heading>

            <Chart type="area" height={160} {...CHART_SETUP} />
          </Box>

          <Box
            p={["6", "8"]}
            bg="gray.800"
            transitionDuration="180ms"
            transitionTimingFunction="ease-in-out"
            borderRadius={8}
            border="2px"
            borderColor="transparent"
            _hover={{
              borderColor: "blue.900",
            }}
          >
            <Heading fontSize="lg" mb="4">
              Taxa de abertura
            </Heading>

            <Chart type="area" height={160} {...CHART_SETUP} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
