import React from 'react';
import styled,{ css } from 'styled-components';
import {VariableArticleList,MargedSection} from '../../Components/Section';




const Page = styled.section`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: flex-start;
`;

const SecTitle = styled.div`
  font-size : larger;
  font-weight: bold;
  margin : 10px;
`;

const SecBody = styled.div`
  
  display: flex;
  flex-direction : row;
  flex-wrap:wrap;
  justify-content: center;
  ${props => props.column && css`
    flex-direction : column;
    align-content: middle;
  `}

`;

const StyledImforSec = styled.img`
  margin : 2px;
  height: auto;
  max-width: ${props => props.width};
  width: ${props => props.width};
  @media only screen and (max-width: 600px) {
    width: 100%;
    height:auto;
    display: block;
  }
`;

function SecImage({src,alt, width}) {
  return(
    <StyledImforSec 
      width = {width}
      src =  {process.env.PUBLIC_URL + src} 
      alt = {alt}
    />
   
  )
};



const SweetDawn = () => { 
  return(
    <Page>
      <MargedSection
        stuff = {
          <div>
            <p>
                I have always been intrested in two things: Art and Science. 
                Both seems to head in opposite directions but always end up colliding.
                Sweet Dawn is one of those collision in the numerical world.   
              </p>
              <p>      
                The goal of Sweet Dawn is to create a corpus of interactive art pieces 
                allowing an active audiance to play visually with artificial intelligences.
                I want it to be a celebration of what can be achived with technology in a sort of safe space before those kind of technologies get too present in our everyday life. 
              </p>

          </div>
        }
      />


      <VariableArticleList>
        <section style={{maxWidth: '600px'}}>
          <SecTitle>Sweet Arpegiato</SecTitle>
          <SecBody >
            <div style={{maxWidth: "300px"}}>
              
              This is the first prototype of interactive piece.
              Trough a webcam my AI looks at the public and starts playing music.  
            </div>
            <SecImage 
              src =  "/images/SweetDawn/sweet arp photo.PNG" 
              alt = "me on a bike" 
              width = "200px"
            />
          </SecBody>

        </section>


        <section style={{maxWidth: '200px',}}>
          <SecBody>
          Most of the soundscapes are generated live using the free software VCV Rack in collaboration with my friend Dean.
          <SecImage 
              src =  "/images/SweetDawn/vcvrack.PNG" 
              alt = "vcvrack is cool!" 
              width = "190px"
            />
          </SecBody>
          
        </section>

        <section style={{maxWidth: '400px'}}>
          <SecTitle>Sweet Ocean</SecTitle>
          <SecBody>
          <div>
            We combined most of the previous ideas into one central piece using the most complexe evolving music yet and some 3D animation and background. 
          </div>
          <SecImage 
              src =  "/images/SweetDawn/sweetOcean.png" 
              alt = "Concept art for Sweet Ocean" 
              width = "400px" />
          </SecBody>
          
        </section>

        <section style={{maxWidth: '600px'}} >
          <SecTitle>In the physical world</SecTitle>
          <SecBody >
            <div style={{maxWidth: "600px"}}>
              <p>
                Right now all of my work for this project only runs on my personnal computer but we want to give it some physical form.
                Dedicating a computer for this project is not exactly in my budget yet. We are thinking about maybe buying a Raspberry pi but it would definitely mean optimising stuff.
              </p>
              <p>
                At the same time we want to present this as soon as possible to a public to see some interaction.
                We are currently under lockdown in France so it is not even possible right now to expose it at home. 
              </p> 
              <p>
                If the situation does not get better I will think about making this project easily downloadable or maybe web based but it would differ a bit from my original vision of group interaction.
              </p>
            </div>
            <SecImage 
              src =  "/images/SweetDawn/projo.jpg" 
              alt = "part of the beast" 
              width = "400px"
            />
          
          </SecBody>
          

        </section>

        <section style={{maxWidth: '200px',maxHeight: '300px'}}>
          All of the expriments are coded by myself using python. But I did not revolutionize AI all by myself so I used the Y.O.L.O. v3 algorithm by Joseph Redmon .
        </section>

        <section style={{maxWidth: '400px',maxHeight: '400px'}}>
          <SecTitle>The Cloud</SecTitle>
          <SecBody>
            <div>
              The cloud is fragile. It do not like when people touch each other.
            </div>
            <SecImage 
              src  = "/images/SweetDawn/sweet cloud.PNG"
              alt = "do not touch the cloud"
              width = "400px"

            />
          </SecBody>
        </section>


      </VariableArticleList>

    </Page>
  )
 }

export default SweetDawn ;

