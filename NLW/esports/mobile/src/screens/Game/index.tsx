
import { Image, TouchableOpacity, View, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native'
import { GameParams } from '../../types/navigation';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';
import { useEffect, useState } from 'react'
import { DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';




export function Game() {

  const route = useRoute()
  const game = route.params as GameParams
  const navigate = useNavigation().navigate
  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const [discordDuoSelected, setDiscordDuoSelected] = useState('')

  function handleGoBack() {
    navigate('home')
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.2.24:3333/ads/${adsId}/discord`)
      .then(response => response.json())
      .then(data => setDiscordDuoSelected(data.discord))
  }

  useEffect(() => {
    fetch(`http://192.168.2.24:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))


  }, [])



  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              onPress={handleGoBack}
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            style={styles.logo}
            source={logoImg}
          />

          <View style={styles.right}>
          </View>


        </View>
        <Image
          style={styles.cover}
          source={{ uri: game.bannerUrl }}
          resizeMode='cover'
        />
        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'

        />
        <FlatList
          ListEmptyComponent={() => (
            <Text style={styles.emptylist}>Não há anuncios publicados ainda.</Text>
          )}
          horizontal
          data={duos}
          keyExtractor={item => item.id}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          style={styles.containerList}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => getDiscordUser(item.id)}
            />

          )
          }
        />
        <DuoMatch
          onClose={() => setDiscordDuoSelected('')}
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          transparent
          statusBarTranslucent

        />
      </SafeAreaView>
    </Background>
  );
}