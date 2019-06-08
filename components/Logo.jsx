import palette from '../config/colors'

const Logo = () =>
  <div>
    <span className='lins'>lins</span>
    <span className='dev'>.dev</span>
    <style jsx>{`
    div {
      padding: .3em .5em;
      font-family: Inconsolata, monospace;
      border: ${palette.primary.darken(.5)} 1px solid;
      border-radius: 2px;
      background-color: ${palette.white};
    }

    .lins {
      color: ${palette.primary};
    }

    .dev {
      color: ${palette.black.whiten(20).rgb()}
    }
    `}</style>
  </div>

export default Logo
