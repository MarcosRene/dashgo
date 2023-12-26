import Link from "next/link";
import { ListItem, Link as LinkChakra, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

type MenuEntryProps = {
  title: string;
  icon: IconType;
  path: string;
};

const MenuEntry = ({ title, icon, path }: MenuEntryProps) => (
  <Link href={path} passHref>
    <LinkChakra display="flex" alignItems="center">
      <Icon as={icon} fontSize="20" />
      <Text as="span" ml="4" fontWeight="medium">
        {title}
      </Text>
    </LinkChakra>
  </Link>
);

export default MenuEntry;
