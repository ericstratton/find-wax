import { configureFonts, DefaultTheme } from 'react-native-paper';
import customFonts from './fonts';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(customFonts),
  roundness: 30,
};

export default theme;