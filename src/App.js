import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './Components/Nav/Navbar'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router className="App-header">
        <NavBar/>

          
      </Router>
    </div>
  );
}

export default App;
