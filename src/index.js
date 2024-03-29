import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeState from "./context/theme/ThemeState";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <ThemeState>
        <App />
      </ThemeState>
  </React.StrictMode>,
  document.getElementById('root')
);
