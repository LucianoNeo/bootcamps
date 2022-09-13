import logoImg from '../../assets/logo-nlw-esports.png'
import { View, Image, FlatList } from 'react-native';

import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { Gamecard } from '../../components/Gamecard';

import { GAMES } from '../../utils/games'


export function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={logoImg}
      />
      <Heading
        title='Encontre seu duo!'
        subtitle='Selecione o game que deseja jogar...'
      />

      <FlatList
      contentContainerStyle={styles.contentList}
        data={GAMES}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Gamecard
            data={item}
          />

        )}
      />
    </View>
  );
}