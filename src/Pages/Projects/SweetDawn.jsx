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




const SweetDawn = () => { 
  return(
    <Section>
      <BigSection>
        <Limitedwidth>
          <About>
          
            <Txt >
            Sweet Dream
            </Txt>
                   
            

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

export default SweetDawn ;

