import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

const enhanceProps =
  <
    P extends Record<string, unknown> = Record<string, unknown>,
    EnhancedP = Record<string, unknown>
  >(
    propsEnhancer: (
      ctx: GetServerSidePropsContext
    ) => Promise<GetServerSidePropsResult<EnhancedP>>
  ) =>
  (fn: GetServerSideProps<P>) =>
  async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P & EnhancedP>> => {
    const enhanced = await propsEnhancer(ctx);
    if ('redirect' in enhanced || 'notFound' in enhanced) return enhanced;

    const result = await fn(ctx);
    if ('redirect' in result || 'notFound' in result) return result;

    return {
      ...(await result),
      ...enhanced,
      props: {
        ...(await enhanced.props),
        ...(await result.props),
      },
    };
  };

export default enhanceProps;
