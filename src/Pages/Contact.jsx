import React from 'react';
import styled from 'styled-components';
import {BigSection,Limitedwidth} from '../Components/Section';



const Section = styled.section`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: flex-start;


  
`;



const About = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  margin: 3px;
  border-bottom: 1px solid ${props => props.theme.textLight};
`;

const Txt = styled.div`
  width : 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height:auto;
    display: block;
  }
`;

const Imagestyled = styled.img`
  width : 50%;
  border-radius:50%;
  height: auto;
  margin: 3px;

  @media only screen and (max-width: 600px) {
    
    display: block;
    margin-left: auto;
    margin-right: auto
  }
`;


const Contact = () => {
  return(
    <Section>
      <BigSection>
      <Limitedwidth>
          <About>
            <Txt >
            Hi! My name is Nicolas Audepin and I am an engineering student from Paris. I try to find a way to mix my two passions, art and artificial intelligence. I am currently working on around a million projects and the most important one is called Sweet Dawn. It’s about the creation of an interactive art piece combining music, video and space in which you interact with an AI.
            I am also currently participating to the Inktober and building this website myself.

            </Txt>
            <Imagestyled src = "images/me.JPG" alt ="me"/>          


          </About>

          <section>
            You can contact me by sending me a mail at nicolas.audepin@gmail.com          
        
          </section>
          <section>
            If you prefere you can contact me on those social networks:    
            <ul>
              <li><a href="https://www.linkedin.com/in/nicolas-audepin-619a0213a/">LinkedIn</a>  </li>
              <li><a href="https://github.com/NicolasAudepin">Github</a></li>
              <li><a href="https://www.youtube.com/channel/UCAuiFLj97V0GXFoSatMMDvw?view_as=subscriber">Youtube</a></li>
              <li><a href="https://soundcloud.com/astronaut_fr">Soundcloud</a></li>              
            </ul>
          </section>
                 
        </Limitedwidth>

          
      </BigSection>
    </Section>
  )
 }

export default Contact ;

