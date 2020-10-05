import React from 'react';
import styled from 'styled-components';

import {Link , withRouter} from 'react-router-dom'
const Ul = styled.ul`
  margin: 0px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    color: ${props => props.theme.textLight};
  }


  li:hover {
    border-bottom: 2px solid ${props => props.theme.borderLight};
    background-color: ${props => props.theme.backgroundTitle2};
    border-top: 2px solid ${props => props.theme.borderLight};
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${props => props.theme.backgroundTitle};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0px;
    right: 0px;
    height: 100vh;
    width: 200px;
    transition: transform 0.3s ease-in-out;

  }
`;



const RightNav = ({ open ,onclick}) => {
  return (
    <Ul open={open} onClick = {onclick}>
      <li><Link to = "/portfolio/home">Home</Link></li>
      <li><Link to = "/portfolio/contact">About Me</Link></li>
      <li><Link to = "/portfolio/portfolio">Portfolio</Link></li>
      <li><Link to = "/portfolio/curiculumvitae">Curiculum Vitae</Link></li>
    </Ul>
  )
}

export default RightNav
