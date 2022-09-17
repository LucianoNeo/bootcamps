import { FlatList, Image, View } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Gamecard, GameCardProps } from '../../components/Gamecard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components';
import { useNavigation } from '@react-navigation/native'





export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])
  const navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl })
  }



  useEffect(() => {
    fetch('http://192.168.2.24:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))

  }, [])
  return (
    <Background>
      <SafeAreaView style={styles.container}>
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
          data={games}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Gamecard
              onPress={() => handleOpenGame(item)}
              data={item}
            />

          )}
        />
      </SafeAreaView>
    </Background>
  );
}