import { ParsedUrlQuery } from 'querystring';
import { GetServerSideProps, PreviewData } from 'next';

/**
 * Enhancer for `getServerSideProps`.
 *
 * Similar to next-connect, but done manually for lightweight tasks.
 */
type GSPEnhancer = <P, Q extends ParsedUrlQuery, D extends PreviewData>(
  fn: GetServerSideProps<P, Q, D>
) => GetServerSideProps<P, Q, D>;

export default GSPEnhancer;
