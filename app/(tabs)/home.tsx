import { Animated, ActivityIndicator, NativeScrollEvent } from 'react-native';
import { Card, Heading, Text } from '@gluestack-ui/themed';
import ScrollView = Animated.ScrollView;
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchAids, fetchAidsTotalCount } from '@/store/slices/aids/operations';
import { useAppDispatch } from '@/store';
import { selectAids } from '@/store/slices/aids/selectors';

const Home = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { list: aidsList, isLoading, totalCount } = useSelector(selectAids);

  const isReachedTotalCount = totalCount <= aidsList?.length;

  useEffect(() => {
    dispatch(fetchAids(page));
  }, [page]);

  useEffect(() => {
    dispatch(fetchAidsTotalCount());
  }, []);

  const isBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height;
  };

  const onBottomReached = () => {
    !isReachedTotalCount && setPage((prevState) => prevState + 1);
  };

  return (
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (isBottom(nativeEvent)) {
          onBottomReached();
        }
      }}
      onScrollEndDrag={onBottomReached}
      scrollEventThrottle={400}>
      {aidsList?.map((aid) => (
        <Card variant="elevated" m="$1" key={aid.id}>
          <Heading mb="$1" size="md">
            {aid?.title}
          </Heading>
          <Text size="sm">{aid?.description}</Text>
          <Text size="sm">{aid?.sum}</Text>
        </Card>
      ))}
      {isLoading && <ActivityIndicator className="py-2" size="large" />}
    </ScrollView>
  );
};

export default Home;
