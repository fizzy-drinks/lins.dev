import { FC } from 'react';
import useSeo from 'hooks/useSeo';

const HomePage: FC = () => {
  const seo = useSeo({
    uri: '/',
  });

  return seo;
};

export default HomePage;
