import { createGlobalStyle } from 'styled-components';
import { BACKGROUND_COLOR } from './colors.ts';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 16px;
    background: ${BACKGROUND_COLOR};
    font-family: 'Roboto', sans-serif;
  }
`;
