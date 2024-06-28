import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { Tabs } from 'expo-router';
import { tabs } from '@/constants';

type TabBarIconProps = {
  icon: ImageSourcePropType;
  label: string;
  focused: boolean;
  color: string;
};

const TabBarIcon = (props: TabBarIconProps) => {
  const { icon, label, focused, color } = props;
  return (
    <View className="items-center justify-center gap-0.5">
      <Image
        resizeMode="contain"
        className="w-4 h-4"
        tintColor={color}
        source={icon}
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {label}
      </Text>
    </View>
  );
};
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#CDCDE0',
      }}>
      {tabs.map((tab, index) => (
        <Tabs.Screen
          key={tab.path}
          name={tab.path}
          options={{
            title: tab.label,
            headerShown: false,
            tabBarIcon: (props) =>
              TabBarIcon({
                icon: tab.icon,
                label: tab.label,
                ...props,
              }),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
