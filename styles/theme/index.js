import { extendTheme } from '@chakra-ui/react';
import { styles } from './styles';
import { colors } from './colors';
import { Heading, Text, fonts, textStyles } from './typography';
import { Button } from './components/button';
import { Link } from './components/link';


const overrides = {
  breakpoints :{
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '90em',
    '3xl': '120em'
  },
  styles,
  colors,
  fonts,
  textStyles,
  components: {
    Button,
    Link,
    Heading,
    Text
  }
};
const customTheme = extendTheme(overrides);
export default customTheme;