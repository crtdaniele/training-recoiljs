import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<RecoilRoot><Router><App /></Router></RecoilRoot>, document.getElementById('root'));

serviceWorker.unregister();