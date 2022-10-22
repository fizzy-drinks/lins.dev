import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import enhanceProps from './enhanceProps';

const withTranslations = enhanceProps(async (ctx) => ({
  props: await serverSideTranslations(ctx.locale, ['common']),
}));

export default withTranslations;
