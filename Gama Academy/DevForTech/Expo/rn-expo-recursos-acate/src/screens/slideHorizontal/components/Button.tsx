import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';

interface IButton {
    label: string
}

const width = Dimensions.get('window').width -64

const Button = ({ label }: IButton) => {

    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ef0c0c',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf:'center',
        borderRadius: 20,
        height: 54,
        width: width,
    },
    label: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf:'center'
    }
})

export default Button