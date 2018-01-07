import React from 'react';
import Markdown from 'react-markdown';
import styled, { injectGlobal } from 'styled-components';
import { linkButtonStyles } from '../common-styles';
import Head from './head';
import Header from './header';
import Logo from './logo';

injectGlobal`
  html {
    color: #3a4b59;
    font-size: 18px;
  }

  html {
    font-family: 'Tinos', serif;
    box-sizing: border-box;
    line-height: 1.4em;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    color: #2380ce;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      sans-serif;
  }
`;

const Definitions = styled(Markdown)`
  padding: 0.6rem 0.6rem 3rem;

  @media (min-width: 800px) {
    padding-right: 10%;
    position: fixed;
    height: 100vh;
    overflow: scroll;
    padding-left: 5%;
    width: 60%;
    left: 40%;
    -webkit-overflow-scrolling: touch;
  }

  > h2 {
    margin: 2em 0 0.25em;

    &:first-of-type {
      margin-top: 1em;
    }
  }

  h2 + p > a {
    font-size: 0.7em;
    ${linkButtonStyles};

    &::after {
      content: '\uE157';
      margin-left: 0.5em;
      font-family: 'Material Icons';
      vertical-align: bottom;
    }

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  > p {
    margin: 0.25em 0;
    line-height: 1.4em;
    font-size: 1.1em;
  }
`;

const Body = styled.body`
  padding-top: 2.5rem;

  @media (min-width: 500px) {
    padding: 2.5rem 0.5rem 0;
  }

  @media (min-width: 800px) {
    padding-top: 0;
    padding-right: 0;
    width: 40%;
  }
`;

const Footer = styled(Markdown)`
  margin: 2rem 0.5rem;
  padding: 1.5rem 0.25rem;
  border-top: 1px solid #999;

  > h3 {
    margin: 2em 0 0;
  }

  > p {
    margin: 0.5em 0;
  }

  > ul {
    list-style: none;
    padding: 0;

    a {
      ${linkButtonStyles};
      margin: 0.5em 0;
    }
  }

  @media (min-width: 800px) {
    border-top: none;
    clear: both;
    margin: 0;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    float: right;
    max-width: 600px;
  }
`;

export default ({ definitionsMarkdown, furtherInformationMarkdown }) => (
  <html lang="en">
    <Head />
    <Body>
      <Header />
      <Definitions source={definitionsMarkdown} />
      <Footer source={furtherInformationMarkdown} />
    </Body>
  </html>
);
