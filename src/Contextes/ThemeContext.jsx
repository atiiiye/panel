import React, { useState } from 'react';

//contexts
import { ContextTheme } from './index'

const ThemeContext = ({ children }) => {

    const [themeColor, setThemeColor] = useState("")

    const handleChangeTheme = () => {
        console.log('ThemeContext');
    }

    const [light] = useState({
        bg: '#000',
        syntax: '#fff'
    })

    const [dark] = useState({
        bg: '#fff',
        syntax: '#000'
    })

    return (
        <React.fragment>
            <ContextTheme.Provider
                value={{
                    dark,
                    light,
                    themeColor,
                    handleChangeTheme,
                }}>
                {children}
            </ContextTheme.Provider>

        </React.fragment>
    );
}

export default ThemeContext;