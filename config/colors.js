import Color from 'color'

const base = {
  primary: Color('rgba(229, 0, 0, 1)'),
  complement: Color('rgba(169, 229, 187, 1)'),
  warn: Color('rgba(247, 179, 43, 1)'),
  light: Color('rgba(252, 246, 177, 1)'),
  white: Color('#FAFAFA'),
  black: Color('rgba(9, 8, 9, 1)'),
}

export default {
  ...base,
  gray: base.black.whiten(20)
}
