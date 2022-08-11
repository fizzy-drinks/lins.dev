import { FC, PropsWithChildren } from 'react';
import WidthContainer from './WidthContainer';

const PageContentSection: FC<PropsWithChildren> = ({ children }) => (
  <section>
    <WidthContainer>{children}</WidthContainer>
  </section>
);

export default PageContentSection;
