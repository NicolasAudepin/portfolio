import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledSummary = styled.div`
  &{
    text-align: left;
    border-radius: 20px;
    overflow: hidden;
    width : 80vw;
    height : 45vw;
    margin : 0vh;
    color: ${props => props.theme.textLight};
    background-color:${props => props.theme.backgroundSection};

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  }

  &:hover{
    box-shadow:  0px 0px 10px ${props => props.theme.backgroundTitle};;
    
  }


  @media only screen and (max-width: 600px) {
    width : 90vw;
    height : 120vw;
    
    
  }

  a{
    text-decoration: none;
    color: ${props => props.theme.textLight};
  }

`;



const ArticleHead = styled.div`
  text-align: left;
  text-anchor: middle;
  
  font-size : 2em;
  
  background-color: ${props => props.theme.backgroundTitle};
  height: 5vw;
  min-height: 50px;
  
`;

const ArticleBody = styled.div`
  display: flex;
  flex-direction : row;

  @media only screen and (max-width: 600px) {
    flex-direction : column-reverse;
  }


  
`;
const Summary = styled.section`
  padding : 2%;
  
  width : 50%;
  height: 100%;
  @media only screen and (max-width: 600px) {
    width : 100%;
  }
`;

const Imagestyled = styled.img`
  width : 40vw;
  height: 40vw;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height:auto;
    display: block;
  }
`;




const VideoStyled = styled.video`
  width : 40vw;
  height: 40vw;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height:auto;
    display: block;
  }
`;


const ArcticleSum = ({title , summary, img, video, linkPath}) => {
  return(
    <StyledSummary >
      <Link to = {linkPath}>
      
        <ArticleHead> {title}</ArticleHead>
        <ArticleBody>
          <Summary>
            {summary}
          </Summary>

          {video
          ? <VideoStyled src = {img}  alt = {title} autoPlay loop muted />
          : <Imagestyled src = {img}  alt = {title}/>
          }
          
          
        </ArticleBody>
      </Link>
      
    </StyledSummary>
  )
}

ArcticleSum.propTypes = {
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired,
  linkPath : PropTypes.string.isRequired,
}


export default ArcticleSum