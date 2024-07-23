import 'react-native-reanimated';

import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-ar-">RootLayouts!</Text>
      <Link href="/home">Go to Home</Link>
    </View>
  );
}
