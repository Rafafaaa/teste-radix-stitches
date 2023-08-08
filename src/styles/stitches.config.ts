import { createStitches, globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: "'Inter', sans-serif"
  }
});

export const { styled, css, createTheme, keyframes } = createStitches({
  theme: {
    colors: {
      main: '#376FFF',
      mainLight: '#BCCFFF',
      text1: '#0047FF',
      text2: '#313131',
      text3: '#FFFFFF',
      white: '#FFFFFF',

      menuBackground: '#376FFFCC',
      menuText: '$text3',
    }
  },
  media: {
    sm: '(max-width: 767px)',
    md: '(min-width: 768px) and (max-width: 1023px)',
    lg: '(min-width: 1024px)',
  }
});