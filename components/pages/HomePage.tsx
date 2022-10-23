import { FC } from 'react';
import useSeo from 'hooks/useSeo';
import LastfmProvider, {
  LastfmContextProps,
} from 'components/providers/LastfmProvider';
import PageLayout from 'components/ui/PageLayout';

export type HomePageProps = LastfmContextProps;

const HomePage: FC<HomePageProps> = ({ recentTracks }) => {
  const seo = useSeo({
    uri: '/',
  });

  return (
    <LastfmProvider recentTracks={recentTracks}>
      {seo}
      <PageLayout />
    </LastfmProvider>
  );
};

export default HomePage;
