import React, { Component } from 'react';
import './index.scss';
import logo from '../../logo.svg'

class MiddleSection extends Component {
  render() {
    return (
        <div className="middle-section">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" /> 
          </header>
        </div>
    );
  }
}

export default MiddleSection;