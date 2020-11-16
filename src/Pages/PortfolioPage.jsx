
import {HorizontalScroll,Page} from '../Components/Section';
import PDFreader from '../Components/PDFreader';
import {SimpleButton,SimpleLink} from '../Components/SimpleComponents'

import React, { Component } from 'react';



class CurriculumPage extends Component {
  
  constructor(props) {
    super(props);
  }

  state = {
    pathinpublic: "/pdfs/Portfolio2020.pdf",
    showall: false,
  }

  
  swithShowAll = () => {
    this.setState({ showall: !this.state.showall})
  }

  render(){
    const {pathinpublic,showall } = this.state;
    return (
      <Page>
        <div style={{display:'flex',flexDirection:'row'}}>
          <SimpleButton onClick = {this.swithShowAll}>{showall ? "Hide Portfolio":"Show full Portfolio"}</SimpleButton>
          <SimpleLink href = {process.env.PUBLIC_URL + pathinpublic} target="_blank" >Donwload Portfolio</SimpleLink>

        </div>
        <HorizontalScroll>  

          <PDFreader pathinpublic = {pathinpublic} pagelist = {showall ? [1,2,3,4,5,6,7,8,9]:[1]} />
        </HorizontalScroll>
        <SimpleLink href = {process.env.PUBLIC_URL +pathinpublic} target="_blank" >Donwload Portfolio</SimpleLink>
        
      </Page>
      

    );
  }
  
}

export default CurriculumPage;