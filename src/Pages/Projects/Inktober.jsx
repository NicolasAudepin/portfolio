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

  justify-content: center;


  margin: 3px;
  border-bottom: 1px solid ${props => props.theme.textLight};
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

const Imagestyled = styled.img`
  width : 50%;
  height: auto;
  margin: 3px;

  @media only screen and (max-width: 600px) {
    width : 80%;
    height: auto;
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
            I'm doing the Inktober 2020 on <a href="https://www.instagram.com/nicolasaudepin/">my Instagram (@nicolasaudepin)</a>  . It is an internet challenge for artists with a bit too much time on their hands.
            Everyday of October we must do one drawing (or small animation in my case) following that day's theme.
            For this challenge I am working in duo with my friend <a href="https://www.instagram.com/dimbymaxime/">@Dimbymaxime</a> who is doing the audio for each of the videos and we are following the list of themes by <a href="https://www.instagram.com/licegateaux/">@Licegateaux</a>. 


          </About>
          <Imagestyled src="images/xalist.jpg" alt="Alice's Inktober list"/>
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

