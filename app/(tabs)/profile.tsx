import { Text, View } from 'react-native';
import React, { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    fetch('https://api.monobank.ua/bank/jar/2VAjutRLgagudMcTy98tUybUBYhMcuBk');
  }, []);
  return (
    <View>
      <Text>Profile!</Text>
    </View>
  );
};

export default Profile;
