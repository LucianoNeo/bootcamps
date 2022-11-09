import React, { createContext, useRef, useState } from 'react'

export const VideoContext = createContext({
    title: 'Vídeo não carregado...',
    url: 'URL não carredada...'
})


export default function VideoProvider(props) {

    const title = useRef()
    const url = useRef()
    return (
        <VideoContext.Provider value={{ title, url }}>
            {props.children}
        </VideoContext.Provider>

    )
}
