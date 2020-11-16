import React, { Component } from 'react';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


class PDFreader extends Component {
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

    pagefunc(pageNumber) {
      return (<Page pageNumber={pageNumber} />);
    }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      
        

      <Document
        file={process.env.PUBLIC_URL + this.props.pathinpublic}
        onLoadSuccess={this.onDocumentLoadSuccess}
        loading = {
        <div>
          <p>Loading the PDF.</p>
          <p>If nothing shows up after a few seconds refresh this page or use the download button.</p>
        </div>}
      >
        {this.props.pagelist ? this.props.pagelist.map(this.pagefunc) : <Page pageNumber={pageNumber} />} 
        
      </Document>
      
    );
  }
}

export default PDFreader;