import enhanceProps from './enhanceProps';

const withDarkMode = enhanceProps(async (ctx) => ({
  props: { darkMode: ctx.req.cookies['dark-mode'] === 'true' },
}));

export default withDarkMode;
