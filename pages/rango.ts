import withDarkMode from 'server/withDarkMode';
import withTranslations from 'server/withTranslations';

export { default } from 'components/pages/Rango';

export const getServerSideProps = withDarkMode(
  withTranslations(async () => ({ props: {} }))
);
