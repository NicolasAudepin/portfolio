import React from 'react';
import styled from 'styled-components';


const BigSection = styled.section`


  display: flex;
  flex-direction: column;
  align-self: center;
  align-content:center;

  text-align: left;
  text-anchor: middle;
  overflow: hidden;
  margin : 10px;
  border : 30px;
  padding : 10px;
 
  
  width: 90%;
  max-width: 900px;
  min-height: 10vh;

  color: ${props => props.theme.textLight};
  background-color:${props => props.theme.backgroundSection};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  a{    
    color: ${props => props.theme.borderLight};
  }

`;

const Limitedwidth = styled.div`
  max-width: 700px;
  align-self: center;
  a{    
    color: ${props => props.theme.borderLight};
  }
  
`;


const MargedSection = ({stuff}) => {
  return(
    <BigSection>
      <Limitedwidth>
        {stuff}
      </Limitedwidth>
    </BigSection>
  )
} 


const VariableArticleList = styled.section`
  max-width : 1400px;
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content:center;
  

  section{
    max-width : 700px;
    flex-direction: column;   
    align-content:left;
    align-items: flex-start; 
    text-align: left;
    margin : 10px;
    border : 30px;
    padding : 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: ${props => props.theme.textLight};
    background-color:${props => props.theme.backgroundSection};
    
  }
`;

const Page = styled.section`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: flex-start;
`;

const Oups  = styled.div`

  position: relative;
  top: 110px;
  right: -10%;
  width: 80%;
  border: 5px solid red;
  padding: 10px;
  color : red;
  background-color:${props => props.theme.backgroundSection};

  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  a{    
    color : red;
  }
`;

const HorizontalScroll = styled.section`
  display: flex;
  max-width:100%;
  overflow-x:scroll;
  

`;

//put the Limitedwidth in a BigSection

export {BigSection,Limitedwidth, MargedSection,VariableArticleList,Oups,Page,HorizontalScroll}; 