import palette from '../config/colors'

const Logo = () =>
  <div className='frame'>
    <span className='lins'>lins</span>
    <span className='dev'>.dev</span>
    <style jsx>{`
    .frame {
      margin: 0;
      padding: .5em;
      font-family: 'Nanum Gothic Coding', monospace;
      border: ${palette.primary.darken(.2).alpha(.2)} 1px solid;
      border-radius: 2px;
      background-color: ${palette.primary.lighten(.5).alpha(.9)};
      color: ${palette.white.alpha(.9)}
    }

    .frame::before {
      content: '<'
    }

    .frame::after {
      content: '/>'
    }

    .lins {
      color: ${palette.complement};
    }
    `}</style>
  </div>

export default Logo
