import palette from '../config/colors'

const SeparatorLink = ({ children }) =>
  <div className='link'>
    {children}
    <style jsx>{`
    .link {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0 auto;
      width: 150px;
      min-height: 48px;
      border-top-width: 1px;

      background: ${palette.light.alpha(.5)};
      color: ${palette.primaryDark};
    }

    .link:hover {
      border-width: 1px 0;
      background: ${palette.warn.alpha(.6)}
    }
    `}</style>
  </div>

export default SeparatorLink
