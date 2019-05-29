import colors from '../config/colors'

const Title = ({ children }) =>
  <h2>
    {children}
    <style jsx>{`
    h2 {
      font-family: Inconsolata, monospace;
      font-size: 5em;
      margin: 0;
      color: ${colors.white};
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
      color: ${colors.secondary.lightest}
    }

    h2::after {
      content: '/>';
      font-size: .8em;
      color: ${colors.secondary.lightest}
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
      color: ${colors.gray.light};
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
  <div className='title wrapper'>
    {children}
    <style jsx>{`
    .title.wrapper {
      background: radial-gradient(circle at top left, ${colors.secondary.main}, ${colors.secondary.light} 100%);
      border-top: ${colors.primary.darkest} 1em solid;
      border-bottom: ${colors.primary.darkest} 1em solid;

      padding: 0 .75em;
      height: 70vh;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    `}</style>
  </div>

PageHeader.Title = Title
PageHeader.Sub = Sub

export default PageHeader