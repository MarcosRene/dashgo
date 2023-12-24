import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header, Pagination, Sidebar } from "../../components";

export default function Users() {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mx="auto" maxW={1480} px="6">
        <Sidebar />

        <Box flex="1" borderRadius={6} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontWeight="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              cursor="pointer"
            >
              Criar novo
            </Button>
          </Flex>

          <Table color="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Stack direction="column">
                    <Text mb="-0.5" fontWeight="bold">
                      Marcos Renê
                    </Text>
                    <Text fontSize="sm" color="gray.300">
                      marcosrenedev@gmail.com
                    </Text>
                  </Stack>
                </Td>
                <Td>24, Dezembro 2023.</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontWeight="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    cursor="pointer"
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Flex>
  );
}
