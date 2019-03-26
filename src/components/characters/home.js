import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';


const API = 'https://character-database.becode.xyz/characters/';

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
    this.fetchCharacters();
  }
  componentDidUpdate(){

  }
  async fetchCharacters() {
    const response = await fetch(API);
    const data = await response.json();
    console.log("data", data);
    data.forEach((c) => {
      c.color = random_bg_color();
    });
    this.setState({ character: data });
  }

  async deleteSuperHeros(d){
    await axios.delete("https://character-database.becode.xyz/characters/" + d);
    this.fetchCharacters();
  }

  render() {
    const { character } = this.state;

    return (
      <React.Fragment>
        <div className="text-center">
          <Link to="/characters/add" className=" w-100">
            <button type="button" className="btn btn-success">Add a character</button>
          </Link>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            {character.map(character =>
              <div key={character.id} className="border-danger p-3 m-2 hvr-buzz" id="card_body_bg" style={{width: 30 + 'rem', height: 10 + 'rem' , background: character.color }}>
                <div className="float-left text-center">
                  <img src={`data:image/jpeg;base64,${character.image}`} style={{width: 100 + 'px'}} className="rounded-circle my-auto mr-3" alt={character.name}/>
                  <div className="position-fixed bottom">
                    <Link to={"/characters/show/" + character.id }className=" p-2"><FontAwesomeIcon icon="search" /></Link>
                    <Link to={"/characters/edit/" + character.id }className=" p-2"><FontAwesomeIcon icon="edit" /></Link>
                    <Link to="/" className="p-2" onClick={(d) => { if (window.confirm('Are you sure you wish to delete this super hero?')) this.deleteSuperHeros(character.id) } }><FontAwesomeIcon icon="trash" /></Link>
                  </div>
                </div>
                <h5 className="card-title ">{character.name}</h5>
                <p className="card-text">{character.shortDescription}</p>
              </div>
              )
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}
