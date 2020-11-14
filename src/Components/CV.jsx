import React from 'react';
import styled,{ css } from 'styled-components';
import {VariableArticleList,MargedSection,Page} from '../Components/Section';

const Feuille = styled.section`
  background-color: blue;
`;


const CV = () => {
  return(
    <Feuille>
      <div>
        deep in the ocean dead and castaways where inocence burns in flames
        a million miles from home i'm walking away 
        I'm frosen to the bones I am 

        A soldier on my own I don't know the way.
      </div>
      <div style = {{backgroundColor: "red",}}>
        yolo
      </div>
      
    </Feuille>
  )
}

export default CV;