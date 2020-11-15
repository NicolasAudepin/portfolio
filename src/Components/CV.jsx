import React, { Component } from 'react';
import styled,{ css } from 'styled-components';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


class CV extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
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

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      
        

      <Document
        file={process.env.PUBLIC_URL + this.props.pathinpublic}
        onLoadSuccess={this.onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      
    );
  }
}

export default CV;