import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  li:hover {
    border-bottom: 2px solid #FFFFFF;
    background-color: ${props => props.theme.backgroundTitle2};
    border-top: 2px solid #FFFFFF;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${props => props.theme.backgroundTitle};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0px;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About Me</li>
      <li>Contact Me</li>
      <li>Curiculum Vitae</li>
      <li>Portfolio</li>

    </Ul>
  )
}

export default RightNav
