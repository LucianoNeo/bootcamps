import { View, Text, Pressable, StyleSheet, SafeAreaView, ScrollView, Image, StatusBar, Dimensions, Modal } from 'react-native'

import { useEffect, useState, useCallback } from 'react'

import Api from '../services/Api'

import { ICharacter } from '../types'
function RMCharacter() {

    const [character, setCharacter] = useState<ICharacter[]>()
    const [showModal, setShowModal] = useState(false)
    const [selected, setSelected] = useState<Number>()
    const [characterDetails, setCharacterDetails] = useState<ICharacter>()


    useEffect(() => {
        Api.get('character').then(res => setCharacter(res.data.results))

    }, [])

    const getDataCharacter = (id: Number) => {
        const value: ICharacter[] | any = character?.filter(item => item.id === id)

        let parsed: any = {}

        value.forEach(function (item: any) {
            for (var i in item) {
                parsed[i] = item[i];
            }
        });
        setCharacterDetails(parsed)
    }


    return (
        <SafeAreaView style={styles.containerAndroid}>
            <ScrollView>
                <View style={styles.container}>

                    {character?.map(
                        (item, index) => (
                            <View key={index} style={styles.card}>
                                <Modal
                                    animationType='slide'
                                    visible={showModal}
                                    onRequestClose={() => setShowModal(!showModal)}

                                >
                                    <View style={styles.containerModal}>
                                        <Text>
                                            Name: {characterDetails?.name}
                                        </Text>
                                        <Text>
                                            Species: {characterDetails?.species}
                                        </Text>
                                        <Text>
                                            Gender: {characterDetails?.gender}
                                        </Text>
                                        <Pressable
                                            onPress={() => setShowModal(!showModal)}
                                        >
                                            <Text style={styles.pressables}>Fechar</Text>
                                        </Pressable>
                                    </View>
                                </Modal>
                                <Image
                                    style={{ width: 100, height: 100 }}
                                    source={{ uri: item.image }}
                                />
                                <View style={styles.textBox}>
                                    <Text
                                        style={styles.textName}
                                    >{item.name}</Text>

                                    <Pressable
                                    
                                        onPress={() => {
                                            getDataCharacter(item.id)
                                            setShowModal(!showModal)
                                        }
                                        }
                                    >
                                        <Text style={styles.pressables}> Ver mais</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )
                    )}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerAndroid: {
        marginTop: StatusBar.currentHeight + 10,
        backgroundColor: '#7B25F0',
    },
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    containerModal: {
        flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00C200'
    },
    card: {
        width: Dimensions.get('window').width - 50,
        backgroundColor: '#7B25F0',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 12,
        margin: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

    textBox: {
        color: 'white',
        paddingHorizontal: 20,
    },
    textName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',

    },
    text: { color: 'white', },
    pressables:{
        fontWeight:'bold',
        marginTop:50,
    }

})

export default RMCharacter