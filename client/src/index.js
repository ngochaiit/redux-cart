import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import App1 from './App1';
import {createStore} from 'redux';
import appReducers from './redux/reducers/index';
import {Provider} from 'react-redux'

const store = createStore(appReducers);

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();