import React, { Component } from 'react';
import { Router, Route,Switch} from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Details from './components/details/layout';
import NewPostStep from './components/new-post/check-login';
import { history } from './index';

class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header  />
            <Route exact path="/" component={App} />
            <Route path="/details" component={Details} />
            <Route path="/new-post" component={NewPostStep} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;
