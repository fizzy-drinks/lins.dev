import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

type BaseProps = Record<string, unknown>;

type Enhancer<P> = (
  ctx: GetServerSidePropsContext
) => Promise<GetServerSidePropsResult<P>>;

const enhanceProps =
  <P extends BaseProps = BaseProps, EnhancedP = BaseProps>(
    propsEnhancer: Enhancer<EnhancedP>
  ) =>
  (fn: GetServerSideProps<P>): GetServerSideProps<P & EnhancedP> =>
  async (ctx) => {
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
