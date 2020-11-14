
import styled,{ css } from 'styled-components';
import {VariableArticleList,MargedSection,Page} from '../Components/Section';
import CV from '../Components/CV';
import { Preview, print } from 'react-html2pdf';


import React, { Component } from 'react';

const PreviewDiv = styled(Preview)`
    width: 200px;
    height: 400px;
    display: block;
    border: 10px ;
    background-color: yellow;
  
  `;

class CurriculumPage extends Component {
  
  constructor(props) {
    super(props);
  }

  

 
  render(){
    return (
      <Page>
        <PreviewDiv id={'cv'} >
            <CV/>
        </PreviewDiv>
        <button onClick={()=>print('CV_Nicolas_AUDEPIN', 'cv')}> print</button>
      </Page>
      

    );
  }
  
}

export default CurriculumPage;