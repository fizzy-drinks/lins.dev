import GSPEnhancer from './GSPEnhancer';

const withDarkMode: GSPEnhancer = (fn) => async (ctx) => {
  const result = await fn(ctx);

  if ('redirect' in result || 'notFound' in result) return result;

  return {
    ...result,
    props: {
      ...(await result.props),
      darkMode: ctx.req.cookies['dark-mode'] === 'true',
    },
  };
};

export default withDarkMode;
