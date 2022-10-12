
import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps, TextInputRootProps } from './TextInput'
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: (
            <>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input placeholder='What a mess...'
                />
            </>
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: (
            <>
                <TextInput.Input placeholder='What a mess...'
                />
            </>
        ),
    },
}
