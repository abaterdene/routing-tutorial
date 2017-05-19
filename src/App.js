import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();
    console.log(this.props); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="navigator">
            <Button bsStyle="info"> <Link to="/">Home</Link> </Button>
            <Link to="/about">About</Link>
            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link>
          </div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default App;
