import { useState } from 'react'
import './theme.styles.css';

export const Theme = () => {
    let [ isActive, setIsActive ] = useState(false);

    const toggleThemeHandler = () => {
        setIsActive(!isActive);
    }

    return (
        <button onClick={toggleThemeHandler} aria-label="Set dark theme" className={`theme ${isActive ? 'active' : ''}`}/>
    )
};