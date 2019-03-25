import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const API = 'https://character-database.becode.xyz/characters';

/* Function for generating a random color for the background of the cards */
function random_bg_color() {
    // For really random colors
    // let x = Math.floor(Math.random() * 256);
    // let y = Math.floor(Math.random() * 256);
    // let z = Math.floor(Math.random() * 256);
    // let bgColor = "rgb(" + x + "," + y + "," + z + ")";

    // For more controlled colors
    // let colors_dark = ["#7F1842", "#7D1E6A", "#01877C", "#B58A08", "#A1412C"];
    let colors_bright = ["#CC276A", "#C72FA8", "#01CCBC", "#F7BC0B", "#E85E40"];
    let colors = colors_bright;
    let bgColor = colors[Math.floor(Math.random()*colors.length)];

     return bgColor;
    }

export default class Home extends Component {

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
        <Link to="/characters/add" className=" w-100">
          <p>Add a character</p>
        </Link>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {character.map(character =>
            <div key={character.id} className="card border-danger p-3 m-2 hvr-buzz" id="card_body_bg" style={{width: 30 + 'rem', height: 10 + 'rem', background:random_bg_color() }}>
              <div className="card-body">
                <img src={`data:image/jpeg;base64,${character.image}`} style={{width: 100 + 'px'}} className="rounded-circle float-left mr-5" alt={character.name}/>
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.shortDescription}</p>
                <p><FontAwesomeIcon icon="edit" /><FontAwesomeIcon icon="trash" /></p>
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
