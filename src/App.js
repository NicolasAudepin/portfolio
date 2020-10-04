import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './Components/Nav/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: ${props => props.theme.backgroundMain};

`;


function App() {
  return (
    <StyledApp className="App">
      <Router className="App-header">
        <NavBar/>
        <Switch>
          <Route path = "/portfolio/home" exact component = {() => <Home/>} />
          <Route path = "/" exact component = {() => <Home/>} />
          <Route path = "/portfolio/contact" exact component = {() => <Contact/>} />
          

        </Switch>                
      </Router>
    </StyledApp>
  );
}

export default App;
