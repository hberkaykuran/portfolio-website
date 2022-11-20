import { Chakra } from "../components/svg/chakraLogo";
import { Firebase } from "../components/svg/firebaseLogo";
import { PlanetScale } from "../components/svg/planetScaleLogo";
import {
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiFigma,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as web3svg } from "../components/svg/web3.svg";
import { ReactComponent as moralissvg } from "../components/svg/moralis.svg";

export const js = {
  name: "JavaScript",
  icon: SiJavascript,
  color: "#F7DF1E",
  id: uuidv4(),
};

export const moralist = {
  name: "Moralis",
  icon: moralissvg,
  color: "#339933",
  id: uuidv4(),
};

export const web3t = {
  name: "web3.js",
  icon: web3svg,
  color: "#F7DF1E",
  id: uuidv4(),
};

export const react = {
  name: "React",
  icon: SiReact,
  color: "#61DAFB",
  id: uuidv4(),
};

export const nodejs = {
  name: "Node.js",
  icon: SiNodeDotJs,
  color: "#339933",
  id: uuidv4(),
};

export const nextjs = {
  name: "Next.js",
  icon: SiNextdotjs,
  color: "#47848F",
  id: uuidv4(),
};

export const figma = {
  name: "Figma",
  icon: SiFigma,
  color: "#F24E1E",
  id: uuidv4(),
};

export const chakra = {
  name: "Chakra UI",
  icon: Chakra,
  color: "#319795",
  id: uuidv4(),
};

export const firebase = {
  name: "Chakra UI",
  icon: Firebase,
  color: "#ffa000",
  id: uuidv4(),
};

export const tailwindcss = {
  name: "TailwindCSS",
  icon: SiTailwindcss,
  color: "#07b6d5",
  id: uuidv4(),
};

export const prisma = {
  name: "Prisma",
  icon: SiPrisma,
  color: "#123a50",
  id: uuidv4(),
};

export const planetScale = {
  name: "PlanetScale",
  icon: PlanetScale,
  color: "#123a50",
  id: uuidv4(),
};
