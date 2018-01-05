import React from 'react';

export default () => (
  <head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <title>Cryptoregister</title>
    <meta
      name="description"
      content="Simple descriptions of cryprocurrency names / projects"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Tinos:400,400i,700"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link href="/styles.css" rel="stylesheet" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112018770-1"/>
    <script dangerouslySetInnerHTML={{ __html:`
      window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-112018770-1');
    `}}/>
  </head>
);
