import palette from '../config/colors'

const Logo = () =>
  <div className='frame'>
    <span className='lins'>lins</span>
    <span className='dev'>.dev</span>
    <style jsx>{`
    .frame {
      margin: 0;
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
      color: ${palette.gray.rgb()}
    }
    `}</style>
  </div>

export default Logo
