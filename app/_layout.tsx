import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { useAddSegment } from '@/hooks/useAddSegment';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Arimo-Regular': require('../assets/fonts/Arimo-Regular.ttf'),
    'Arimo-Bold': require('../assets/fonts/Arimo-Bold.ttf'),
  });

  NativeWindStyleSheet.setOutput({
    default: 'native',
  });

  useAddSegment();

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <Stack
          screenOptions={{
            headerTitle: 'Донат контроль',
          }}>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              headerTitle: '',
            }}
          />
        </Stack>
      </GluestackUIProvider>
    </Provider>
  );
};

export default RootLayout;
