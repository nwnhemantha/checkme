import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './reviews/Home';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Home/>
        
      </div>
      );
  }
}

export default App;


{/* <header className="App-header"> */}
{/* <img src={logo} className="App-logo" alt="logo" /> */}
 
// </header>