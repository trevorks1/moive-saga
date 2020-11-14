import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    return (
      <div>
        <p>Details!</p>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(Details);
