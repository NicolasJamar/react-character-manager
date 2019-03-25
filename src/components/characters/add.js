import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Add extends Component {

  state = {
    name: '',
    shortDescription: ''
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


  handleSubmit = event => {
    event.preventDefault();

    const obj = {
      name: this.state.name,
      shortDescription: this.state.shortDescription,
      description: this.state.description
    };

    axios.post(`https://character-database.becode.xyz/characters`, obj)
      .then(res => {
         console.log(res);
         console.log(res.data);
       })
  }

  render() {

    return (
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name of your Hero</label>
                <input type="text"  onChange={this.handleChangeName} className="form-control form-control-lg" id="name" placeholder="ex: Super Coder"/>
              </div>
              <div className="form-group">
                <label htmlFor="shortDescription">A short description for your Hero</label>
                <input type="text" onChange={this.handleChangeShortDescription} className="form-control form-control-lg" id="shortDescription" placeholder="ex: He can code blindfolded"/>
              </div>
              <div className="form-group">
                <label htmlFor="descriptionHero">Give more background for your Hero</label>
                <textarea className="form-control" onChange={this.handleChangeDescription} rows="5" id="descriptionHero"></textarea>
              </div>
              <div className="input-group mb-3">
                <div className="custom-file">
                  <label className="custom-file-label" htmlFor="imageHero">Choose a picture for your hero</label>
                  <input type="file" className="custom-file-input" id="imageHero"/>
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
