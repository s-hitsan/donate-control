import 'react-native-reanimated';

import { Animated, Image, SafeAreaView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import ScrollView = Animated.ScrollView;

import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}>
        <View className="w-full justify-center items-center px-4">
          <Image source={images.logo} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
