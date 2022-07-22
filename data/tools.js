import { Chakra } from '../components/svg/chakraLogo';
import {
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiFigma,
  SiNextdotjs
} from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';
import {ReactComponent as web3svg} from '../components/svg/web3.svg';
import {ReactComponent as moralissvg} from '../components/svg/moralis.svg'

export const js = {
  name: 'JavaScript',
  icon: SiJavascript,
  color: '#F7DF1E',
  id: uuidv4()
};

export const moralist = {
  name: 'Moralis',
  icon: moralissvg,
  color: '#339933',
  id: uuidv4()
};

export const web3t = {
  name: 'web3.js',
  icon: web3svg,
  color: '#F7DF1E',
  id: uuidv4()
};

export const react = {
  name: 'React',
  icon: SiReact,
  color: '#61DAFB',
  id: uuidv4()
};

export const nodejs = {
  name: 'Node.js',
  icon: SiNodeDotJs,
  color: '#339933',
  id: uuidv4()
};

export const nextjs = {
  name: 'Next.js',
  icon: SiNextdotjs,
  color: '#47848F',
  id: uuidv4()
};

export const figma = {
  name: 'Figma',
  icon: SiFigma,
  color: '#F24E1E',
  id: uuidv4()
};

// add chakraui svg to files and import
export const chakra = {
  name: 'Chakra UI',
  icon: Chakra,
  color: '#319795',
  id: uuidv4()
};
