import React from 'react';
import styled from 'styled-components';

const StyledSummary = styled.div`
  
  width : 400px;
  height : 200px;
  margin : 3px;
  color: ${props => props.theme.textLight};
  background-color:${props => props.theme.backgroundSection};

`;

const ArticleBody = styled.body`

`


const ArcticleSum = () => {
  return(
    <StyledSummary>
      <header> TITRE</header>
      <body>
        <section>
          text
        </section>
        <image scr = "images/collage.png"/>
      </body>
      
    </StyledSummary>
  )
}


export default ArcticleSum