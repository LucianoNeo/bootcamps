import React, { createContext, useContext, useState } from 'react'

export const ColorModeContext = createContext({
    mode: 'dark',
})


export default function ColorModeProvider(props) {

    const [mode, setMode] = useState(props.initialMode)
    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode }}>
            {props.children}
        </ColorModeContext.Provider>

    )
}
