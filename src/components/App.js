import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.scss';
import '../css/hover.scss';
import 'bootstrap/dist/css/bootstrap.css';


const API = 'https://character-database.becode.xyz/characters';

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

     return bgColor;
    }
random_bg_color();

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
      <div className="container-fluid">
        <div className="row justify-content-center">
          {character.map(character =>
            <div class="card border-danger p-3 m-2 hvr-buzz" id="card_body_bg" style={{width: 25 + 'rem', background:random_bg_color() }}>
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
