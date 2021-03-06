import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Menu from '../components/menu';
import '../mystyles.scss';
import { Document, Page } from 'react-pdf';
import PDF from './resumeupdated.pdf';

const Div = styled.div`
  position: relative;
  top: 150px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  & p {
    text-align: left;
    font-size: 20px;
    font-weight: 300;
  }
`;

const Anchor = styled.a`
  text-decoration: underline;
`;

const ResumeWrapper = styled.div`
  margin-left: 6%;

  & .resume {
    margin-left: -9%;
  }
`;

const MenuWrapper = styled.div`
  margin-left: 6%;
  margin-right: -6%;
`;

export default class Resume extends Component {
  render() {
    return (
      <Layout>
        <Div className="columns is-tablet">
          <MenuWrapper className="column is-one-quarter">
            <Menu />
          </MenuWrapper>
          <ResumeWrapper className="column is-7 is-10-mobile">
            <h1>Resume</h1>
            <Document
              className="resume"
              file={PDF}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={1} />
            </Document>
          </ResumeWrapper>
        </Div>
      </Layout>
    );
  }
}
