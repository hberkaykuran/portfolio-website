import NextLink from 'next/link';
import useToggle from '../../utils/hooks/useToggle';
import { Icon } from '@chakra-ui/icons';
import { Link, HStack, VStack, Center} from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import VisuallyHidden from '@chakra-ui/visually-hidden';
import { github, linkedin, discord } from '../../data/socials';

export const Footer = () => {
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (  
    <VStack
      borderTop="1px solid"
      borderColor="neutral.200"
      py="32px"
      w="100%"
      spacing={{ base: '16px', lg: '64px' }}
      as="footer"
      id='footer'
    >
      {isLarge ? <Full /> : <Condensed />}
      <Link
        href={`${github.href}/portfolio-website`}
        isExternal
        variant="noStyle"
        align="center"
      >
        © 2022
      </Link>
    </VStack>
  );
};

const Condensed = () => {
  return (
    <HStack as="ul">
      <SocialLink
        color={github.color}
        icon={github.icon}
        href={github.href}
        name={github.name}
      />
      <SocialLink
        color={linkedin.color}
        icon={linkedin.icon}
        href={linkedin.href}
        name={linkedin.name}
      />
      <SocialLink
        color={discord.color}
        icon={discord.icon}
        href={discord.href}
        name={discord.name}
      />     
    </HStack>
    
  );
};

const Full = () => {
  return (
    <HStack align='flex-start' spacing="16rem">
      <MainRoutes />
      <Socials />
    </HStack>
  );
};

const MainRoutes = () => {
  return (
    <VStack h="100%" align="start">
      <NavLink href="/">Scroll to top</NavLink>
    </VStack>
  );
};

const Socials = () => {
  return (
    <VStack spacing={0.25} h="100%" as="ul">
      <SocialLink
        color={github.color}
        icon={github.icon}
        href={github.href}
        name={github.name}
      >
        Github
      </SocialLink>
      <SocialLink
        color={linkedin.color}
        icon={linkedin.icon}
        href={linkedin.href}
        name={linkedin.name}
      >
        LinkedIn
      </SocialLink>
      <SocialLink
        color={discord.color}
        icon={discord.icon}
        href={discord.href}
        name={discord.name}
      >
        Discord
      </SocialLink>
    </VStack>
  );
};

const SocialLink = ({ children, color, icon, href, name }) => {
  const [hover, toggleHover] = useToggle();
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <Center
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      as="li"
      listStyleType="none"
    >
      <Link
        variant="subtle"
        display="flex"
        alignItems="center"
        p={2}
        href={href}
        isExternal
      >
        <Icon
          transform={hover ? 'translateY(-4px)' : 'none'}
          transitionDuration="500ms"
          fill={hover && color}
          mr={{ lg: '0.25rem' }}
          boxSize={{ base: '1.5rem', lg: '1rem' }}
          aria-hidden={true}
          as={icon}
        />
        {children}
        {!isLarge && <VisuallyHidden>{name}</VisuallyHidden>}
      </Link>
    </Center>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link variant="subtle">{children}</Link>
    </NextLink>
  );
};
