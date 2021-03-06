import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';

// MovieItem class Component to get movies and move to details page
class MovieItem extends Component {
  clickDetails = (event) => {
    this.props.dispatch({
      type: 'GET_MOVIES',
      payload: this.props.movies.id,
    });
    this.props.history.push(`/details/${this.props.movies.id}`);
  };

  render() {
    return (
      <div>
        <div key={this.props.movies.id}></div>
        <div>{this.props.movies.title}</div>
        <div>
          <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="baseline"
          >
            <img
              alt="moviePoster"
              src={this.props.movies.poster}
              onClick={this.clickDetails}
            />
          </Grid>
        </div>
        <div>{this.props.movies.description}</div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapStateToProps)(MovieItem));
