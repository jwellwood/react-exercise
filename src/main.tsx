import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './content/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
