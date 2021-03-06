import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  
  height: 40px;
  background-color:${props => props.theme.backgroundSection};
  color: ${props => props.theme.textLight};
  border-bottom: 2px solid ${props => props.theme.borderLight};
  
  margin: 0px;
  padding: 10px;

  display: flex;
  flex-direction: row;
  

  a{
    text-decoration: none;
    color: ${props => props.theme.textLight};
  }
  .logo {
    
  }
`


const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default Navbar
