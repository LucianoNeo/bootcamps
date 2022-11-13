import React, { useState } from 'react'
import { StyledRegisterVideo } from './styles'
import { supabase } from '../../services/api'
import { getThumbnail } from '../../Tools/index'



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
            console.log(data)
        },
        clearForm() {
            setData({ title: '', url: '', category: '', })
        }
    }
}



export default function RegisterVideo() {


    const formRegistration = useForm({
        initialValues: {
            title: '', url: '', category: ''
        }
    })
    const [visible, setVisible] = useState(false)


    return (

        <StyledRegisterVideo>
            <button className='add-video' onClick={() => setVisible(true)}>+</button>
            {visible &&
                <form onSubmit={(e) => {
                    e.preventDefault()
                    supabase.from('video').insert({
                        title: formRegistration.data.title,
                        url: formRegistration.data.url,
                        thumb: getThumbnail(formRegistration.data.url),
                        playlist: formRegistration.data.category,
                    })
                        .then((res) => {
                            console.log(res)
                        })
                    formRegistration.clearForm()
                    setVisible(false)
                }}>
                    <div>
                        <button className='close-modal' onClick={() => {
                            setVisible(false)
                            formRegistration.clearForm()
                        }}>X</button>
                        <select name="category" id="" value='Selecione a categoria'
                            onChange={formRegistration.handleChange}
                        >
                            <option value="Selecione a categoria" disabled>Selecione a categoria</option>
                            <option value="jogos" >Jogos</option>
                            <option value="front-End" >Front-End</option>
                            <option value="back-End" >Back-End</option>
                        </select>
                        <input
                            type="text"
                            placeholder='Título do Vídeo'
                            value={formRegistration.data.title}
                            onChange={formRegistration.handleChange}
                            name='title'
                        />
                        <input
                            type="text"
                            placeholder='https://www.youtube.com/watch?v=ID_do_VIDEO'
                            value={formRegistration.data.url}
                            onChange={formRegistration.handleChange}
                            name='url'
                        />
                        <button type='submit'>Cadastrar</button>
                        {
                            formRegistration.data.url.length == 43 ?
                                <img src={getThumbnail(formRegistration.data.url)} alt="" />
                                :
                                <div>
                                    <p> URL Inválida!</p>
                                    <p>Formato aceito: https://www.youtube.com/watch?v=ID_do_VIDEO</p>

                                </div>
                        }
                    </div>

                </form>
            }
        </StyledRegisterVideo >

    )
}
