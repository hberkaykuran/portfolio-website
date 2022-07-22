import { createIcon, defaultProps, Icon } from '@chakra-ui/react';
import { useColorModeSwitcher } from '../../utils/hooks/useColorModeSwitcher';

const LogoBase = createIcon({
  defaultProps,
  displayName: 'LogoBase',
  viewBox: '0 0 206 249',
  path: (
    <path d="M62.2793 242.85C61.9538 241.873 61.791 240.327 61.791 238.211C61.791 236.095 61.9538 234.793 62.2793 234.305C62.4421 234.142 62.849 233.898 63.5 233.572C64.3138 233.084 65.1276 232.596 65.9414 232.107C66.918 231.619 67.8132 231.212 68.627 230.887C69.6035 230.398 70.3359 230.073 70.8242 229.91C77.9857 227.957 85.0658 225.841 92.0645 223.562C99.2259 221.284 106.225 218.68 113.061 215.75C119.896 212.82 126.488 209.484 132.836 205.74C139.184 201.834 145.287 197.277 151.146 192.068C165.144 179.373 175.154 168.468 181.176 159.354C187.361 150.076 190.616 142.264 190.941 135.916C191.267 129.568 189.232 124.523 184.838 120.779C180.606 116.873 175.154 114.025 168.48 112.234C161.97 110.281 154.727 109.223 146.752 109.061C138.939 108.898 131.615 109.305 124.779 110.281C118.106 111.258 112.41 112.641 107.689 114.432C103.132 116.222 100.772 118.094 100.609 120.047L92.0645 204.764C91.9017 206.229 91.0879 207.368 89.623 208.182C88.321 208.833 86.8561 209.158 85.2285 209.158C83.7637 209.158 82.3802 208.833 81.0781 208.182C79.9388 207.368 79.3691 206.229 79.3691 204.764V136.648H62.2793C62.1165 136.323 62.0352 135.672 62.0352 134.695C62.0352 133.556 62.1165 132.824 62.2793 132.498C62.9303 131.684 63.9883 130.301 65.4531 128.348C67.0807 126.232 68.7897 124.035 70.5801 121.756C72.3704 119.477 74.0794 117.361 75.707 115.408C77.3346 113.455 78.5553 112.153 79.3691 111.502C79.5319 109.386 79.776 105.724 80.1016 100.516C80.5898 95.3073 80.9967 89.7734 81.3223 83.9141C81.8105 78.0547 82.2174 72.5208 82.543 67.3125C83.0312 61.9414 83.3568 58.2793 83.5195 56.3262C83.8451 51.9316 83.3568 48.8392 82.0547 47.0488C80.9154 45.0957 79.2878 44.1191 77.1719 44.1191C75.056 43.9564 72.696 44.526 70.0918 45.8281C67.4876 46.9674 64.8835 48.4323 62.2793 50.2227C59.6751 52.013 57.2337 53.8848 54.9551 55.8379C52.6764 57.791 50.8861 59.3372 49.584 60.4766C48.2819 61.7786 46.0033 64.0573 42.748 67.3125C39.4928 70.4049 36.0749 73.8229 32.4941 77.5664C28.9134 81.1471 25.4954 84.5651 22.2402 87.8203C18.985 90.9128 16.7878 93.11 15.6484 94.4121H2.95312C1.48828 89.8548 2.38346 85.0534 5.63867 80.0078C9.05664 74.7995 14.1022 69.5098 20.7754 64.1387C27.4486 58.7676 35.3424 53.3965 44.457 48.0254C53.7344 42.6543 63.5 37.6087 73.7539 32.8887C84.0078 28.0059 94.2617 23.5299 104.516 19.4609C114.932 15.3919 124.617 11.974 133.568 9.20703C142.683 6.27734 150.658 4.08008 157.494 2.61523C164.33 1.15039 169.294 0.662109 172.387 1.15039C175.316 1.80143 177.188 3.42904 178.002 6.0332C178.816 8.63737 178.979 11.5671 178.49 14.8223C178.002 17.9147 177.107 21.0072 175.805 24.0996C174.665 27.1921 173.526 29.4707 172.387 30.9355C167.341 38.097 162.702 44.6074 158.471 50.4668C154.239 56.1634 149.844 61.6159 145.287 66.8242C140.893 71.8698 136.091 76.9967 130.883 82.2051C125.837 87.2507 119.978 92.7845 113.305 98.8066C118.839 99.7832 124.128 99.946 129.174 99.2949C134.382 98.6439 139.428 97.9928 144.311 97.3418C149.356 96.528 154.483 96.1211 159.691 96.1211C165.062 95.9583 170.759 96.8535 176.781 98.8066C180.362 99.946 183.536 101.167 186.303 102.469C189.07 103.771 191.43 105.317 193.383 107.107C195.499 108.898 197.208 111.176 198.51 113.943C199.975 116.548 201.195 119.884 202.172 123.953C204.288 133.719 203.474 143.24 199.73 152.518C195.987 161.795 190.29 170.584 182.641 178.885C175.154 187.186 166.365 194.998 156.273 202.322C146.182 209.484 135.928 215.994 125.512 221.854C115.095 227.713 105.004 232.758 95.2383 236.99C85.6354 241.222 77.4974 244.559 70.8242 247C69.0339 247.814 67.3249 247.732 65.6973 246.756C64.0697 245.617 62.9303 244.314 62.2793 242.85ZM100.609 94.4121C101.749 93.4355 103.376 91.8893 105.492 89.7734C107.771 87.4948 110.294 84.972 113.061 82.2051C115.99 79.4382 119.001 76.5898 122.094 73.6602C125.186 70.5677 128.035 67.638 130.639 64.8711C133.406 61.9414 135.847 59.3372 137.963 57.0586C140.242 54.7799 141.869 53.071 142.846 51.9316C144.473 50.304 146.426 47.944 148.705 44.8516C151.146 41.5964 153.507 38.4225 155.785 35.3301C158.064 32.0749 160.017 29.2266 161.645 26.7852C163.272 24.3438 164.086 22.8789 164.086 22.3906V9.69531C159.203 8.88151 153.425 9.28841 146.752 10.916C140.242 12.5436 133.731 14.6595 127.221 17.2637C120.71 19.7051 114.607 22.3092 108.91 25.0762C103.376 27.6803 99.1445 29.6335 96.2148 30.9355L100.609 39.2363V94.4121Z"/>

  )
});

