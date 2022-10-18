import withTranslations from 'server/withTranslations';

export { default } from 'components/pages/Rango';

export const getServerSideProps = withTranslations(async () => ({ props: {} }));
