import compose from 'ramda/es/compose';
import withDarkMode from 'server/withDarkMode';
import withRecentTracks from 'server/withRecentTracks';
import withTranslations from 'server/withTranslations';

export { default } from 'components/pages/Links';

export const getServerSideProps = compose(
  withRecentTracks,
  withDarkMode,
  withTranslations
)(async () => ({ props: {} }));
