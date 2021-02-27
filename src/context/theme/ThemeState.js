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
        distpatch({ type: SET_THEME, payload: value })
    }

	return (
		<ThemeContext.Provider
			value={{
				theme: state.theme,
                setTheme
			}}
		>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeState;
