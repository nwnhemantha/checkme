import React, { Component } from 'react';
// import logo from './logo.svg';
import './index.scss';

class Home extends Component {
  render() {
    return (
        <div id="reviews-home">
        <div className="row">
            <div className="col-sm-3">
                <div className="left-side">left</div>
            </div>
            <div className="col-sm-7">
                <div className="middle-side">middle</div>
            </div>
            <div className="col-sm-2">
                <div className="right-side">right</div>
            </div>
            </div>
        </div>
    );
  }
}

export default Home;