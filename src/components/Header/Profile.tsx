import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Rebeca Lopes</Text>
        <Text color="green.300" fontSize="small">
          becatriz7@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Rebeca Lopes"
        src="https://avatars.githubusercontent.com/u/36612706?v=4"
      />
    </Flex>
  );
}
