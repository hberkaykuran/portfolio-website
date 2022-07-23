import { Box, VStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import Head from 'next/head';
import useToggle from '../utils/hooks/useToggle';
import { MobileNavMenu, Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

const Container = ({ children, ...customMeta }) => {
  const [isOpen, toggleIsOpen] = useToggle();

  return (    
    <Box>   
      <Seo {...customMeta} />
      <Button
        variant="secondary"
        as="a"
        href="#skip"
        position="absolute"
        transform="translateX(-100%)"
        transition="transform 0.3s"
        _focus={{ transform: 'translateX(0%)' }}
      >
        Skip to Content
      </Button>
      <Box
        w={{ base: '100vw', '2xl': '80vw', '3xl': '72vw' }}
        minH="100vh"
        m="auto"
      >
        <Navbar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        <VStack spacing={{ base: '8rem', lg: '10rem' }} id="skip" as="main">
          {isOpen ? <MobileNavMenu /> : children}
          <Footer />
        </VStack>
      </Box>
    </Box>
  );
};

const Seo = ({ ...customMeta }) => {
  const meta = {
    title: 'Berkay Kuran',
    description:
      '',
    type: 'website',
    ...customMeta
  };

  return (
    <Head>      
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link rel="icon" href="/favicon.ico" />
      <script type="text/javascript"
  dangerouslySetInnerHTML= {{__html: `window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
  heap.load("4190475229");`}}
  ></script>
    </Head >
  );
};

export default Container;
