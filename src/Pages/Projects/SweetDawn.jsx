import React from 'react';
import styled from 'styled-components';
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
        <section style={{maxWidth: '600px',maxHeight: '300px'}}>
          <SecTitle>Sweet Arpegiato</SecTitle>
          <div>
            
            This is the first prototype of interactive piece.
            It connects the YOLO v3 algorithm to a generated arpegio.
            The more people it sees, the fuller the Arpegiato.
          </div>
          <img src =  "images/SweetDawn/sweet arp photo.PNG" alt = "me on a bike"/>
        </section>


        <section style={{maxWidth: '200px',maxHeight: '100px'}}>
          Most of the soundscapes are generated live using the free software VCV Rack in collaboration with my friend Dean.
        </section>

        <section style={{maxWidth: '300px'}}>
          <SecTitle>Sweet Ocean</SecTitle>
          <div>
            We tried to combine most of the previous ideas into one central piece using the most complexe evolving music yet and some 3D animation and background. 
          </div>
        </section>

        <section style={{maxWidth: '500px'}} >
          <SecTitle>In the physical world</SecTitle>
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

        </section>

        <section style={{maxWidth: '200px',maxHeight: '300px'}}>
          All of the expriments are coded by myself using python. But I did not revolutionize AI all by myself so I used the Y.O.L.O. v3 algorithm by Joseph Redmon .
        </section>


      </VariableArticleList>

    </Page>
  )
 }

export default SweetDawn ;

