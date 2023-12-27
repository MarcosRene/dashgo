import { forwardRef, useState, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  Stack,
  InputRightElement,
  IconButton,
  FormErrorMessage,
} from "@chakra-ui/react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

interface InputProps extends ChakraInputProps {
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props: InputProps,
  ref
) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { id, type, name, placeholder, error = null, ...attrs } = props;

  const inputId = id ?? name;

  const handlePasswordVisibility = () =>
    setIsPasswordVisible((prevState) => !prevState);

  return (
    <FormControl id={inputId} isInvalid={!!error}>
      <Stack spacing="1">
        {placeholder && <FormLabel htmlFor={inputId}>{placeholder}</FormLabel>}

        <InputGroup>
          <ChakraInput
            id={inputId}
            size="lg"
            name={name}
            type={isPasswordVisible ? "text" : type}
            bg="gray.900"
            variant="filled"
            focusBorderColor="pink.500"
            _hover={{
              bg: "gray.900",
            }}
            ref={ref}
            {...attrs}
          />

          {type === "password" && (
            <InputRightElement top="50%" transform="translateY(-50%)">
              <IconButton
                onClick={handlePasswordVisibility}
                variant="ghost"
                colorScheme="darkAlpha"
                aria-label="Mostrar senha"
                icon={isPasswordVisible ? <RiEyeOffLine /> : <RiEyeLine />}
              />
            </InputRightElement>
          )}
        </InputGroup>

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </Stack>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
