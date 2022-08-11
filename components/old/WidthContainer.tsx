import { FC, PropsWithChildren } from 'react';

const WidthContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className='width container'>
    {children}
    <style jsx>{`
      .width.container {
        max-width: 1360px;
        width: 100%;
        margin: 0 auto;
        padding: 0 1em;
      }
    `}</style>
  </div>
);

export default WidthContainer;
