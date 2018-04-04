import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js'

class App extends Component {
  constructor() {
    super();
    this.people = {
      people: []
    };
  }

  componentDidMount() {
    this.setState({ people: people.data });
  }
  
  render() {
    return (
      <CitiesList greeting="Hello" name="Ryan" citiesProp={this.state.cities} />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;