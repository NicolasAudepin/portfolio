import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100vw;
  height: 55px;
  background-color:${props => props.theme.backgroundSection};
  color: ${props => props.theme.textLight};
  border-bottom: 2px solid #CCCCCC;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`


const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Nav Bar
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
