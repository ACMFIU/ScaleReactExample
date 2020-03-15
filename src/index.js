import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import MainNavBar from './components/NavBar';
import Main from './components/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainNavBar />, document.getElementById('navigation'));
ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
