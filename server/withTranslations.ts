import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import GSPEnhancer from './GSPEnhancer';

const withTranslations: GSPEnhancer = (fn) => async (ctx) => {
  const result = await fn(ctx);

  if ('redirect' in result || 'notFound' in result) return result;

  return {
    ...result,
    props: {
      ...(await result.props),
      ...(await serverSideTranslations(ctx.locale, ['common'])),
    },
  };
};

export default withTranslations;
