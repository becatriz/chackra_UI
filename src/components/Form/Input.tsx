import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as ChakraInoutProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInoutProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: "gray.900",
        }}
        {...rest}
      />
    </FormControl>
  );
}
