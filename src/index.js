import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.scss';
import './css/hover.scss';
import './css/index.scss';
import App from './components/app';
/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faTrash, faSearch);


ReactDOM.render(
<HashRouter>
  <App />
</HashRouter>, document.getElementById('root'));
