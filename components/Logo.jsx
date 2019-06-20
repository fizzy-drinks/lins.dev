import palette from '../config/colors'

const Logo = () =>
  <div className='frame'>
    <img src='/static/me_256.png' alt='lins.dev' />
    <style jsx>{`
    .frame {
      height: 100%;
      display: flex;
      align-items: center;
    }

    img {
      border-radius: 50%;
      border: ${palette.black} 2px solid;
      background-color: white;
      height: 36px;
      width: 36px;
    }
    `}</style>
  </div>

export default Logo
