import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { StatusBar, Text, View } from "react-native";
import { Link } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl">RootLayout!!!</Text>
      <Link href="/profile">Profile</Link>
    </View>
  );
}
