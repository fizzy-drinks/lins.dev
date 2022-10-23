import compose from 'ramda/es/compose';
import { GetServerSideProps } from 'next';
import withDarkMode from 'server/withDarkMode';
import withTranslations from 'server/withTranslations';
import withRecentTracks from 'server/withRecentTracks';

export { default } from 'components/pages/Rango';

export const getServerSideProps: GetServerSideProps = compose(
  withRecentTracks,
  withDarkMode,
  withTranslations
)(async () => ({ props: {} }));
