import withTranslations from 'server/withTranslations';

export { default } from 'components/pages/Links';

export const getServerSideProps = withTranslations(async () => ({ props: {} }));
