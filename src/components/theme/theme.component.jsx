import {useContext, useState} from 'react'
import './theme.styles.css';
import ThemeContext from "../../context/theme/themeContext";

export const Theme = () => {
    let [ isActive, setIsActive ] = useState(false);
    const themeContext = useContext(ThemeContext);
    const { setTheme } = themeContext;

    const toggleThemeHandler = () => {
        setTheme(isActive ? 'ligth': 'dark')
        setIsActive(!isActive);
    }

    return (
        <button onClick={toggleThemeHandler} aria-label="Set dark theme" className={`theme ${isActive ? 'active' : ''}`}/>
    )
};