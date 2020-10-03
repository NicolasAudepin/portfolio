import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './Components/Nav/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router className="App-header">
        <NavBar/>
        <image scr = "images/collage.png"/>
        <Switch>
          <Route path = "/portfolio/home" exact component = {() => <Home/>} />
          <Route path = "/" exact component = {() => <Home/>} />
          <Route path = "/portfolio/contact" exact component = {() => <Contact/>} />
          

        </Switch>                
      </Router>
    </div>
  );
}

export default App;
