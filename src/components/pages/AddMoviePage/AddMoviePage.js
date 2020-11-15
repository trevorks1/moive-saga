import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class AddMoviePage extends Component {
  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
    },
  };

  handleInputChange = (input) => (event) => {
    this.setState({
      ...this.state.newMovie,
      [input]: event.target.value,
    });
  };

  addNewMovie = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'POST_MOVIE',
      payload: this.state.newMovie,
    });
    this.setState({
      newMovie: {
        title: '',
        poster: '',
        description: '',
      },
    });
  };

  onCancel = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Movie Title"
            name="title"
            onChange={this.handleInputChange('title')}
          ></input>
          <input
            type="text"
            placeholder="Poster URL"
            name="image"
            onChange={this.handleInputChange('poster')}
          ></input>
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleInputChange('description')}
          ></input>
          <select
            value={this.state.input}
            onChange={this.handleInputChange('genre_id')}
          >
            <option value="adventure">Adventure</option>
            <option value="animated">Animated</option>
            <option value="biographical">Biographical</option>
            <option value="comedy">Comedy</option>
            <option value="disaster">Disaster</option>
            <option value="Drama">Drama</option>
            <option value="epic">Epic</option>
            <option value="fantasy">Fanstasy</option>
            <option value="musical">Musical</option>
            <option value="romantic">Romantic</option>
            <option value="science fiction">Science Fiction</option>
            <option value="space-opera">Space-Opera</option>
            <option value="superhero">Superhero</option>
          </select>
        </div>
        <div>
          <Button
            onClick={this.addNewMovie}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <div>
            <Button onClick={this.onCancel} variant="contained" color="primary">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(AddMoviePage);
