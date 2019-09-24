import React, { Component } from 'react';
import { render } from 'react-dom';
import Tile from './todotile';
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Tile/>
       </div> 
    );
  }
}

render(<App />, document.getElementById('root'));
