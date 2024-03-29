import { Box, Stack, Text, List } from "@chakra-ui/react";
import { GENERAL_MENU, AUTOMATION_MENU } from "../constants";
import MenuEntry from "../MenuEntry";

export const SidebarNav = () => (
  <Stack spacing="12" align="flex-start">
    <Box>
      <Text
        fontWeight="bold"
        color="gray.400"
        fontSize="sm"
        textTransform="uppercase"
      >
        Geral
      </Text>

      <List spacing="4" mt="8" align="stretch">
        {Object.entries(GENERAL_MENU).map(([title, { icon, path }]) => (
          <MenuEntry key={title} title={title} icon={icon} path={path} />
        ))}
      </List>
    </Box>
    <Box>
      <Text
        fontWeight="bold"
        color="gray.400"
        fontSize="sm"
        textTransform="uppercase"
      >
        Automação
      </Text>

      <List spacing="4" mt="8" align="stretch">
        {Object.entries(AUTOMATION_MENU).map(([title, { icon, path }]) => (
          <MenuEntry key={title} title={title} icon={icon} path={path} />
        ))}
      </List>
    </Box>
  </Stack>
);
