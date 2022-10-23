import { GetServerSideProps } from 'next';
import compose from 'ramda/es/compose';
import { HomePageProps } from 'components/pages/HomePage';
import withDarkMode from 'server/withDarkMode';
import withRecentTracks from 'server/withRecentTracks';
import withTranslations from 'server/withTranslations';

export { default } from 'components/pages/HomePage';

export const getServerSideProps: GetServerSideProps<HomePageProps> = compose(
  withRecentTracks,
  withDarkMode,
  withTranslations
)(async () => ({ props: {} }));
