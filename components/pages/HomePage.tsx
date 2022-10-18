import { FC } from 'react';
import useSeo from 'hooks/useSeo';

const HomePage: FC = () => {
  const customSeo = useSeo({
    uri: '/',
  });

  return customSeo;
};

export default HomePage;
