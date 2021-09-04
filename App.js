import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainStack from './src/navigation/MainStack';
import App from './src/screens/App/App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <MainStack/>
    </PaperProvider>
  );
}