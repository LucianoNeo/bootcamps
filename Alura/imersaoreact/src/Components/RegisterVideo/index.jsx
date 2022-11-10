import React, { useState } from 'react'
import { StyledRegisterVideo } from './styles'

function useForm(formProps) {
    const [data, setData] = useState(formProps.initialValues)
    return {
        data,
        handleChange: (e) => {
            const value = e.target.value
            const name = e.target.name
            setData(
                {
                    ...data,
                    [name]: value
                })
        },
        clearForm() {
            setData({ title: '', url: '' })
        }
    }
}


export default function RegisterVideo() {


    const formRegistration = useForm({
        initialValues: {
            title: '', url: ''
        }
    })
    const [visible, setVisible] = useState(false)


    return (

        <StyledRegisterVideo>
            <button className='add-video' onClick={() => setVisible(true)}>+</button>
            {visible &&
                <form onSubmit={(e) => {
                    e.preventDefault()
                    formRegistration.clearForm()
                    setVisible(false)
                }}>
                    <div>
                        <button className='close-modal' onClick={() => setVisible(false)}>X</button>
                        <input
                            type="text"
                            placeholder='Título do Vídeo'
                            value={formRegistration.data.title}
                            onChange={formRegistration.handleChange}
                            name='title'
                        />
                        <input
                            type="text"
                            placeholder='URL'
                            value={formRegistration.data.url}
                            onChange={formRegistration.handleChange}
                            name='url'
                        />
                        <button type='submit'>Cadastrar</button>
                    </div>
                </form>
            }
        </StyledRegisterVideo>

    )
}
