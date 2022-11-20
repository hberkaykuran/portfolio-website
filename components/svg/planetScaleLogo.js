import { createIcon, defaultProps, Icon } from "@chakra-ui/react";
import { useColorModeSwitcher } from "../../utils/hooks/useColorModeSwitcher";

const planetScaleIcon = createIcon({
  defaultProps,
  displayName: "ChakraBase",
  viewBox: "0 0 24 24",
  path: (
    <path d="M 256 128.044 C 255.976 198.701 198.701 255.976 128.044 256 L 128.044 256 Z M 128 0 C 179.977 0 224.719 30.9807 244.765 75.4833 L 75.4833 244.765 C 68.2193 241.493 61.3149 237.563 54.8474 233.05 L 159.898 128 L 128 128 L 37.4904 218.509 C 14.3269 195.346 0 163.346 0 128 C 0 57.3075 57.3076 0 128 0 Z" />
  ),
});

export const PlanetScale = ({ ...props }) => {
  const { colorDark } = useColorModeSwitcher();
  return (
    <Icon fill={colorDark} {...props} boxSize="32rem" as={planetScaleIcon} />
  );
};
