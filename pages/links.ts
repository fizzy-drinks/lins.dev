import { GetServerSideProps } from 'next';
import compose from 'ramda/es/compose';
import { LinksPageProps } from 'components/pages/Links';
import withDarkMode from 'server/withDarkMode';
import withRecentTracks from 'server/withRecentTracks';
import withTranslations from 'server/withTranslations';

export { default } from 'components/pages/Links';

export const getServerSideProps: GetServerSideProps<LinksPageProps> = compose(
  withRecentTracks,
  withDarkMode,
  withTranslations
)(async () => ({ props: {} }));
