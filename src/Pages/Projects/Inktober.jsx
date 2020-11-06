import React from 'react';
import styled from 'styled-components';
import {BigSection,Limitedwidth,Oups} from '../../Components/Section';
import PostInsta from '../../Components/PostInsta';





const linkslist = [
  {
    "url" : 'https://www.instagram.com/p/CFz_N8kC8HR/',
    "day" : 1,
    "theme": 'PROTOTYPE'
  },
  {
    "url" : 'https://www.instagram.com/p/CF2hCWkiLTc/',
    "day" : 2,
    "theme": 'FOU RIRE'
  },
  {
    "url" : 'https://www.instagram.com/p/CF4tqxuC8JI/',
    "day" : 3,
    "theme": 'PIGEON'
  },
  {
    "url" : 'https://www.instagram.com/p/CF7LMiBi7nj/',
    "day" : 4,
    "theme": 'SYMBIOSE'
  },
  {
    "url" : 'https://www.instagram.com/p/CF93ct5C2X5/',
    "day" : 5,
    "theme": 'POT'
  },   
  {
    "url" : 'https://www.instagram.com/p/CGAqLMlodx1/',
    "day" : 6,
    "theme": 'BEAUCOUP'
  },  
  {
    "url" : 'https://www.instagram.com/p/CGDXnZFIhWK/',
    "day" : 7,
    "theme": 'PEAU'
  },  
  {
    "url" : 'https://www.instagram.com/p/CGGMHz1CAJC/',
    "day" : 8,
    "theme": 'MADELEINE'
  },    
  {
    "url" : 'https://www.instagram.com/p/CGIwrb2iROQ/',
    "day" : 9,
    "theme": 'PERPLEXE'
  },    
  {
    "url" : 'https://www.instagram.com/p/CGK2QBXCc04/',
    "day" : 10,
    "theme": 'TRAMWAY'
  },    
  {
    "url" : 'https://www.instagram.com/p/CGODxdQiz8b/',
    "day" : 11,
    "theme": 'LEITMOTIV'
  },     
  {
    "url" : 'https://www.instagram.com/p/CGQOI03CtYt/',
    "day" : 12,
    "theme": 'DINAUSORE'
  },     
  {
    "url" : 'https://www.instagram.com/p/CGSjeX8Cs4D/',
    "day" : 13,
    "theme": 'SALOPETTE'
  },     
  {
    "url" : 'https://www.instagram.com/p/CGVgf9DCFS1/',
    "day" : 14,
    "theme": 'ARIANE'
  },          
  {
    "url" : 'https://www.instagram.com/p/CGXywDziJCE/',
    "day" : 15,
    "theme": 'VERTE'
  },          
  {
    "url" : 'https://www.instagram.com/p/CGajRrhCNJ4/',
    "day" : 16,
    "theme": 'ARCHITECTURE'
  },          
  {
    "url" : 'https://www.instagram.com/p/CGddOFmC89c/',
    "day" : 17,
    "theme": 'POILS'
  },          
  {
    "url" : 'https://www.instagram.com/p/CGf6mgWislT/',
    "day" : 18,
    "theme": 'MOUVEMENT'
  },          
  {
    "url" : '',
    "day" : 19,
    "theme": 'MAGAZINE'
  },          
  {
    "url" : '',
    "day" : 20,
    "theme": 'CICATRISATION'
  },          
  {
    "url" : '',
    "day" : 21,
    "theme": 'PAGES'
  },          
  {
    "url" : '',
    "day" : 22,
    "theme": 'COUCHE'
  },          
  {
    "url" : '',
    "day" : 23,
    "theme": 'DECORATION'
  },          
  {
    "url" : '',
    "day" : 24,
    "theme": 'RADIOACTIVITE'
  },          
  {
    "url" : '',
    "day" : 25,
    "theme": 'PETIT.E'
  },          
  {
    "url" : '',
    "day" : 26,
    "theme": 'MARRONIER'
  },          
  {
    "url" : '',
    "day" : 27,
    "theme": 'CERCLE'
  },          
  {
    "url" : '',
    "day" : 28,
    "theme": 'DYSPHORIE'
  },          
  {
    "url" : '',
    "day" : 29,
    "theme": 'CELESTE'
  },          
  {
    "url" : '',
    "day" : 30,
    "theme": 'FANTOMES'
  },          
  {
    "url" : '',
    "day" : 31,
    "theme": 'BROUILLARD'
  },          
  ]
  

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
`;


const FeedInsta = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self:center;
    justify-content: center;
`;
const InstaSec = styled.section`
  display:flex;
  flex-direction:column;
  align-content:center;
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
  height: auto;
  margin: 3px;

  @media only screen and (max-width: 600px) {
    
    display: block;
    margin-left: auto;
    margin-right: auto
  }
`;




const Inktober = () => { 
  return(
    <Section>
      <BigSection>
        <Limitedwidth>
          <About>
          
            <Txt >
            I'm doing the Inktober 2020 on <a href="https://www.instagram.com/nicolasaudepin/">my Instagram (@nicolasaudepin)</a>  . It is an internet challenge for artists with a bit too much time on their hands.
            Everyday of October we must do one drawing (or small animation in my case) following that day's theme.
            For this challenge I am working in duo with my friend <a href="https://www.instagram.com/dimbymaxime/">@Dimbymaxime</a> who is doing the audio for each of the videos and we are following the list of themes by <a href="https://www.instagram.com/licegateaux/">@Licegateaux</a>. 

            </Txt>
            <Imagestyled src={process.env.PUBLIC_URL + "/images/xalist.jpg" }alt="Alice's Inktober list"/>       
            

          </About>
        </Limitedwidth> 
      </BigSection>
      <InstaSec>
        <Oups>
          Instagram decided to change their API two weeks after I finished this part and it broke everything.
          I will update this when comprehensible tutorials about the new API are writen. 
          In the meanwhile you can go directly on my instagram page <a href="https://www.instagram.com/nicolasaudepin/">you can go directly on my instagram page (@nicolasaudepin)</a>
        </Oups>
        <FeedInsta>
          {linkslist.map(({url,day,theme},index) => (
            <PostInsta 
              url = {url}
              day = {day}
              theme = {theme}
            />
            ))
          }
        </FeedInsta> 
      </InstaSec>
               
                

    </Section>
  )
 }

export default Inktober ;

