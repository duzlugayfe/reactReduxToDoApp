import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { store } from './Redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
reportWebVitals();
