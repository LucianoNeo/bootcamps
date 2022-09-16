import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
    return (
        <input
            {...props}
            className='bg-zinc-900 rounded py-3 px-4 text-sm placeholder:text-zinc-500'
            id='game'/>
           
    )
}
