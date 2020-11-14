
import styled,{ css } from 'styled-components';
import {VariableArticleList,MargedSection,Page} from '../Components/Section';
import CV from '../Components/CV';


import React, { Component } from 'react';


const CVstyled = styled(CV)`
  margin: 10px;
  border: 10px;
  border-color:red;
  background-color:blue;
`;

class CurriculumPage extends Component {
  
  constructor(props) {
    super(props);
  }

  

 
  render(){
    return (
      <Page>
        
        <CVstyled/>
        
      </Page>
      

    );
  }
  
}

export default CurriculumPage;