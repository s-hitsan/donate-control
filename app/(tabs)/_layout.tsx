import { Tabs } from 'expo-router';
import { Image, ImageSourcePropType, View, Text } from 'react-native';

import { icons, tabs } from '../../constants';

type TabIconProps = {
  name: string;
  focused: boolean;
  color: string;
  icon: ImageSourcePropType;
};

const TabIcon = (props: TabIconProps) => {
  const { focused, color, icon, name } = props;
  return (
    <View className="items-center justify-center gap-1">
      <Image source={icon} resizeMode="contain" tintColor={color} className="w-4 h-4" />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
        }}>
        {tabs.map(({ icon, label, path }, index) => (
          <Tabs.Screen
            name={path}
            options={{
              title: label,
              tabBarIcon: props => <TabIcon icon={icon} name={label} {...props} />,
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsLayout;
