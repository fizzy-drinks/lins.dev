import withTranslations from 'server/withTranslations';

export { default } from 'components/pages/HomePage';

export const getServerSideProps = withTranslations(async () => ({ props: {} }));
