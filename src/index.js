import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import Main from './components/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
