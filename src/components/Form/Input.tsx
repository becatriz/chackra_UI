import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as ChakraInoutProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInoutProps {
  name: string;
  label?: string;
  error?: FieldError;
}

// Criado como const para poder utilizar o encaminhamento de "ref"
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        ref={ref}
        _hover={{
          bgColor: "gray.900",
        }}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase); // Encaminhamento da ref que vem com o props encaminhando para o componente InputBase
