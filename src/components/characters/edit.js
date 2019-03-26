import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const API = 'https://character-database.becode.xyz/characters/';


export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.handleChangeName = this.handleChangeName.bind(this);

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

  handleChangeName = event => {
    this.setState({name: event.target.value});
  }

  handleChangeShortDescription = event => {
    this.setState({shortDescription: event.target.value});
  }

  handleChangeDescription = event => {
    this.setState({description: event.target.value});
  }

  handleChangeImg(i) {
    i.preventDefault();

    let reader = new FileReader();
    console.log(reader);
    let file = i.target.files[0];
    let output = document.getElementById('output');

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });

      output.src = reader.result
    }
    reader.readAsDataURL(file)
  }

  handleSubmit = event => {
    event.preventDefault();

    const obj = {
      name: this.state.name,
      shortDescription: this.state.shortDescription,
      description: this.state.description,
      image: this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(',') + 1)
    };

    axios.put(`https://character-database.becode.xyz/characters`+this.props.match.params.id, obj)
      .then(res => {
         console.log(res);
         console.log(res.data);
         this.props.history.push('/')
       })
  }

  render() {
    const { character } = this.state;

    return (
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name of your Hero</label>
                <textarea type="text"  onChange={this.handleChangeName} className="form-control form-control-lg" id="name" value={character.name}/>
              </div>
              <div className="form-group">
                <label htmlFor="shortDescription">A short description for your Hero</label>
                <input type="text" onChange={this.handleChangeShortDescription} className="form-control form-control-lg" id="shortDescription" value={character.shortDescription} placeholder="ex: He can code blindfolded"/>
              </div>
              <div className="form-group">
                <label htmlFor="descriptionHero">Give more background for your Hero</label>
                <textarea className="form-control" onChange={this.handleChangeDescription} rows="5" value={character.description} id="descriptionHero"></textarea>
              </div>
              <div className="input-group mb-3">
                <div className="custom-file">
                  <label className="custom-file-label" htmlFor="imageHero">Choose a picture for your hero</label>
                  <input type="file" className="custom-file-input" id="imageHero" onChange={(i)=>this.handleChangeImg(i)} />
                  <div><img className="output" id="output" src={`data:image/jpeg;base64,${character.image}`} /></div>
                </div>
              </div>
              <div className="text-center m-2">
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}
