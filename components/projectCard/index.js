import {
  Box,
  Center,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/layout";
import { useColorModeSwitcher } from "../../utils/hooks/useColorModeSwitcher";
import Icon from "@chakra-ui/icon";
import { Button } from "@chakra-ui/button";
import PropTypes from "prop-types";

export const ProjectCard = ({
  logo,
  title,
  description,
  tools,
  live,
  proto,
  repo,
  ...props
}) => {
  const { colorDark, colorGrey, colorLight } = useColorModeSwitcher();
  return (
    <Box
      as="li"
      mb={{ base: "2rem", "2xl": 0 }}
      mx="1rem"
      listStyleType="none"
      border="1px solid"
      borderColor={colorGrey}
      w={{ base: "90%", md: "30rem" }}
      {...props}
    >
      <Center
        borderRadius={0}
        fill={colorLight}
        mb="3rem"
        w="100%"
        h="8rem"
        bg={colorDark}
      >
        {logo ? (
          logo
        ) : (
          <Heading color={colorLight} as="p" variant="h3">
            {title}
          </Heading>
        )}
      </Center>
      <Flex
        height="-moz-max-content"
        alignItems="center"
        justifyContent="space-between"
        px="2rem"
        spacing="2rem"
        flexDir="column"
      >
        <Box
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          display="flex"
        >
          <Heading data-testid="project-title" as="h3" variant="h3">
            {title}
          </Heading>
          <Text
            data-testid="project-description"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {description}
          </Text>
        </Box>
        <Box
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          display="flex"
        >
          <List display="flex" flexDirection="row">
            {tools.map((tool) => (
              <ListItem key={tool.id} p="0.5rem">
                <Icon
                  aria-label={tool.name}
                  transitionDuration="300ms"
                  boxSize="1.5rem"
                  as={tool.icon}
                  _hover={{ fill: tool.color }}
                />
              </ListItem>
            ))}
          </List>
          <HStack pb="2rem">
            {live && (
              <Button as="a" href={live} target="_blank" variant="primary">
                Visit Site
              </Button>
            )}
            {proto && (
              <Button as="a" href={proto} variant="primary">
                Prototype
              </Button>
            )}
            {repo && (
              <Button as="a" href={repo} target="_blank" variant="secondary">
                View Code
              </Button>
            )}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
  live: PropTypes.string,
  proto: PropTypes.string,
  repo: PropTypes.string,
};
