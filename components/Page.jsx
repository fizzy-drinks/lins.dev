import Head from 'next/head'

import Navigation from './Navigation'
import Footer from './Footer'

import palette from '../config/colors'

const breakpoints = [0, 600, 1024]
const pBaseFontSizeEm = [1, 1.15, 1.3]
const headerH1ToTextRatio = [1.5, 2, 2.5]
const headerStepDownsizingRatio = [.95, .9, .85]

const textSizesCssString = breakpoints
  .map((minWidth, ii) =>
    `@media (min-width: ${minWidth}px) {
      ${Array(6)
        .fill(headerH1ToTextRatio[ii] * pBaseFontSizeEm[ii])
        .map((h1Size, jj) => h1Size * (Math.pow(headerStepDownsizingRatio[ii], jj)))
        .map((size, ii) =>
          `h${ii + 1} {
            font-size: ${size}em;
            margin: ${size}em 0 .5em;
            color: ${palette.white.alpha(.9)};
            text-align: center;
            font-family: 'TypoPRO Bebas Neue', 'Arial Black', sans-serif;
          }`)
        .join``
        .concat(`p { font-size: ${pBaseFontSizeEm[ii]}em }`)}
    }`)
  .join``

const Page = props =>
  <div className='page component'>
    <Head>
      <title key='title'>{props.title} | lins.dev</title>
      <link key='favicon' rel='icon' href='/favicon.ico' /> 
      <meta key='theme' name='theme-color' content={palette.primary} />
      <link key='font' href='https://fonts.googleapis.com/css?family=Heebo|Nanum+Gothic+Coding&display=swap' rel='stylesheet' />
      <link key='font-bebas' href='https://cdn.jsdelivr.net/npm/@typopro/web-bebas-neue@3.7.5/TypoPRO-BebasNeue-Regular.css' rel='stylesheet' />
    </Head>
    <Navigation />
    <div className='page main area'>
      <div className='background' />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
    <style global jsx>{`
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
    }

    ${textSizesCssString}

    p {
      max-width: 840px;
      margin: 0 auto;
      color: ${palette.white.alpha(.9)};
      text-align: center;
      line-height: 200%;
    }

    .page.component {
      font-family: Heebo, sans-serif;
      color: ${palette.white.alpha(.9)};
    }

    .page.main.area > * {
      position: relative;
      z-index: 2;
    }

    .page.main.area > .background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vh;
      height: 100vh;
      z-index: 1;

      background: ${palette.primary} url(/static/bg_800.png) fixed;
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    @media (min-width: 800px) {
      .page.main.area > .background {
        background-image: url(/static/bg_1080.png)
      }
    }

    @media (min-width: 1080px) {
      .page.main.area > .background {
        background-image: url(/static/bg_1920.png)
      }
    }

    @media (min-width: 1920px) {
      .page.main.area > .background {
        background-image: url(/static/bg_5000.png)
      }
    }

    a, .link {
      color: ${palette.light};
      text-decoration: none;
      border: ${palette.light} 0 solid;
      border-bottom-width: 1px;
      transition: all 300ms ease;
      cursor: pointer;
    }

    a:active,
    a:hover,
    a:focus,
    .link:active,
    .link:hover,
    .link:focus {
      border-bottom-width: 4px;
      border-color: ${palette.warn};
    }

    .greyed.out {
      color: ${palette.gray.rgb()}
    }
    `}</style>
  </div>

export default Page
