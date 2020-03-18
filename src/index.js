import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import MainNavBar from './components/NavBar';
import Main from './components/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainNavBar />, document.getElementById('navigation'));
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
