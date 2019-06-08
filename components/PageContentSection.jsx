import WidthContainer from './WidthContainer'

import palette from '../config/colors'

const PageContentSection = ({ children }) =>
  <section>
    <WidthContainer>
      {children}
    </WidthContainer>
  </section>

export default PageContentSection
