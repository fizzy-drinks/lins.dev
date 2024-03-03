import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import enhanceProps from './enhanceProps';

const withTranslations = enhanceProps(async (ctx) => ({
  props: await serverSideTranslations(
    ctx.locale || ctx.defaultLocale || 'pt-BR',
    ['common']
  ),
}));

export default withTranslations;
