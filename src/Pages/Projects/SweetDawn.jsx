import React from 'react';
import styled from 'styled-components';
import {VariableArticleList,MargedSection} from '../../Components/Section';
import PostInsta from '../../Components/PostInsta';



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
            <div>
                I have always been intrested in two things: Art and Science. 
                Both seems to head in opposite directions but always end up colliding.
                Sweet Dawn is one of those collision.   
              </div>
              <div>      

                The goal of Sweet Dawn is to create a corpus of interactive art pieces 
                allowing an active audiance to play visually with artificial intelligences.

              </div>
              <div>
                During my last year in engineering school came most of the ideas behind this project.
                Event + DJ interaction avec public
                deep 
                musique 
                art instead of ingé
              </div>
          </div>
        }
      />


      <VariableArticleList>
        <section>
          <SecTitle>Sweet Arpegiato</SecTitle>
          <div>
            This is the first prototype of interactive piece.
            It connects the YOLO v3 algorithm to a generated arpegio.
            The more people it sees, the fuller the Arpegiato.
          </div>
          <img src =  "images/SweetDawn/sweet arp photo.PNG" />
        </section>
        <section>
          <SecTitle>Sweet Arpegiato</SecTitle>
          <div>
            This is the first prototype of interactive piece.
            It connects the YOLO v3 algorithm to a generated arpegio.
            The more people it sees, the fuller the Arpegiato.
          </div>
        </section>
        <section>
          All of the expriments are coded by myself using python. But I re-used some algorithms.
        </section>
        <section>
          Most of the soundscapes are made using the free software VCV Rack.
        </section>

      </VariableArticleList>

    </Page>
  )
 }

export default SweetDawn ;

