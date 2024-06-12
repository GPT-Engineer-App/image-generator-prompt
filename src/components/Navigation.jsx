import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
        <Button as={Link} to="/image-generator" colorScheme="teal" variant="ghost">
          Image Generator
        </Button>
      </Flex>
    </Box>
  );
}

export default Navigation;