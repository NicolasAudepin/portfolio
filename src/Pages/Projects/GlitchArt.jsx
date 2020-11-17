import React from 'react';
import styled,{ css } from 'styled-components';
import {VariableArticleList,MargedSection,Page} from '../../Components/Section';


const Background = styled.section`
  display:flex;
  flex-direction:column;
  position:absolute;
  left:0vw;
  background-color:magenta;
  z-index:0;
`;

const Foreground = styled.section`
  display:flex;
  flex-direction:column;
  position:absolute;
  width:100%;
  overflow:hidden;
  
  z-index:10;
`;

const TextSection = styled.section`
  background-color: rgba(0,0,0,0.5); 
  color : ${props => props.theme.backgroundSection};
  
  margin:10px;
  padding:10px;

`;

const TitleSextion = styled.section`
  display:flex;
  position:absolute;
  left: 0px;
  background-color: rgba(0,0,0,0.5); 
  color : ${props => props.theme.backgroundSection};
  margin:10px;
  padding:10px;
  font-size:400%;
`;

const BigImage = styled.img`
  
  width:100vw;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  
`;

const Bigpic = ({pathinpublic})=>{return(
  
    <BigImage src = {process.env.PUBLIC_URL + pathinpublic}></BigImage>

  
)};

const GlitchArt = () => { 
    return(
      <Page>
        <Background>
        <Bigpic pathinpublic = "/images/glitch.jpg"></Bigpic>
        <Bigpic pathinpublic = "/images/glitchart.jpg"></Bigpic>
        <Bigpic pathinpublic = "/images/glitch.jpg"></Bigpic>
        </Background>

        <Foreground>
          <TitleSextion>Glitch_Art_v1</TitleSextion>
          <TextSection>
            I made a tool to create images.
          </TextSection>
        </Foreground>
  

  
      </Page>
    )
  }
  
  export default GlitchArt ;
  
  