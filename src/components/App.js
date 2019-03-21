import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/index.css';

const API = 'https://character-database.becode.xyz/characters';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ character: data }));
  }

  render() {
    const { character } = this.state;

    return (
      <React.Fragment>
      <div className="container">
        <div className="row">
          {character.map(character =>
            <div class="card" style={{width: 35 + 'rem'}}>
              <img src={`data:image/jpeg;base64,${character.image}`} style={{width: 100 + 'px'}} className="rounded-circle" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{character.name}</h5>
                <p class="card-text">{character.shortDescription}</p>
              </div>
            </div>
            // <div key={character.id} className="col-sm-6">
            //   <div className="card text-black bg-light mb-3 p-5">
            //     <div className="row no-gutters">
            //       <div className="col-md-4 my-auto">
            //         <img src={`data:image/jpeg;base64,${character.image}`} className="rounded-circle" alt="..."/>
            //       </div>
            //       <div className="col-md-8">
            //         <div className="card-body">
            //           <p className="card-text">{character.name}</p>
            //           <p className="card-text">{character.shortDescription}</p>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            )
          }
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
