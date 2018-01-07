import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import Cryptoregister from '../src/components/cryptoregister';

console.info('compiling Cryptoregister...');

const readme = fs.readFileSync(path.resolve(__dirname, '../README.md'), 'utf8');
const [_, definitionsMarkdown, furtherInformationMarkdown] = readme.split(
  '---'
);

console.info(`${definitionsMarkdown.match(/##/g).length} defintions found`);

const sheet = new ServerStyleSheet();
const html =
  '<!doctype html>' +
  ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(
      <Cryptoregister
        definitionsMarkdown={definitionsMarkdown}
        furtherInformationMarkdown={furtherInformationMarkdown}
      />
    )
  );

const css = sheet.getStyleTags().replace(/<\/?style.*>/g, '');

fs.writeFileSync(path.resolve(__dirname, '../docs/index.html'), html);
fs.writeFileSync(path.resolve(__dirname, '../docs/styles.css'), css);
