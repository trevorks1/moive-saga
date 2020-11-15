import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class DetailsPage extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.dispatch({
      type: 'GET_DETAILS',
      payload: this.props.match.params.id,
    });
  }

  onBackToList = (event) => {
    this.props.history.push('/');
  };

  render() {
    const { movieDetails } = this.props.reduxState;
    return (
      <div>
        <div>
          <div>
            <h2>Movie Details</h2>
          </div>
          <div>
            <p>Title: {movieDetails.title}</p>
            <p>Genre: {movieDetails.name}</p>
            <img alt="movieDetails" src={movieDetails.poster} />
            <p>Description: {movieDetails.description}</p>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onBackToList}
          >
            Back to List
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapStateToProps)(DetailsPage));
