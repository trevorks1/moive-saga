import React, { Component } from 'react’;
import { connect } from 'react-redux’;

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  handleClick = (event) => {
    this.props.history.push('/details');
  };

  render() {
    const moviesArray = this.props.reduxState.movies.map((item, index) => {
      return (
        <div>
          <div key={item.id}></div>
          <div>{item.title}</div>
          <div>
            <img src={item.poster} onClick={this.handleClick} />
          </div>
          <div>{item.description}</div>
        </div>
      );
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

export default connect(mapStateToProps)(Home);
