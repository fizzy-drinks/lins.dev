const SeparatorLink = ({ children }) =>
  <div className='link'>
    {children}
    <style jsx>{`
    .link {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0 5px;
      height: 3em;
      border-top-width: 1px;
    }

    .link:hover {
      border-width: 1px 0;
    }
    `}</style>
  </div>

export default SeparatorLink
