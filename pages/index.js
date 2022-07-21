import {
  Heading,
  Flex,
  Text,
  VStack,
  Box,
  useMediaQuery,
  Button,
  List,
  Icon
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Container from '../layouts/container';
import { HeroVisual } from '../components/svg/heroVisual';
import { useColorModeSwitcher } from '../utils/hooks/useColorModeSwitcher';
import projects from '../data/projects';
import { ProjectCard } from '../components/projectCard';
import { ContentWrapper } from '../layouts/contentWrapper';
import { css } from '@emotion/react';
import { BsArrowDown } from 'react-icons/bs';
import { useEffect, useState } from 'react';

export default function Homepage() {
  return (
    <Container>
      <ContentWrapper>
        <Hero />
        <FeaturedProjects />
      </ContentWrapper>
    </Container>
  );
}

const Hero = () => {
  const [isXtraLarge] = useMediaQuery('(min-width: 1280px)');
  const [scrollPos, setScrollPos] = useState();

  useEffect(() => {
    window.addEventListener('scroll', listenScroll);

    return () => {
      window.removeEventListener('scroll', listenScroll);
    };
  });

  const listenScroll = () => {
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolledFloat = windowScroll / height;

    const scrolled = scrolledFloat > 0.05;

    setScrollPos(scrolled);
  };

  return (
    <Box w={{ base: '90%', '2xl': '100%' }}>
      <Flex mb="4rem" justify="space-between">
        <Box
          // m={!isXtraLarge && 'auto'}
          w={{ base: '100%', xl: '50%' }}
        >
          <Heading mb="0.5rem" as="h1" variant="h1">
            Berkay Kuran
          </Heading>
          <Text mb={{ base: '4rem', lg: '6rem' }} as="h2" variant="subtitle">
            Welcome to the dark side. We have cookies 🍪
          </Text>
          <Heading as="h3" variant="h3" mb="0.5rem">
            Ok, but who are you?
          </Heading>
          <Text fontSize="xl" mb="2rem">
            I&apos;m just a regular everyday normal mf.
          </Text>
          <Text fontSize="xl" mb={{ base: '1rem', lg: '2rem' }}>
            Feel free to have a look around, and learn more about myself and
            what I like to work on.{' '}
          </Text>
          <NextLink href="#footer" passHref>
            <Button as="a" variant="primaryThemed" size="lg">
              Get in touch
            </Button>
          </NextLink>
        </Box>
        {isXtraLarge && <HeroVisual />}
      </Flex>
      {isXtraLarge && <ScrollArrow scrollPos={scrollPos} />}
    </Box>
  );
};

const ScrollArrow = ({ scrollPos }) => {
  const { colorDark } = useColorModeSwitcher();
  return (
    <VStack
      opacity={scrollPos ? 0 : 1}
      transition="visibility 0s linear 300ms, opacity 600ms"
      visibility={scrollPos ? 'hidden' : 'visible'}
    >
      <span>Scroll</span>
      <Icon
        as={BsArrowDown}
        boxSize="1.5em"
        fill={colorDark}
        css={css`
          animation: arrowAnimation 1.5s infinite ease-in-out;
          @keyframes arrowAnimation {
            0% {
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            60% {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
        `}
      />
    </VStack>
  );
};

const FeaturedProjects = () => {
  return (
    <VStack spacing="4rem" w="100%" m="auto">
      <FeatureHeading>Featured Projects</FeatureHeading>
      <Flex
        w="100%"
        mb="2.5rem"
        direction={{ base: 'column', xl: 'row' }}
        justify="space-evenly"
      >
        <Projects />
      </Flex>      
    </VStack>
  );
};

const Projects = () => {
  return (
    <List
      mx="auto"
      justifyContent="space-between"
      display={{ base: 'block', '2xl': 'flex' }}
    >
      {projects
        .filter((project) => project.feature)
        .map((project) => (
          <ProjectCard
            data-testid="project-card"
            logo={project.logo}
            title={project.title}
            description={project.description}
            tools={project.tools}
            live={project.live}
            proto={project.proto}
            repo={project.repo}
            key={project.id}
          />
        ))}
    </List>
  );
};

const FeatureHeading = ({ children }) => {
  return (
    <Heading textAlign="center" as="h2" variant="h2">
      {children}
    </Heading>
  );
};
