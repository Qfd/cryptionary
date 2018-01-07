import React from 'react';
import styled from 'styled-components';
import Logo from './logo';
import HelpBanner from './help-banner';

const Header = styled.header`
  padding: 0 0.5rem;
  top: 0;
  width: 100%;
  margin-bottom: 1em;

  @media (min-width: 800px) {
    float: right;
    max-width: 600px;
    margin-bottom: 0;
    padding: 0 0 0 1rem;
  }

  > h2 {
    font-family: inherit;
    font-size: 1.3rem;
    font-style: italic;
    font-weight: normal;
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
  position: fixed;
  text-transform: uppercase;
  top: 0;
  white-space: nowrap;
  width: 100%;
  z-index: 100;

  > * {
    vertical-align: middle;
  }

  > svg {
    float: left;
    height: 2.5rem;
    margin: 0 1%;
    vertical-align: text-bottom;
    width: 2rem;
  }

  @media (min-width: 400px) {
    font-size: 1.6rem;
  }

  @media (min-width: 800px) {
    font-size: 1.4rem;
    position: initial;
    padding-top: 1em;
    padding-left: 0;
  }

  @media (min-width: 900px) {
    font-size: 1.6rem;
  }
`;

const Dot = styled.span`
  color: #2380ce;
`;

export default () => (
  <Header>
    <Title>
      <Logo />
      <span>
        Cryptoregister<Dot>.</Dot>io
      </span>
    </Title>
    <h2>Simple descriptions of cryptocurrency terms and projects.</h2>
    <HelpBanner />
  </Header>
);
