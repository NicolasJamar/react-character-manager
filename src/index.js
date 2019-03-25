import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.scss';
import './css/hover.scss';
import './css/index.scss';
import App from './components/app';



ReactDOM.render(
<HashRouter>
  <App />
</HashRouter>, document.getElementById('root'));
