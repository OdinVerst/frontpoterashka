import {useContext} from 'react'
import ThemeContext from "../../context/theme/themeContext";

import './theme.styles.css';

export const Theme = () => {
    const themeContext = useContext(ThemeContext);
    const {setTheme} = themeContext;

    const toggleThemeHandler = () => {
        setTheme(themeContext.theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <button onClick={toggleThemeHandler} aria-label="Set dark theme"
                className={`theme ${themeContext.theme === 'dark' ? 'active' : ''}`}/>
    )
};