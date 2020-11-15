import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../../components/MovieItem/MovieItem';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  handlePosterClick = (event) => {
    this.props.history.push('/details/');
  };

  render() {
    const moviesArray = this.props.reduxState.movies.map((item, index) => {
      return <MovieItem key={index} movies={item} />;
    });
    return (
      <div>
        <ul>{moviesArray}</ul>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(HomePage);
