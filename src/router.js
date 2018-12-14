import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import Header from './components/header';

class Routes extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={App} />
      </div>
    );
  }
}

export default Routes;
