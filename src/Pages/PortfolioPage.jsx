
import styled,{ css } from 'styled-components';
import {VariableArticleList,HorizontalScroll,Page} from '../Components/Section';
import CV from '../Components/CV';
import {SimpleButton} from '../Components/SimpleComponents'

import React, { Component } from 'react';



class CurriculumPage extends Component {
  
  constructor(props) {
    super(props);
  }

  state = {
    pathinpublic: "/pdfs/Portfolio2020.pdf",
  }

  


  render(){
    const {pathinpublic } = this.state;
    return (
      <Page>
        <SimpleButton href = {process.env.PUBLIC_URL + pathinpublic} target="_blank" >Donwload Portfolio</SimpleButton>
        <HorizontalScroll>         
          <CV pathinpublic = {pathinpublic} />
        </HorizontalScroll>
        <SimpleButton href = {process.env.PUBLIC_URL +pathinpublic} target="_blank" >Donwload Portfolio</SimpleButton>
        
      </Page>
      

    );
  }
  
}

export default CurriculumPage;