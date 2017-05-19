import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './index.css';
import App from './App';
import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/about" name="about" component={About} />
      <Route path="/news/:article" name="news" component={News} />
      <Route path="/contact" name="contact" component={Contact} />
    </App>
  </Router>,
  root,
);
