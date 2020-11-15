import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

// Adding a movie and filtering Genres with a join to Add Movie to the home page and DB
class AddMoviePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GENRES',
    });
  }

  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
    },
  };

  // When input is altered handle the set of newMovie state and event target
  handleInputChange = (input) => (event) => {
    this.setState({
      newMovie: { ...this.state.newMovie, [input]: event.target.value },
    });
  };

  // Adding new post to db
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
    this.props.history.push('/');
  };

  // Nav back to homepage
  onCancel = (event) => {
    this.props.history.push('/');
  };

  render() {
    const genreArray = this.props.reduxState.genres.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });
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
            {genreArray}
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
