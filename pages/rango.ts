import compose from 'ramda/es/compose';
import withDarkMode from 'server/withDarkMode';
import withTranslations from 'server/withTranslations';
import withRecentTracks from 'server/withRecentTracks';

export { default } from 'components/pages/Rango';

export const getServerSideProps = compose(
  withRecentTracks,
  withDarkMode,
  withTranslations
)(async () => ({ props: {} }));
