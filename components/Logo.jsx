import colors from '../config/colors'

const Logo = () =>
  <div>
    <span className='lins'>lins</span>
    <span className='dev'>.dev</span>
    <style jsx>{`
    div {
      padding: .3em .5em;
      font-family: Inconsolata, monospace;
      border: ${colors.primary.main} 1px solid;
      border-radius: 2px;
      background-color: ${colors.white};
      box-shadow: 0px 0px 5px 1px ${colors.white};
    }

    .lins {
      color: ${colors.primary.main};
    }

    .dev {
      color: ${colors.gray.dark}
    }
    `}</style>
  </div>

export default Logo
