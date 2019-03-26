import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const API = 'https://character-database.becode.xyz/characters/';


export default class Show extends Component {
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
    const response = await fetch(API + this.props.match.params.id);
    const data = await response.json();
    console.log(JSON.stringify(response.data));

    this.setState({ character: data });
  }

  render() {
    const { character } = this.state;

    return (
      <React.Fragment>
      <div className="container-fluid">

         <h5 className="card-title">{character.name}</h5>
         <div>{character.description}</div>

        </div>

      </React.Fragment>
    );
  }
}
