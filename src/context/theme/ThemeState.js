import React, { useReducer } from 'react';

import ThemeContext from './themeContext';
import themeReducer from './themeReduser';
import {SET_THEME} from '../types';

const ThemeState = props => {
	const initialState = {
		theme: 'auto'
	};

	const [state, distpatch] = useReducer(themeReducer, initialState);

	const setTheme = (value) => {
        localStorage.setItem('theme_value', value);
        distpatch({ type: SET_THEME, payload: value });
    }

    const setInitValueTheme = () => {
        const preference_query = window.matchMedia('(prefers-color-scheme: dark)');
        const value = preference_query.matches ? 'dark' : 'light';

        const customValue = localStorage.getItem('theme_value');
        distpatch({ type: SET_THEME, payload: customValue ?  customValue : value })
    }

	return (
		<ThemeContext.Provider
			value={{
				theme: state.theme,
                setTheme,
                setInitValueTheme
			}}
		>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeState;
