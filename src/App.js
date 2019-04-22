import React, { Component } from 'react';
import logo from './logo.svg';
import RoomBooking from './containers/RoomBooking';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomBooking />
      </div>
    );
  }
}

export default App;
