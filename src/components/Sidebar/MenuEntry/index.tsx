import { Link as ChakraLink, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

import { ActiveLink } from "../../ActiveLink";

type MenuEntryProps = {
  title: string;
  icon: IconType;
  path: string;
};

const MenuEntry = ({ title, icon, path }: MenuEntryProps) => (
  <ActiveLink href={path} passHref>
    <ChakraLink display="flex" alignItems="center">
      <Icon as={icon} fontSize="20" />
      <Text as="span" ml="4" fontWeight="medium">
        {title}
      </Text>
    </ChakraLink>
  </ActiveLink>
);

export default MenuEntry;
