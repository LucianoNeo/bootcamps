import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Api from '../services/Api'

const PokeCard: React.FC = () => {
    const [pokemon,setPokemon] = useState()
    useEffect(() => {
        Api.get('6').then((response) => setPokemon(response.data))
        
    }, [])

    if(!pokemon) return (<Text>Carregando</Text>)

    return (
        <View style={styles.screen}>
        <View style={styles.container}>
            <Text style={styles.textBase}>
                PokéCard 
            </Text>
          
            <Image
            source={require('../assets/img/charizard.png')}
            style={styles.pokeImg}
            />
         
            <Text style={styles.textInfo}>Nome: {pokemon.name}</Text>
            <Text style={styles.textInfo}>Peso: {pokemon.weight} kg</Text>
            <Text style={styles.textInfo}>Altura: {pokemon.height} m</Text>
            <Text style={styles.textInfo}>Tipo: {pokemon.types[0].type.name}</Text>
            
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    container: {
        margin: 'auto',
        width: '90%',
        borderRadius: 20,
        height: '70%',
        backgroundColor: 'rgba(255,100,100,0.9)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBase: {
        fontSize: 20,
        color: 'white'
    },
    textInfo: {
        marginTop:20,
        fontSize: 18,
        color: 'white'
    },
    pokeImg:{
        marginTop:100,
        width: 250,
        height: 180,
    }
});


export default PokeCard

