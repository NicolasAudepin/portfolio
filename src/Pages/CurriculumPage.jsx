import {VariableArticleList,HorizontalScroll,Page} from '../Components/Section';
import PDFreader from '../Components/PDFreader';
import {SimpleLink} from '../Components/SimpleComponents'

import React, { Component } from 'react';



class CurriculumPage extends Component {
  
  constructor(props) {
    super(props);
  }

  state = {
    pathinpublic: "/pdfs/CV_Nicolas_Audepin.pdf",
  }

  


  render(){
    const {pathinpublic } = this.state;
    return (
      <Page>
        <SimpleLink href = {process.env.PUBLIC_URL + pathinpublic} target="_blank" >Donwload CV</SimpleLink>
        <HorizontalScroll>         
          <PDFreader pathinpublic = {pathinpublic} />
        </HorizontalScroll>
        <SimpleLink href = {process.env.PUBLIC_URL +pathinpublic} target="_blank" >Donwload CV</SimpleLink>
        
      </Page>
      

    );
  }
  
}

export default CurriculumPage;