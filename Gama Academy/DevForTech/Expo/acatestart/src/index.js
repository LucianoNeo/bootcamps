import { useState } from 'react'

import {
  Image,
  Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View
} from 'react-native'

const App = () => {

  const [press, setPress] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollcontent}>
        <View>
          <Image
            source={require('./img/mussum.jpeg')}
            style={styles.picture}
          />
        </View>
        <Text style={styles.textStyle}>
          Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Manduma pindureta quium dia nois paga.Cevadis im ampola pa arma uma pindureta.Quem num gosta di mé, boa gentis num é.
        </Text>
        <Text style={styles.textStyle}>
          Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Manduma pindureta quium dia nois paga.Cevadis im ampola pa arma uma pindureta.Quem num gosta di mé, boa gentis num é.
        </Text>
        <Text style={styles.textStyle}>
          Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Manduma pindureta quium dia nois paga.Cevadis im ampola pa arma uma pindureta.Quem num gosta di mé, boa gentis num é.
        </Text>
        <Text style={styles.textStyle}>
          Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Manduma pindureta quium dia nois paga.Cevadis im ampola pa arma uma pindureta.Quem num gosta di mé, boa gentis num é.
        </Text>
        <Text style={styles.textStyle}>
          Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Manduma pindureta quium dia nois paga.Cevadis im ampola pa arma uma pindureta.Quem num gosta di mé, boa gentis num é.
        </Text>
        <View style={styles.textBox}>
          <Text style={styles.textBoxContent}>
            Pressionado {press} x
          </Text>

          <Pressable
            onPress={() => setPress(press + 1)}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#000' : '#fff',
                fontSize: 22,
                borderRadius: 10
              }
            ]}
          >
            {({ pressed }) => (
              <Text
                style={{
                  color: pressed ? 'white' : 'blue',
                  fontSize: 35,
                  textAlign: 'center'
                }}
              >
                Manda vê
              </Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    marginTop: StatusBar.currentHeight
  },
  scrollcontent: {
    paddingHorizontal: 15
  },
  picture: {
    width: 160,
    height: 160,
    marginTop: 50
  },
  pressStyle: {
    fontSize: 26,
  },
  textBox: {
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  textBoxContent: {
    fontSize: 20,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    marginTop: 32,
    fontSize: 22,
  }
})

export default App