export const Logo = ({ boxSize = '3rem', ...props }) => {
  const { colorLight, colorDark } = useColorModeSwitcher();
  return (
    <Icon
      {...props}
      strokeWidth="2px"
      stroke="currentcolor"
      boxSize={boxSize}
      as={LogoBase}
    />
  );
};

const web3LogoBase = createIcon({
  defaultProps,
  displayName: 'LogoBase',
  viewBox: '0 0 206 249',
  path: (
    <path d="M62.2793 242.85C61.9538 241.873 61.791 240.327 61.791 238.211C61.791 236.095 61.9538 234.793 62.2793 234.305C62.4421 234.142 62.849 233.898 63.5 233.572C64.3138 233.084 65.1276 232.596 65.9414 232.107C66.918 231.619 67.8132 231.212 68.627 230.887C69.6035 230.398 70.3359 230.073 70.8242 229.91C77.9857 227.957 85.0658 225.841 92.0645 223.562C99.2259 221.284 106.225 218.68 113.061 215.75C119.896 212.82 126.488 209.484 132.836 205.74C139.184 201.834 145.287 197.277 151.146 192.068C165.144 179.373 175.154 168.468 181.176 159.354C187.361 150.076 190.616 142.264 190.941 135.916C191.267 129.568 189.232 124.523 184.838 120.779C180.606 116.873 175.154 114.025 168.48 112.234C161.97 110.281 154.727 109.223 146.752 109.061C138.939 108.898 131.615 109.305 124.779 110.281C118.106 111.258 112.41 112.641 107.689 114.432C103.132 116.222 100.772 118.094 100.609 120.047L92.0645 204.764C91.9017 206.229 91.0879 207.368 89.623 208.182C88.321 208.833 86.8561 209.158 85.2285 209.158C83.7637 209.158 82.3802 208.833 81.0781 208.182C79.9388 207.368 79.3691 206.229 79.3691 204.764V136.648H62.2793C62.1165 136.323 62.0352 135.672 62.0352 134.695C62.0352 133.556 62.1165 132.824 62.2793 132.498C62.9303 131.684 63.9883 130.301 65.4531 128.348C67.0807 126.232 68.7897 124.035 70.5801 121.756C72.3704 119.477 74.0794 117.361 75.707 115.408C77.3346 113.455 78.5553 112.153 79.3691 111.502C79.5319 109.386 79.776 105.724 80.1016 100.516C80.5898 95.3073 80.9967 89.7734 81.3223 83.9141C81.8105 78.0547 82.2174 72.5208 82.543 67.3125C83.0312 61.9414 83.3568 58.2793 83.5195 56.3262C83.8451 51.9316 83.3568 48.8392 82.0547 47.0488C80.9154 45.0957 79.2878 44.1191 77.1719 44.1191C75.056 43.9564 72.696 44.526 70.0918 45.8281C67.4876 46.9674 64.8835 48.4323 62.2793 50.2227C59.6751 52.013 57.2337 53.8848 54.9551 55.8379C52.6764 57.791 50.8861 59.3372 49.584 60.4766C48.2819 61.7786 46.0033 64.0573 42.748 67.3125C39.4928 70.4049 36.0749 73.8229 32.4941 77.5664C28.9134 81.1471 25.4954 84.5651 22.2402 87.8203C18.985 90.9128 16.7878 93.11 15.6484 94.4121H2.95312C1.48828 89.8548 2.38346 85.0534 5.63867 80.0078C9.05664 74.7995 14.1022 69.5098 20.7754 64.1387C27.4486 58.7676 35.3424 53.3965 44.457 48.0254C53.7344 42.6543 63.5 37.6087 73.7539 32.8887C84.0078 28.0059 94.2617 23.5299 104.516 19.4609C114.932 15.3919 124.617 11.974 133.568 9.20703C142.683 6.27734 150.658 4.08008 157.494 2.61523C164.33 1.15039 169.294 0.662109 172.387 1.15039C175.316 1.80143 177.188 3.42904 178.002 6.0332C178.816 8.63737 178.979 11.5671 178.49 14.8223C178.002 17.9147 177.107 21.0072 175.805 24.0996C174.665 27.1921 173.526 29.4707 172.387 30.9355C167.341 38.097 162.702 44.6074 158.471 50.4668C154.239 56.1634 149.844 61.6159 145.287 66.8242C140.893 71.8698 136.091 76.9967 130.883 82.2051C125.837 87.2507 119.978 92.7845 113.305 98.8066C118.839 99.7832 124.128 99.946 129.174 99.2949C134.382 98.6439 139.428 97.9928 144.311 97.3418C149.356 96.528 154.483 96.1211 159.691 96.1211C165.062 95.9583 170.759 96.8535 176.781 98.8066C180.362 99.946 183.536 101.167 186.303 102.469C189.07 103.771 191.43 105.317 193.383 107.107C195.499 108.898 197.208 111.176 198.51 113.943C199.975 116.548 201.195 119.884 202.172 123.953C204.288 133.719 203.474 143.24 199.73 152.518C195.987 161.795 190.29 170.584 182.641 178.885C175.154 187.186 166.365 194.998 156.273 202.322C146.182 209.484 135.928 215.994 125.512 221.854C115.095 227.713 105.004 232.758 95.2383 236.99C85.6354 241.222 77.4974 244.559 70.8242 247C69.0339 247.814 67.3249 247.732 65.6973 246.756C64.0697 245.617 62.9303 244.314 62.2793 242.85ZM100.609 94.4121C101.749 93.4355 103.376 91.8893 105.492 89.7734C107.771 87.4948 110.294 84.972 113.061 82.2051C115.99 79.4382 119.001 76.5898 122.094 73.6602C125.186 70.5677 128.035 67.638 130.639 64.8711C133.406 61.9414 135.847 59.3372 137.963 57.0586C140.242 54.7799 141.869 53.071 142.846 51.9316C144.473 50.304 146.426 47.944 148.705 44.8516C151.146 41.5964 153.507 38.4225 155.785 35.3301C158.064 32.0749 160.017 29.2266 161.645 26.7852C163.272 24.3438 164.086 22.8789 164.086 22.3906V9.69531C159.203 8.88151 153.425 9.28841 146.752 10.916C140.242 12.5436 133.731 14.6595 127.221 17.2637C120.71 19.7051 114.607 22.3092 108.91 25.0762C103.376 27.6803 99.1445 29.6335 96.2148 30.9355L100.609 39.2363V94.4121Z"/>

  )
});

