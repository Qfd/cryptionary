import React from 'react';

export default () => (
  <head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Cryptoregister</title>
    <meta
      name="description"
      content="Simple descriptions of cryptocurrency terms and projects."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.cryptoregister.io/" />
    <meta property="og:title" content="Cryptoregister.io" />
    <meta
      property="og:image"
      content="https://www.cryptoregister.io/social-card.jpg"
    />
    <meta
      property="og:description"
      content="Simple descriptions of cryptocurrency terms and projects."
    />
    <meta property="og:site_name" content="Cryptoregister.io" />
    <meta property="og:locale" content="en_GB" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Tinos:400,400i,700|Material+Icons"
      rel="stylesheet"
    />
    <link href="/styles.css" rel="stylesheet" />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-112018770-1"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-112018770-1');
    `
      }}
    />
  </head>
);
