import Color from 'color'

const base = {
  primary: Color('rgba(229, 0, 0, 1)'),
  primaryDark: Color('#4B0202'),
  complement: Color('#FFFF66'),
  warn: Color('rgba(247, 179, 43, 1)'),
  light: Color('rgba(252, 246, 177, 1)'),
  white: Color('#FAFAFA'),
  black: Color('rgba(9, 8, 9, 1)'),
  trueBlack: Color('#000'),
  trueWhite: Color('#FFF')
}

export default {
  ...base,
  gray: base.black.whiten(20)
}
