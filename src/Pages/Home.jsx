import React from 'react';
import styled from 'styled-components';
import ArticleSum from '../Components/ArticleSum';



const Section = styled.section`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: space-evenly;

  
`;


const Home = () => {
  return(
    <Section>
      


      <ArticleSum 
        title = "Inktober 2020"
        summary = "This year I am following the internet challenge Inktober with my friend Dean.  "
        img = "/videos/01prototype.mp4"
        linkPath = "/portfolio/project/SweetDawn"
        video
      />

      <ArticleSum 
        title = "Sweet Dawn"
        summary = "An ensemble of interactive art pieces combining deep learning, modular music and 3D. 
        They react to the public watching them like a game. "
        img = "/images/sweet.png"
        linkPath = "/portfolio/project/SweetDawn"
      />


      <ArticleSum 
        title = "The Classroom"
        summary = "Deep learning generation mayhem "
        img = "/images/Classroom.JPG"
        linkPath = "/portfolio/project/classroom"
      />

    </Section>

    

  )
}

export default Home ;

