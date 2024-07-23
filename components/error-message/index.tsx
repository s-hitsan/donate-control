import { Text } from 'react-native';

export const ErrorMessage = (props: any) => {
  return (
    <Text className="-bottom-5 absolute text-red-500">
      {props.text || 'Це поле обовʼязкове'}
    </Text>
  );
};
