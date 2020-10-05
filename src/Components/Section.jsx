import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const BigSection = styled.section`


  display:flex;
  flex-direction: column;
  align-self: center;
  align-content:center;

  text-align: left;
  text-anchor: middle;
  overflow: hidden;
  margin : 10px;
  border : 30px;
  padding : 10px;
 
  
  width: 90%;
  max-width: 900px;
  min-height: 10vh;

  color: ${props => props.theme.textLight};
  background-color:${props => props.theme.backgroundSection};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;




export default BigSection