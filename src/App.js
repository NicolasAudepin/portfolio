import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import styled from 'styled-components';

import NavBar from './Components/Nav/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import CurriculumPage   from './Pages/CurriculumPage'

import Inktober from './Pages/Projects/Inktober'
import SweetDawn from './Pages/Projects/SweetDawn';
import GlitchArt from './Pages/Projects/GlitchArt';


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
          <Route path = "/portfolio/curriculumvitae" exact component = {() => <CurriculumPage/>} />
          <Route path = "/" exact component = {() => <Home/>} />
          <Route path = "/portfolio/contact" exact component = {() => <Contact/>} />
          <Route path = "/portfolio/projects/inktober" exact component = {() => <Inktober/>} />
          <Route path = "/portfolio/projects/sweetdawn" exact component = {() => <SweetDawn/>} />
          <Route path = "/portfolio/projects/glitchart" exact component = {() => <GlitchArt/>} />

          
          

        </Switch>                
      </Router>
    </StyledApp>
  );
}

export default App;
