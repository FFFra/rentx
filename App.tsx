import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';
import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Home } from './src/screens/Home';
import theme from './src/screens/Home/styles/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Home />
      </View>
    </ThemeProvider>
  );
}
