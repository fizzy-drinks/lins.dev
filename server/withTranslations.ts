import { ParsedUrlQuery } from 'querystring';
import { GetServerSideProps, PreviewData } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const withTranslations =
  <P, Q extends ParsedUrlQuery, D extends PreviewData>(
    fn: GetServerSideProps<P, Q, D>
  ): GetServerSideProps<P & SSRConfig, Q, D> =>
  async (ctx) => {
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

export default withTranslations
