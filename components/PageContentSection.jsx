import WidthContainer from './WidthContainer'

import palette from '../config/colors'

const PageContentSection = ({ children }) =>
  <section>
    <WidthContainer>
      <div className='left-hand limited width'>
        {children}
        <style jsx>{`
        .left-hand.limited.width {
          padding-left: 1em;
        }
        `}</style>
      </div>
    </WidthContainer>
  </section>

export default PageContentSection
