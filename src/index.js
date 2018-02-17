import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import IntlProvider from './intl-provider';

import { store } from './store';

import Container from './App'



ReactDOM.render(
    <Provider store={store}>
        <IntlProvider>
        <Container />
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
);
