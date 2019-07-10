import React, { Component } from 'react';
import logo from './logo.svg';
import photo from './Vishnu-Photo.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, This is Vishnu Yeni Shetty
          </p>
          <p>
            We will use this website for future deployments
          </p>
        </header>
      </div>
    );
  }
}

export default App;
