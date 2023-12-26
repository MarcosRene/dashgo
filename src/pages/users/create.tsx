import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Header, Sidebar } from "../../components";
import { Input } from "../../components/Form";

export default function Create() {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mx="auto" maxW={1480} px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="15rem" spacing={["6", "8"]} width="100%">
              <Input name="name" placeholder="Nome completo" />
              <Input name="email" type="email" placeholder="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="15rem" spacing={["6", "8"]} width="100%">
              <Input name="password" type="password" placeholder="Senha" />
              <Input
                name="password_confirmation"
                type="password"
                placeholder="Confirmação da senha"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
