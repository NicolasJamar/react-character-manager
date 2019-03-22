import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.scss';
import 'bootstrap/dist/css/bootstrap.css';


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
      <div className="container mx-auto">
        <div className="row">
          {character.map(character =>
            <div class="card border rounded-lg p-3 m-2" id="card_body_bg" style={{width: 25 + 'rem'}}>
              <div class="card-body">
                <img src={`data:image/jpeg;base64,${character.image}`} style={{width: 100 + 'px'}} className="rounded-circle float-left mr-5" alt={character.name}/>
                <h5 class="card-title">{character.name}</h5>
                <p class="card-text">{character.shortDescription}</p>
              </div>
            </div>
            )
          }
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
