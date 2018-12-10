import React, { Component } from 'react';
// import logo from './logo.svg';
import './index.scss';
import LeftSection from './left-section';
import MiddleSection from './middle-section';
import RightSection from './right-section';

class Home extends Component {
  render() {
    return (
        <div id="reviews-home">
        <div className="row">
            <div className="col-sm-3">
                <LeftSection />
            </div>
            <div className="col-sm-7">
                <MiddleSection />
            </div>
            <div className="col-sm-2">
                <RightSection />
            </div>
            </div>
        </div>
    );
  }
}

export default Home;