export const Web3Logo = ({ boxSize = '3rem', ...props }) => {
  const { colorLight, colorDark } = useColorModeSwitcher();
  return (
    <Icon
      {...props}
      strokeWidth="2px"
      stroke="currentcolor"
      boxSize={boxSize}
      as={LogoBase}
    />
  );
};


const moralisLogoBase = createIcon({
  defaultProps,
  displayName: 'LogoBase',
  viewBox: '0 0 206 249',
  path: (
    <path d="M62.2793 242.85C61.9538 241.873 61.791 240.327 61.791 238.211C61.791 236.095 61.9538 234.793 62.2793 234.305C62.4421 234.142 62.849 233.898 63.5 233.572C64.3138 233.084 65.1276 232.596 65.9414 232.107C66.918 231.619 67.8132 231.212 68.627 230.887C69.6035 230.398 70.3359 230.073 70.8242 229.91C77.9857 227.957 85.0658 225.841 92.0645 223.562C99.2259 221.284 106.225 218.68 113.061 215.75C119.896 212.82 126.488 209.484 132.836 205.74C139.184 201.834 145.287 197.277 151.146 192.068C165.144 179.373 175.154 168.468 181.176 159.354C187.361 150.076 190.616 142.264 190.941 135.916C191.267 129.568 189.232 124.523 184.838 120.779C180.606 116.873 175.154 114.025 168.48 112.234C161.97 110.281 154.727 109.223 146.752 109.061C138.939 108.898 131.615 109.305 124.779 110.281C118.106 111.258 112.41 112.641 107.689 114.432C103.132 116.222 100.772 118.094 100.609 120.047L92.0645 204.764C91.9017 206.229 91.0879 207.368 89.623 208.182C88.321 208.833 86.8561 209.158 85.2285 209.158C83.7637 209.158 82.3802 208.833 81.0781 208.182C79.9388 207.368 79.3691 206.229 79.3691 204.764V136.648H62.2793C62.1165 136.323 62.0352 135.672 62.0352 134.695C62.0352 133.556 62.1165 132.824 62.2793 132.498C62.9303 131.684 63.9883 130.301 65.4531 128.348C67.0807 126.232 68.7897 124.035 70.5801 121.756C72.3704 119.477 74.0794 117.361 75.707 115.408C77.3346 113.455 78.5553 112.153 79.3691 111.502C79.5319 109.386 79.776 105.724 80.1016 100.516C80.5898 95.3073 80.9967 89.7734 81.3223 83.9141C81.8105 78.0547 82.2174 72.5208 82.543 67.3125C83.0312 61.9414 83.3568 58.2793 83.5195 56.3262C83.8451 51.9316 83.3568 48.8392 82.0547 47.0488C80.9154 45.0957 79.2878 44.1191 77.1719 44.1191C75.056 43.9564 72.696 44.526 70.0918 45.8281C67.4876 46.9674 64.8835 48.4323 62.2793 50.2227C59.6751 52.013 57.2337 53.8848 54.9551 55.8379C52.6764 57.791 50.8861 59.3372 49.584 60.4766C48.2819 61.7786 46.0033 64.0573 42.748 67.3125C39.4928 70.4049 36.0749 73.8229 32.4941 77.5664C28.9134 81.1471 25.4954 84.5651 22.2402 87.8203C18.985 90.9128 16.7878 93.11 15.6484 94.4121H2.95312C1.48828 89.8548 2.38346 85.0534 5.63867 80.0078C9.05664 74.7995 14.1022 69.5098 20.7754 64.1387C27.4486 58.7676 35.3424 53.3965 44.457 48.0254C53.7344 42.6543 63.5 37.6087 73.7539 32.8887C84.0078 28.0059 94.2617 23.5299 104.516 19.4609C114.932 15.3919 124.617 11.974 133.568 9.20703C142.683 6.27734 150.658 4.08008 157.494 2.61523C164.33 1.15039 169.294 0.662109 172.387 1.15039C175.316 1.80143 177.188 3.42904 178.002 6.0332C178.816 8.63737 178.979 11.5671 178.49 14.8223C178.002 17.9147 177.107 21.0072 175.805 24.0996C174.665 27.1921 173.526 29.4707 172.387 30.9355C167.341 38.097 162.702 44.6074 158.471 50.4668C154.239 56.1634 149.844 61.6159 145.287 66.8242C140.893 71.8698 136.091 76.9967 130.883 82.2051C125.837 87.2507 119.978 92.7845 113.305 98.8066C118.839 99.7832 124.128 99.946 129.174 99.2949C134.382 98.6439 139.428 97.9928 144.311 97.3418C149.356 96.528 154.483 96.1211 159.691 96.1211C165.062 95.9583 170.759 96.8535 176.781 98.8066C180.362 99.946 183.536 101.167 186.303 102.469C189.07 103.771 191.43 105.317 193.383 107.107C195.499 108.898 197.208 111.176 198.51 113.943C199.975 116.548 201.195 119.884 202.172 123.953C204.288 133.719 203.474 143.24 199.73 152.518C195.987 161.795 190.29 170.584 182.641 178.885C175.154 187.186 166.365 194.998 156.273 202.322C146.182 209.484 135.928 215.994 125.512 221.854C115.095 227.713 105.004 232.758 95.2383 236.99C85.6354 241.222 77.4974 244.559 70.8242 247C69.0339 247.814 67.3249 247.732 65.6973 246.756C64.0697 245.617 62.9303 244.314 62.2793 242.85ZM100.609 94.4121C101.749 93.4355 103.376 91.8893 105.492 89.7734C107.771 87.4948 110.294 84.972 113.061 82.2051C115.99 79.4382 119.001 76.5898 122.094 73.6602C125.186 70.5677 128.035 67.638 130.639 64.8711C133.406 61.9414 135.847 59.3372 137.963 57.0586C140.242 54.7799 141.869 53.071 142.846 51.9316C144.473 50.304 146.426 47.944 148.705 44.8516C151.146 41.5964 153.507 38.4225 155.785 35.3301C158.064 32.0749 160.017 29.2266 161.645 26.7852C163.272 24.3438 164.086 22.8789 164.086 22.3906V9.69531C159.203 8.88151 153.425 9.28841 146.752 10.916C140.242 12.5436 133.731 14.6595 127.221 17.2637C120.71 19.7051 114.607 22.3092 108.91 25.0762C103.376 27.6803 99.1445 29.6335 96.2148 30.9355L100.609 39.2363V94.4121Z"/>

  )
});

export const MoralisLogo = ({ boxSize = '3rem', ...props }) => {
  const { colorLight, colorDark } = useColorModeSwitcher();
  return (
    <Icon
      {...props}
      strokeWidth="2px"
      stroke="currentcolor"
      boxSize={boxSize}
      as={LogoBase}
    />
  );
};
