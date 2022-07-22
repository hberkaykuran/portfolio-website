import { Logo } from '../components/svg/logo';
import {
  chakra,
  nextjs,
  react,
  moralist,
  web3t
} from './tools';
import { v4 as uuidv4 } from 'uuid';

export default [
  {
    logo: null,
    title: 'Conflict',
    description:
      'My first Dapp project that runs on Avalanche Mainnet. Having no experience with Web3 and Blockchain, I\'ve experimented with Moralis. I\'ve utilized Moralis cloud functions, jobs, and job scheduling as well as NextJS, ChakraUI, and Telegram API. ',
    tools: [react, nextjs, chakra],
    live: 'https://conflict.vercel.app/',
    proto: null,
    repo: null,
    id: uuidv4(),
    feature: true
  },
  {
    logo: null,
    title: 'Fruit Festival',
    description:
      'Slot machine application that runs on Avalanche Testnet. Fruit festival is the product of my experimentations with Smart Contracts, Moralis, and web3.js.',
    tools: [react, nextjs, chakra, moralist, web3t],
    live: 'https://fruit-festival-web3.vercel.app/',
    proto: null,
    repo: null,
    id: uuidv4(),
    feature: true
  },
  
];
