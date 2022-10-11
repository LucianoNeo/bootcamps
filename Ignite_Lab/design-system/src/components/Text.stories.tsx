import { Text } from './Text'
import { Meta, StoryObj } from '@storybook/react'
import { TextProps } from './Text'


export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsiLUM',

    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta

export const Default: StoryObj = {}

export const Small: StoryObj = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testando paragrafo</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
}