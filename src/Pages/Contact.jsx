import React from 'react';
import styled from 'styled-components';
import ArticleSum from '../Components/ArticleSum';
import BigSection from '../Components/Section';



const Section = styled.section`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: flex-start;


  
`;

const Limitedwidth = styled.div`
  max-width: 700px;
  align-self: center;
`;

const Contact = () => {
  return(
    <Section>
      <BigSection>
      <Limitedwidth>
          <section>
            You can contact me by sending me a mail at nicolas.audpein@gmail.com          
        
          </section>
          <section>
            If you prefere you can contact me on those social networks:    
            <ul>
              <li>slmjsdg</li>
              <li>slmjsdg</li>
              <li>slmjsdg</li>
            </ul>
          </section>
                 
        </Limitedwidth>

          
      </BigSection>
    </Section>
  )
 }

export default Contact ;

