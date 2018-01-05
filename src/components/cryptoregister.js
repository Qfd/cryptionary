import React from 'react';
import Markdown from 'react-markdown';
import HelpBanner from './help-banner';
import marked from 'marked';
import styled, { injectGlobal } from 'styled-components';
import Head from './head';
import { linkButtonStyles } from '../common-styles';

injectGlobal`
  html {
    color: #3a4b59;
    font-size: 18px;
  }

  html,
  .base-font {
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
  h6,
  .title-font {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      sans-serif;
  }
`;

const Definitions = styled(Markdown)`
  padding: 0.6rem;

  @media (min-width: 800px) {
    float: right;
    max-height: 100vh;
    overflow: scroll;
    padding-left: 5%;
    width: 60%;
    -webkit-overflow-scrolling: touch;
  }

  > h2 {
    margin: 2em 0 0.25em;
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
  margin: 0 auto;
  max-width: 1080px;
  padding-top: 2.5rem;

  @media (min-width: 500px) {
    padding: 2.5rem 0.5rem 0;
  }

  @media (min-width: 800px) {
    padding-top: 0;
    padding-right: 0;
  }
`;

const Header = styled.header`
  padding: 0 0.5rem;
  top: 0;
  width: 100%;

  @media (min-width: 800px) {
    float: left;
    width: 40%;
  }

  > h2 {
    font-weight: normal;
    font-style: italic;
    font-size: 1.3rem;
    margin: 1em 0.25rem 2em;
    opacity: 0.5;
  }
`;

const Title = styled.h1`
  background: white;
  font-family: 'Tinos', serif;
  font-size: 1.4rem;
  left: 0;
  line-height: 2.5rem;
  margin: 0;
  padding-left: 3%;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 100;

  > span {
    color: #2380ce;
  }

  @media (min-width: 400px) {
    font-size: 1.6rem;
  }

  @media (min-width: 800px) {
    position: initial;
    padding-top: 1em;
    padding-left: 0;
  }
`;

const Footer = styled(Markdown)`
  clear: left;
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
    float: left;
    margin: 0;
    padding: 0.5rem 0.5rem;
    width: 40%;
  }
`;

export default ({ definitionsMarkdown, furtherInformationMarkdown }) => (
  <html>
    <Head />
    <Body>
      <Header>
        <Title>
          Cryptoregister<span>.</span>io
        </Title>
        <h2 className="base-font">
          Simple descriptions of cryprocurrency terms and projects.
        </h2>
        <HelpBanner />
      </Header>
      <Definitions source={definitionsMarkdown} />
      <Footer source={furtherInformationMarkdown} />
    </Body>
  </html>
);
