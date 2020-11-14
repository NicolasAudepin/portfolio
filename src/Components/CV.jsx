import React, { Component } from 'react';
import styled,{ css } from 'styled-components';
import {VariableArticleList,MargedSection} from '../Components/Section';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import DownloadLink from "react-download-link";

const DownloadButton = styled.a`
  margin: 20px;
  padding: 10px;
  display:block;
  color : ${props => props.theme.backgroundSection};
  text-decoration: none;
  font-weight: bold;
  background-color:${props => props.theme.textLight}; 
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const CVdiv = styled.div`
  overflow: hidden;
  width: 100%;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: flex-start;
`;

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
      <CVdiv>
        <DownloadButton href = {process.env.PUBLIC_URL + "/pdfs/CV_Nicolas_Audepin.pdf"} target="_blank" >Donwload CV</DownloadButton>

        <Document
          file={process.env.PUBLIC_URL + "/pdfs/CV_Nicolas_Audepin.pdf"}
          onLoadSuccess={this.onDocumentLoadSuccess}

        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </CVdiv>
    );
  }
}

export default CV;