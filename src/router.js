import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import App1 from './App1';

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={App} />
        <Route path="/test" component={App1} />
      </div>
    );
  }
}

export default Routes;
