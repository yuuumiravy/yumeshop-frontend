import { css } from '@emotion/react';
import { colors, fonts } from './tokens';
import 'ress';

export default css`
  html,
  body {
    padding: 0;
    margin: 0 auto;
    font-family: ${fonts.NotoSansJP};
    line-height: 1.5;
    background-color: ${colors.YumeWhiteGreen};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
