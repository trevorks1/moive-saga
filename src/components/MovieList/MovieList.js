import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  render() {
    return (
      <div>
        <p>Movie List!</p>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(MovieList);
