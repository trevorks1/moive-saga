import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AddMoviePage from '../pages/AddMoviePage/AddMoviePage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import HomePage from '../pages/HomePage/HomePage';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="App-header">Movies!</h1>
          <nav>
            <h3 classNAme="App-homepage">
              <Link to="/">Home Page</Link>
            </h3>
            <h3>
              <Link to="/add">Add New Movie</Link>
            </h3>
          </nav>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details/:id" component={DetailsPage} />
          <Route exact path="/add" component={AddMoviePage} />
        </div>
      </Router>
    );
  }
}

export default App;
