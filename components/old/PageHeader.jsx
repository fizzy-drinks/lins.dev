import WidthContainer from './WidthContainer'

import palette from '../../config/colors'

const Title = ({ children }) =>
  <h2>
    {children}
    <style jsx>{`
    h2 {
      font-family: 'Nanum Gothic Coding', sans-serif;
      font-size: 5em;
      font-weight: normal;
      margin-top: 0;
      color: ${palette.white};
      padding: 0;
    }

    h2::before,
    h2::after {
      font-size: .8em;
      color: ${palette.white}
    }

    h2::before {
      content: '<';
    }

    h2::after {
      content: '/>';
    }

    @media (max-width: 740px) {
      h2 {
        font-size: 3.5em;
      }
    }

    @media (max-width: 540px) {
      h2 {
        font-size: 2.5em;
      }
    }
    `}</style>
  </h2>

Title.Highlight = ({ children }) =>
  <span className='highlight'>
    {children}
    <style jsx>{`
      .highlight {
        color: ${palette.complement}
      }
    `}</style>
  </span>

const Sub = ({ children }) =>
  <p>
    {children}
    <style jsx>{`
    p {
      font-size: calc(1.1em + 0.2vw);
      font-weight: 500;
      width: 80vw;
    }
    `}</style>
  </p>

const PageHeader = ({ children }) =>
  <WidthContainer>
    <section className='title wrapper'>
      {children}
      <style jsx>{`
      .title.wrapper {
        padding: 0 .75em;
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      `}</style>
    </section>
  </WidthContainer>

PageHeader.Title = Title
PageHeader.Sub = Sub

export default PageHeader
