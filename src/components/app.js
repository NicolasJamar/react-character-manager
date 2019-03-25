import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Routes from './routes';
import {Link} from 'react-router-dom';


class App extends Component {

  render() {

    return (
      <React.Fragment>
        <div className="container">
          <div className="text-center">
            <Link to="/"><img src={logo} className="logo m-5" alt="logo"/></Link>
          </div>
        </div>
        <div className="container-fluid">
          <Routes />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
