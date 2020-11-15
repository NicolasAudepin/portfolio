import React, { Component } from 'react';
import styled,{ css } from 'styled-components';

const SimpleButton = styled.a`
  margin: 20px;
  border: 3px solid ${props => props.theme.textLight};
  padding: 10px;
  display:block;
  color : ${props => props.theme.backgroundSection};
  text-decoration: none;
  font-weight: bold;
  background-color:${props => props.theme.textLight}; 
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  :hover {
    border: 3px solid ${props => props.theme.backgroundSection};
    box-shadow: 2px 8px 30px rgba(0, 0, 0, 0.5);
  }

  :active {
    border: 3px solid ${props => props.theme.textLight};
    box-shadow: 2px 8px 30px ${props => props.theme.backgroundSection};
    background-color:${props => props.theme.backgroundSection}; 
    color : ${props => props.theme.textLight};
  }
`;


export {SimpleButton};