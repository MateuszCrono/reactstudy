import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './components/App/App';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
