import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage/HomePage';

// Use of redux
import { connect } from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

// Map to State Props and reduxState
const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(App);
