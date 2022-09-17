
import { Modal, ModalProps, Text, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';

import { styles } from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import { THEME } from '../../theme';
import { Heading } from '../Heading';
import * as Clipboard from 'expo-clipboard'
import { useState } from 'react'

interface Props extends ModalProps {
    discord: string,
    onClose: () => void
}



export function DuoMatch({ discord, onClose, ...rest }: Props) {

    const [isCopying, setisCopying] = useState(false)

    async function handleCopy() {
        setisCopying(true)
        await Clipboard.setStringAsync(discord)
        Alert.alert('Discord Copiado!', 'Usuário copiado, pesquise no discord para adicioná-lo!')
        setisCopying(false)
    }

    return (
        <Modal
            {...rest}
            animationType='fade'
        >
            <View style={styles.container}>
                <View style={styles.content}>

                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.closeIcon}>
                        <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500} />
                    </TouchableOpacity>

                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight='bold'
                    />

                    <Heading
                        style={{ alignItems: 'center', marginTop: 24 }}
                        title="Let's Play"
                        subtitle='Agora é só começar a jogar!'
                    />
                    <Text style={styles.label}>
                        Adicione no discord
                    </Text>
                    <TouchableOpacity
                        disabled={isCopying}
                        onPress={handleCopy}
                        style={styles.discordButton}>
                        <Text style={styles.discord}>
                            {isCopying ?
                                <ActivityIndicator
                                    color={THEME.COLORS.PRIMARY}
                                />
                                : discord}

                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    );
}