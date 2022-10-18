import { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const Document: FC = () => {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.cdnfonts.com/css/merriweather-sans'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
