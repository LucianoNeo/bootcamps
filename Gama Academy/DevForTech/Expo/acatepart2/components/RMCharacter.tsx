import { View, Text, Pressable, StyleSheet, SafeAreaView, ScrollView, Image, StatusBar, Dimensions, Modal, TouchableOpacity } from 'react-native'

import { useEffect, useState } from 'react'

import Api from '../services/Api'

import { ICharacter } from '../types'
function RMCharacter() {

    const [character, setCharacter] = useState<ICharacter[]>()
    const [showModal, setShowModal] = useState(false)

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
                <Modal
                    animationType='slide'
                    visible={showModal}
                    onRequestClose={() => setShowModal(!showModal)}
                    transparent={true}

                >
                    <View style={styles.containerDark}>
                        <View style={styles.containerModal}>
                            <Image
                                style={styles.imageModal}
                                source={{ uri: characterDetails?.image }}
                            />
                            <Text>
                                Name: {characterDetails?.name}
                            </Text>
                            <Text>
                                Species: {characterDetails?.species}
                            </Text>
                            <Text>
                                Gender: {characterDetails?.gender}
                            </Text>
                            <TouchableOpacity
                                onPress={() => setShowModal(!showModal)}
                            >
                                <Text style={styles.pressables}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View style={styles.container}>
                <Text style={styles.title}>Rick and Morty Characters</Text>
                    {character?.map(
                        (item, index) => (
                            <View key={index} style={styles.card}>

                                <Image
                                    style={{ width: 100, height: 100 , borderRadius: 10}}
                                    source={{ uri: item.image }}
                                />
                                <View style={styles.textBox}>
                                    <Text
                                        style={styles.textName}
                                    >{item.name}</Text>

                                    <TouchableOpacity

                                        onPress={() => {
                                            getDataCharacter(item.id)
                                            setShowModal(!showModal)
                                        }
                                        }
                                    >
                                        <Text style={styles.pressables}>Details</Text>
                                    </TouchableOpacity>
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
    containerDark: {
        flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(2,2,2,0.8)'
    },
    containerModal: {
        height: 500,
        width: Dimensions.get('window').width - 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#85e885',
        borderRadius: 20,
        paddingVertical: 20,
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
    pressables: {
        fontWeight: 'bold',
        marginTop: 50,
        backgroundColor: '#7B25F0',
        color: 'white',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        maxWidth:120,
    },
    imageModal: {
        width: 200,
        height: 200,
        borderRadius: 150,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }

})

export default RMCharacter