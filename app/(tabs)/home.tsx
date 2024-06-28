import { Animated, View } from 'react-native';
import { Card, Heading, Text } from '@gluestack-ui/themed';
import ScrollView = Animated.ScrollView;

const mockData = [
  { id: 1, name: 'Andryy', description: 'Operator', directrion: 'Donetsk' },
  {
    id: 2,
    name: 'Stepan',
    description: 'Operator 10',
    directrion: 'Luhansk',
  },
  {
    id: 3,
    name: 'Mykola',
    description: 'Operator 7',
    directrion: 'Zaporizzya',
  },
  { id: 4, name: 'Serhii', description: 'Operator', directrion: 'Donetsk' },
  { id: 1, name: 'Andryy', description: 'Operator', directrion: 'Donetsk' },
  {
    id: 2,
    name: 'Stepan',
    description: 'Operator 10',
    directrion: 'Luhansk',
  },
  {
    id: 3,
    name: 'Mykola',
    description: 'Operator 7',
    directrion: 'Zaporizzya',
  },
  { id: 4, name: 'Serhii', description: 'Operator', directrion: 'Donetsk' },
  { id: 1, name: 'Andryy', description: 'Operator', directrion: 'Donetsk' },
  {
    id: 2,
    name: 'Stepan',
    description: 'Operator 10',
    directrion: 'Luhansk',
  },
  {
    id: 3,
    name: 'Mykola',
    description: 'Operator 7',
    directrion: 'Zaporizzya',
  },
  { id: 4, name: 'Serhii', description: 'Operator', directrion: 'Donetsk' },
  { id: 1, name: 'Andryy', description: 'Operator', directrion: 'Donetsk' },
  {
    id: 2,
    name: 'Stepan',
    description: 'Operator 10',
    directrion: 'Luhansk',
  },
  {
    id: 3,
    name: 'Mykola',
    description: 'Operator 7',
    directrion: 'Zaporizzya',
  },
  { id: 4, name: 'Serhii', description: 'Operator', directrion: 'Donetsk' },
  { id: 1, name: 'Andryy', description: 'Operator', directrion: 'Donetsk' },
  {
    id: 2,
    name: 'Stepan',
    description: 'Operator 10',
    directrion: 'Luhansk',
  },
  {
    id: 3,
    name: 'Mykola',
    description: 'Operator 7',
    directrion: 'Zaporizzya',
  },
  { id: 4, name: 'Serhii', description: 'Operator', directrion: 'Donetsk' },
  { id: 1, name: 'Andryy', description: 'Operator', directrion: 'Donetsk' },
  {
    id: 2,
    name: 'Stepan',
    description: 'Operator 10',
    directrion: 'Luhansk',
  },
  {
    id: 3,
    name: 'Mykola',
    description: 'Operator 7',
    directrion: 'Zaporizzya',
  },
  { id: 4, name: 'Serhii', description: 'Operator', directrion: 'Donetsk' },
  { id: 1, name: 'Andryy', description: 'Operator', directrion: 'Donetsk' },
  {
    id: 2,
    name: 'Stepan',
    description: 'Operator 10',
    directrion: 'Luhansk',
  },
  {
    id: 3,
    name: 'Mykola',
    description: 'Operator 7',
    directrion: 'Zaporizzya',
  },
  { id: 4, name: 'Serhii', description: 'Operator', directrion: 'Donetsk' },
  { id: 1, name: 'Andryy', description: 'Operator', directrion: 'Donetsk' },
  {
    id: 2,
    name: 'Stepan',
    description: 'Operator 10',
    directrion: 'Luhansk',
  },
  {
    id: 3,
    name: 'Mykola',
    description: 'Operator 7',
    directrion: 'Zaporizzya',
  },
  { id: 4, name: 'Serhii', description: 'Operator', directrion: 'Donetsk' },
  { id: 1, name: 'Andryy', description: 'Operator', directrion: 'Donetsk' },
  {
    id: 2,
    name: 'Stepan',
    description: 'Operator 10',
    directrion: 'Luhansk',
  },
  {
    id: 3,
    name: 'Mykola',
    description: 'Operator 7',
    directrion: 'Zaporizzya',
  },
  { id: 4, name: 'Serhii', description: 'Operator', directrion: 'Donetsk' },
  { id: 1, name: 'Andryy', description: 'Operator', directrion: 'Donetsk' },
  {
    id: 2,
    name: 'Stepan',
    description: 'Operator 10',
    directrion: 'Luhansk',
  },
  {
    id: 3,
    name: 'Mykola',
    description: 'Operator 7',
    directrion: 'Zaporizzya',
  },
  { id: 4, name: 'Serhii', description: 'Operator', directrion: 'Donetsk' },
];

const Home = () => {
  return (
    <ScrollView>
      {mockData.map((user) => (
        <Card variant="elevated" m="$1" key={user.id}>
          <Heading mb="$1" size="md">
            {user.name}
          </Heading>
          <Text size="sm">{user.directrion}</Text>
          <Text size="xs">{user.description}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Home;
