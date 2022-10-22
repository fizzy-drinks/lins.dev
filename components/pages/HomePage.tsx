import { FC } from 'react';
import useSeo from 'hooks/useSeo';
import withBaseLayout from 'components/ui/withBaseLayout';

const HomePage: FC = withBaseLayout(() => {
  const customSeo = useSeo({
    uri: '/',
  });

  return customSeo;
});

export default HomePage;
