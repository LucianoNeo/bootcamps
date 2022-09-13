import {
  ReactElement
} from 'react';



import {
  COL, IPositions, SIZE
} from './Config';

import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue
} from 'react-native-reanimated';

import Item from './Item';

interface IListProps {
  children: ReactElement<{ id: string; }>[];
}

const List = ({ children }: IListProps) => {
  const scrollView = useAnimatedRef<Animated.ScrollView>();

  const scrollY = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y
    },
  })

  const positions: Animated.SharedValue<IPositions> = useSharedValue(
    Object.assign(
      {},
      ...children.map((child, index) => ({ [child.props.id]: index }))
    )
  )
  return (
    <Animated.ScrollView
      ref={scrollView}
      contentContainerStyle={{
        height: Math.ceil(children.length / COL) * SIZE,
      }}
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
    >
      {children.map((child, index) => {
        return (
          <Item
            scrollY={scrollY}
            scrollView={scrollView}
            key={index}
            id={child.props.id}
            positions={positions}
          >
            {child}
          </Item>
        )
      })}
    </Animated.ScrollView>
  );
}

export default List;