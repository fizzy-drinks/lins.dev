const WidthContainer = ({ children }) =>
  <div className='width container'>
    {children}
    <style jsx>{`
    .width.container {
      max-width: 1360px;
      width: 100%;
      margin: 0 auto;
    }
    `}</style>
  </div>

export default WidthContainer
