import {
    View,
    Text,
    StyleSheet
  } from 'react-native';
  
  import { 
    Feather as Icon 
  } from '@expo/vector-icons';
  
  const CardHeader = () => {
    return(
      <View
        style={styles.container}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>RECOMENDADO</Text>
          <View style={styles.action}>
            <Icon name="edit" size={16} />
          </View>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 16,
      marginBottom: 16,
      alignItems: 'center'
    },
    title: {
      alignSelf: 'center',
    },
    action: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignSelf: 'center',
    },
  })
  
  export default CardHeader;