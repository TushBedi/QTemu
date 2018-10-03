import React, { Component } from 'react';

import Navbar from './components/Navbar'
import MeetupProfile from './components/MeetupProfile'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <MeetupProfile/>
      </div>
    );

    
  }
}

export default App;
