import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Main from './components/';

const GlobalStylesheet = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        font-display: auto;
        src: local('Roboto'), url('assets/fonts/Roboto-Regular.ttf');
    }
    
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

ReactDOM.render(
    <React.Fragment>
        <GlobalStylesheet />
        <Main />
    </React.Fragment>,
    document.getElementById('root')
);
