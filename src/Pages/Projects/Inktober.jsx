import React from 'react';
import styled from 'styled-components';
import BigSection from '../../Components/Section';
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
 
  ]
  

const Section = styled.section`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: flex-start;
`;

const Limitedwidth = styled.div`
  max-width: 700px;
  align-self: center;

  a{    
    color: ${props => props.theme.borderLight};
  }
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
            <Imagestyled src="images/xalist.jpg" alt="Alice's Inktober list"/>       
            

          </About>
        </Limitedwidth> 
      </BigSection>
      <InstaSec>
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

