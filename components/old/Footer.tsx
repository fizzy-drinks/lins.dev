import palette from '../../config/colors';

const FooterGradientTransitionLength = '10em';
const FooterTotalHeight = '25em';

const Footer = () => (
  <footer>
    <p>&copy; 2019 Gabriel Chiconi.</p>
    <p>
      <a
        target='_blank'
        href='https://gitlab.com/gabrielchiconi/lins.dev'
        rel='noreferrer'
      >
        Código fonte no GitLab
      </a>
    </p>
    <p>
      <a
        target='_blank'
        href='https://gitlab.com/gabrielchiconi/lins.dev/raw/master/LICENSE'
        rel='noreferrer'
      >
        Ver licença
      </a>
    </p>
    <p className='smaller'>
      <a
        target='_blank'
        href='https://www.freepik.com/free-photos-vectors/background'
        rel='noreferrer'
      >
        Background vector created by starline - www.freepik.com
      </a>
    </p>
    <style jsx>{`
      footer {
        font-size: 0.9em;
        line-height: 2em;
        height: ${FooterTotalHeight};
        padding: ${FooterGradientTransitionLength} 1em 1em;
        background: linear-gradient(
          to bottom,
          transparent 1em,
          ${palette.white.alpha(0.35)} ${FooterGradientTransitionLength}
        );

        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .smaller {
        margin-top: 1em;
        font-size: 0.8em;
      }
    `}</style>
  </footer>
);

export default Footer;