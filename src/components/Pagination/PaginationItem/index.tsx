import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export const PaginationItem = ({
  number,
  isCurrent = false,
}: PaginationItemProps) => {
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      {...(isCurrent
        ? {
            colorScheme: "pink",
            disabled: true,
            _disabled: {
              bg: "pink.500",
              cursor: "default",
            },
          }
        : {
            bgColor: "gray.700",
            _hover: { bg: "gray.500" },
          }
        )
      }
    >
      {number}
    </Button>
  );
};
