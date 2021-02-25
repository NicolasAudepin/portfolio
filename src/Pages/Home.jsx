import React from 'react';
import styled from 'styled-components';
import ArticleSum from '../Components/ArticleSum';
import {BigSection} from '../Components/Section';



const Section = styled.section`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: flex-start;


  
`;


const Home = () => {
  return(
    <Section>
      <BigSection>
        <section>
          Hey! I'm Nicolas and welcome to my web page.
          Here you can find pages about some of my projects.
        </section>

          
      </BigSection>

      <ArticleSum 
        title = "Sweet Dawn"
        summary = "An ensemble of interactive art pieces combining deep learning, modular music and 3D. 
        They react to the public watching them like a game. "
        img = "/images/sweet.png"
        linkPath = "/portfolio/projects/sweetdawn"
      />

      <ArticleSum 
        title = "Inktober 2020"
        summary = "This year I am following the internet challenge Inktober with my friend Dean. 
        Every day of october I will be creating a short CGI video following a given theme and he will add music to it. 
        For this year we are following licegateaux list of themes. "
        img = "/videos/01prototype.mp4"
        linkPath = "/portfolio/projects/inktober"
        video
      />

      <ArticleSum 
        title = "The Classroom"
        summary = "Deep learning generation mayhem "
        img = "/images/Classroom.JPG"
        linkPath = "/portfolio/projects/classroom"
      />

      <ArticleSum 
        title = "Glitch Art"
        summary = "I made an image editing software focussing on glitch aestetic.
        I used it to create a massive amount of images in which I explore the numerical aspect of the images. "
        img = "/images/glitch.jpg"
        linkPath = "/portfolio/projects/glitchart"
      />

      <ArticleSum 
        title = "Random Stuff on Instagram"
        summary = "I post regulary content on my instagram page. Mostly 3D renders using Blender..."
        img = "/images/collage.png"
        linkPath = "/portfolio/projects/insta"
      />

      <ArticleSum 
        title = "Musical projects"
        summary = " I have always been doing music. Most of it is lost on some external drives."
        img = "/images/vcvrack.PNG"
        linkPath = "/portfolio/projects/music"
      />


    </Section>

    

  )
}

export default Home ;

