import React from 'react';
import styled from 'styled-components';
import { linkButtonStyles } from '../common-styles';

const Wrapper = styled.div`
  background: #3a4559;
  border-radius: 0.2rem;
  color: #fff;
  font-size: 1.3em;
  padding: 0.5em;

  > p {
    margin: 0.3em;
  }

  > a {
    font-size: 0.7em;

    ${linkButtonStyles};

    &::after {
      font-size: 1.1em;
      margin-left: 0.5em;
      font-family: 'Material Icons';
      vertical-align: bottom;
    }

    &:first-of-type::after {
      content: '\uE0BE';
    }

    &:last-of-type::after {
      content: '\uE0B3';
    }
  }
`;

export default props => (
  <Wrapper {...props}>
    <p>Notice something that’s missing, could be better or flat out wrong?</p>
    <a href="mailto:cryptoregister@qfd.io" target="_blank">
      Email me
    </a>
    <a href="https://github.com/Qfd/cryptoregister/issues" target="_blank">
      Raise an issue or PR on Github
    </a>
  </Wrapper>
);
