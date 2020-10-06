import React from 'react';
import styled from 'styled-components';

import InstagramEmbed from 'react-instagram-embed';

const Post = styled.section`
  display: flex;
  margin: 10px;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
  border-top-left-radius : 20px;
  border-top-right-radius : 20px;

`;

const Title = styled.section`
display: flex;
flex-direction: row;
font-size: 1.4em;

color: ${props => props.theme.textTitle};
background-color: ${props => props.theme.backgroundTitle};

`;
const Day = styled.section`
margin : 5px;
width: 30px;
height:30px;
color: ${props => props.theme.backgroundTitle};
background-color: ${props => props.theme.textTitle};
border-radius:50%;

`;


const PostInsta = ({url,day,theme}) =>{
  return(
  <Post>
    <Title>
      <Day>
      {day}
      </Day>
      {theme}
    </Title>
    <InstagramEmbed
      url={url}
      maxWidth={320}
      hideCaption={true}
      containerTagName='div'
      protocol=''
    />
  </Post>
  )
}


export default PostInsta