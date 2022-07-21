import { Logo } from '../components/svg/logo';
import {
  chakra,
  nextjs,
  react,
} from './tools';
import { v4 as uuidv4 } from 'uuid';

export default [
  {
    logo: null,
    title: 'Fruit Festival',
    description:
      'My own personal guestbook which I invite you to sign! Created with Next.js + Prisma + Typescript + NextAuth for authentication. Inspired by Lee Robinson.',
    tools: [react, nextjs, chakra],
    live: 'https://fruit-festival.vercel.app/',
    proto: null,
    repo: null,
    id: uuidv4(),
    feature: true
  },
  {
    logo: null,
    title: 'Conflict',
    description:
      'An IoT project inspired by the original Magic Mirror by Michael Teeuw. Having no experience with Angular, it seemed like a good oppoertunity to build with React!',
    tools: [react, nextjs, chakra],
    live: 'https://conflict.vercel.app/',
    proto: null,
    repo: null,
    id: uuidv4(),
    feature: true
  },
];
