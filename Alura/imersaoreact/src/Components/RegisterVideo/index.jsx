import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { supabase } from '../../services/api';
import { getThumbnail } from '../../Tools/index';
import { StyledRegisterVideo } from './styles';



export default function RegisterVideo() {
    const [visible, setVisible] = useState(false)
    const [url, setURL] = useState('')
    const { register, handleSubmit, formState: { errors }, getValues, resetField } = useForm();

    const onSubmit = (data) => {
        supabase.from('video').insert({
            title: data.title,
            url: data.url,
            thumb: getThumbnail(data.url),
            playlist: data.category,
        })
            .then((res) => {
                console.log(res)
            })
        setVisible(false)

    }


    return (

        <StyledRegisterVideo>
            <button className='add-video' onClick={() => setVisible(true)}>+</button>
            {visible &&
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <button className='close-modal' onClick={() => {
                            setVisible(false)
                            resetField('title')
                            resetField('url')

                        }}>X</button>
                        <select
                            {...register("category")}

                        >
                            <option value="Selecione a categoria" disabled>
                                Selecione a categoria
                            </option>
                            <option value="jogos" >Jogos</option>
                            <option value="Front-End" >Front-End</option>
                            <option value="Back-End" >Back-End</option>
                        </select>

                        {errors.title ?
                            <span>{errors.title.message}</span>
                            :
                            null
                        }
                        <input
                            {...register("title", {
                                required: 'Campo obrigatório',
                                minLength: {
                                    value: 1,
                                    message: 'Você deve fornecer um título!'
                                }
                            })}

                            placeholder='Título do Vídeo'

                        />
                        {errors.url ?
                            <span>{errors.url.message}</span>
                            :
                            null
                        }
                        <input
                            {...register("url", {
                                required: 'Campo obrigatório',
                                minLength: {
                                    value: 43,
                                    message: `URL Inválida! Modelo: ${'\n'} https://www.youtube.com/watch?v=x6oF3Jxu7X0`
                                },
                                maxLength: {
                                    value: 43,
                                    message: `URL Inválida! Modelo: ${'\n'} https://www.youtube.com/watch?v=x6oF3Jxu7X0`
                                },
                            })}


                            placeholder='https://www.youtube.com/watch?v=ID_do_VIDEO'

                            onChange={(e) => setURL(e.target.value)}

                        />


                        <button type='submit'>Cadastrar</button>
                        {
                            url.length === 43
                                ?
                                <img src={getThumbnail(url)}
                                    alt="Thumbnail do vídeo" />
                                :
                                null

                        }
                    </div>

                </form>
            }
        </StyledRegisterVideo >

    )
}
