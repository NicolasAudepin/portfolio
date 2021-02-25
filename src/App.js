import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';
import styled from 'styled-components';

import NavBar from './Components/Nav/Navbar'
import ScrollToTop from './Components/ScrollToTop'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import CurriculumPage   from './Pages/CurriculumPage'
import PortfolioPage   from './Pages/PortfolioPage'

import Inktober from './Pages/Projects/Inktober'
import SweetDawn from './Pages/Projects/SweetDawn';
import GlitchArt from './Pages/Projects/GlitchArt';

import { builder, BuilderComponent } from '@builder.io/react';

const StyledApp = styled.div`
  background-color: ${props => props.theme.backgroundMain};

`;




class App extends Component {



  render(){
    

    builder.init("e39eca09b6a0499cb19c8b37cb873437");

    return (
      <StyledApp className="App">
        <Router className="App-header" >
          <NavBar/>
          <ScrollToTop/>
          <Switch>
            <Route path = "/portfolio/home" exact component = {() => <Home/>} />
            <Route path = "/portfolio/curriculumvitae" exact component = {() => <CurriculumPage/>} />
            <Route path = "/portfolio/portfolio" exact component = {() => <PortfolioPage/>} />
            <Route path = "/" exact component = {() => <Home/>} />
            <Route path = "/portfolio/contact" exact component = {() => <Contact/>} />
            <Route path = "/portfolio/projects/inktober" exact component = {() => <Inktober/>} />
            <Route path = "/portfolio/projects/sweetdawn" exact component = {() => <SweetDawn/>} />
            <Route path="/portfolio/projects/glitchart" render={() => <BuilderComponent model="page" url="/glitch-art" />}></Route>
            <Route path="/portfolio/projects/classroom" render={() => <BuilderComponent model="page" url="/the-classroom" />  }></Route>
            <Route path="/portfolio/projects/music" render={() => <BuilderComponent model="page" url="/music" />  }></Route>
            
            
            
  
          </Switch>                
        </Router>
      </StyledApp>
    )
  };
}

export default App;

