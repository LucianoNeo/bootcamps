import { Heading, Icon, useTheme, VStack } from 'native-base'
import { Envelope, Key } from 'phosphor-react-native'
import { useState } from 'react'
import Logo from '../assets/logo_primary.svg'
import { Button } from '../components/Button'
import { Input } from '../components/input'


export function SignIn() {
    const { colors } = useTheme()
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')

    return (
        <VStack flex={1} alignItems='center' bg={'gray.600'} px={8} pt={24}>

            <Logo />

            <Heading color='gray.100' fontSize='xl' mt={20} mb={6}>
                Acesse sua conta {name}
            </Heading>

            <Input
                autoComplete='off'
                placeholder='E-mail'
                mb={4}
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
                onChangeText={setName}
            />
            
            <Input
                autoComplete='off'
                placeholder='Senha'
                mb={8}
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
                secureTextEntry
                onChangeText={setPassword}
            />
            
            <Button title='Entrar' w='full' />

        </VStack>
    )
}