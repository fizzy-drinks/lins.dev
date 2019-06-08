import palette from '../config/colors'

const Title = ({ children }) =>
  <h2>
    {children}
    <style jsx>{`
    h2 {
      font-family: Inconsolata, monospace;
      font-size: 5em;
      margin: 0;
      color: ${palette.primary};
      padding: 0;
      animation: nudge-right 2s ease-out 0s 1 normal forwards;
    }

    @keyframes nudge-right {
      0% {
        padding-left: 0;
      }

      100% {
        padding-left: 7.5vw;
      }
    }

    h2::before {
      content: '<';
      font-size: .8em;
      color: ${palette.black}
    }

    h2::after {
      content: '/>';
      font-size: .8em;
      color: ${palette.black}
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

const Sub = ({ children }) =>
  <p>
    {children}
    <style jsx>{`
    p {
      font-size: calc(1.1em + 0.2vw);
      font-weight: 500;
      color: ${palette.black.lighten(.5)};
      animation: nudge-left 2s ease-out 0s 1 normal forwards;
      width: 80vw;
    }

    @keyframes nudge-left {
      0% {
        padding-left: 10vw;
      }

      100% {
        padding-left: 5vw;
      }
    }
    `}</style>
  </p>

const PageHeader = ({ children }) =>
  <section className='title wrapper'>
    {children}
    <style jsx>{`
    .title.wrapper {
      background: radial-gradient(circle at top left, ${palette.light}, ${palette.light.lighten(.2)} 100%);
      border-top: ${palette.black} 1em solid;
      border-bottom: ${palette.black} 1em solid;

      padding: 0 .75em;
      height: 70vh;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    `}</style>
  </section>

PageHeader.Title = Title
PageHeader.Sub = Sub

export default PageHeader
