import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
    body {
        min-height: 100vh;
        background: linear-gradient(to right, #43c6ac, #191654);
        margin: 0; 
        padding: 0;
        font-family: 'Yantramanav', sans-serif;
    }
`;

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
