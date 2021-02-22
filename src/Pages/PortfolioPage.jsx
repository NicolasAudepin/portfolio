
import {Page} from '../Components/Section';
import PDFreader from '../Components/PDFreader';
import {SimpleButton,SimpleLink} from '../Components/SimpleComponents'
import { withRouter } from "react-router";
import React, { Component } from 'react';



class CurriculumPage extends Component {
  
  constructor(props) {
    super(props);

    const resizeObserver = new ResizeObserver(entries => {
      console.log('Body height changed:', entries[0].target.clientHeight)
      const bh = entries[0].target.clientHeight;
      if(this.state.mustscroll){
        if (this.state.showall) {
          const scroll =  Math.floor(this.pagewidth());  
          window.scrollTo({ top: scroll,behavior:"smooth" });
        }
        else{
          
          window.scrollTo({ top: 0,behavior:"smooth" });
        }
        this.setState({ mustscroll:false})
      }

      
      console.log('scroll pos',window.scrollY) }     
    )
    // start observing a DOM node
    resizeObserver.observe(document.body)
  }

  state = {
    pathinpublic: "/pdfs/Portfolio2020.pdf",
    showall: false,
    mustscroll:false,

  }

  pagewidth(){
    return( Math.min(window.screen.availWidth - 10, 1000) );
  };
  
  switchShowAll = () => {
    this.setState({ showall: !this.state.showall , mustscroll:true})
    
  }

  render(){
    const {pathinpublic,showall } = this.state;
    return (
      <Page>
        <div style={{position: 'relative' ,display:'flex',flexDirection:'row'}}>
          <SimpleButton onClick = {this.switchShowAll}>{showall ? "Hide Portfolio":"Show full Portfolio"}</SimpleButton>
          <SimpleLink href = {process.env.PUBLIC_URL + pathinpublic} target="_blank" >Download Portfolio</SimpleLink>

        </div>
        

        <PDFreader 
          pathinpublic = {pathinpublic} 
          pagelist = {showall ? [1,2,3,4,5,6,7,8,9]:[1]} 
          pagewidth = {this.pagewidth} 
        />
        
        <div style={{position: 'relative' ,display:'flex',flexDirection:'row'}}>
          <SimpleButton onClick = {this.switchShowAll}>{showall ? "Hide Portfolio":"Show full Portfolio"}</SimpleButton>
          <SimpleLink href = {process.env.PUBLIC_URL + pathinpublic} target="_blank" >Download Portfolio</SimpleLink>

        </div>
      </Page>
      

    );
  }
  
}

export default withRouter(CurriculumPage);