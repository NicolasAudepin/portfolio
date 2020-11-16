import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import styled from 'styled-components';

const StyledDoc = styled(Document)`
display: flex;
box-shadow: 2px 8px 30px rgba(0, 0, 0, 0.5);
`;

class PDFreader extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    pageswidth: 200,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  getDataFromURL = (url) => new Promise((resolve, reject) => {
    setTimeout(() => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                resolve(data)
            });
    });
    }, 2000);


    pagefunc= (pageNumber) => {
      return (<Page pageNumber={pageNumber} key={pageNumber} width = {this.props.pagewidth()}  />);
    };

    handleResize = () => {
      this.setState({ pageswidth: this.props.pagewidth() });
    };

  render() {
    const { pageNumber} = this.state;

    window.addEventListener('resize', this.handleResize)

    return (
      
        

      <StyledDoc 
        file={process.env.PUBLIC_URL + this.props.pathinpublic}
        onLoadSuccess={this.onDocumentLoadSuccess}
        
        loading = {
        <div>
          <p>Loading the PDF.</p>
          <p>If nothing shows up after a few seconds refresh this page or use the download button.</p>
        </div>}
      >
        {this.props.pagelist ? this.props.pagelist.map(this.pagefunc) : this.pagefunc(pageNumber) } 
        
      </StyledDoc>
      
    );
  }
}

PDFreader.propTypes = {
  pagewidth: PropTypes.func.isRequired,
  pagelist: PropTypes.arrayOf(PropTypes.number),
}

export default PDFreader;