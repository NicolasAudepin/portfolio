import {HorizontalScroll,Page} from '../Components/Section';
import PDFreader from '../Components/PDFreader';
import {SimpleLink} from '../Components/SimpleComponents'

import React, { Component } from 'react';



class CurriculumPage extends Component {
  

  state = {
    pathinpublic: "/pdfs/CV_Nicolas_Audepin.pdf",
  }

  
  pagewidth(){
    return( Math.min(window.screen.availWidth - 10, 800) );
  };

  render(){
    const {pathinpublic } = this.state;
    return (
      <Page>
        <SimpleLink href = {process.env.PUBLIC_URL + pathinpublic} target="_blank" >Donwload CV</SimpleLink>
                
        <PDFreader pathinpublic = {pathinpublic} pagewidth = {this.pagewidth} />
        
        <SimpleLink href = {process.env.PUBLIC_URL +pathinpublic} target="_blank" >Donwload CV</SimpleLink>
        
      </Page>
      

    );
  }
  
}

export default CurriculumPage;