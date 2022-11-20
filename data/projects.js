import {
  chakra,
  nextjs,
  react,
  firebase,
  tailwindcss,
  prisma,
  planetScale,
} from "./tools";
import { v4 as uuidv4 } from "uuid";

export default [
  {
    logo: null,
    title: "Conflict",
    description:
      "My first Dapp project that runs on Avalanche Mainnet. Having no experience with Web3 and Blockchain, I've experimented with Moralis. I've utilized Moralis cloud functions, jobs, and job scheduling as well as NextJS, ChakraUI, and Telegram API. ",
    tools: [react, nextjs, chakra],
    live: "https://conflict.vercel.app/",
    proto: null,
    repo: null,
    id: uuidv4(),
    feature: false,
  },
  {
    logo: null,
    title: "Twitter Clone",
    description:
      "Web application developed with NextJs and TailwindCSS. Utilizes NextAuth for authentication, and Firebase for providers and database.",
    tools: [react, nextjs, tailwindcss, firebase],
    live: "https://twitter-clone-hberkaykuran.vercel.app/",
    proto: null,
    repo: "https://github.com/hberkaykuran/twitter-clone",
    id: uuidv4(),
    feature: true,
  },
  {
    logo: null,
    title: "Slay the Spire Tierlist",
    description:
      "Card tierlist of the popular rogue-like deck-building game Slay the Spire. Uses the StS-API I developed to get cards and results, and submit votes.",
    tools: [react, nextjs, tailwindcss, prisma],
    live: "https://sts-tierlist.vercel.app/",
    proto: null,
    repo: "https://github.com/hberkaykuran/sts-tierlist",
    id: uuidv4(),
    feature: true,
  },
  {
    logo: null,
    title: "Fruit Festival",
    description:
      "Slot machine application that runs on Avalanche Testnet. Fruit festival is the product of my experimentations with Smart Contracts, Moralis, and web3.js.\n Currently (November 10,2022) the web3 connection is not working due to deprecated features of Moralis. Moralis no longer provides server and database. I'll be working on it soon",
    tools: [react, nextjs, chakra],
    live: "https://fruit-festival-web3.vercel.app/",
    proto: null,
    repo: null,
    id: uuidv4(),
    feature: false,
  },
];
