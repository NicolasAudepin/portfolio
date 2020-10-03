import React from 'react';
import PropTypes from 'prop-types'
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


const ArcticleSum = ({title , summary, img}) => {
  return(
    <StyledSummary>
      <header> {title}</header>
      <body>
        <section>
          {summary}
        </section>
        <image scr = {img}/>
      </body>
      
    </StyledSummary>
  )
}

ArcticleSum.propTypes = {
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired,
}


export default ArcticleSum