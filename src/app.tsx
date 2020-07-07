import * as React from 'react';
import { AppRouter } from './router';
import { SpinnerComponent } from './components/spinner/spinnerComponent';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <AppRouter />
      <SpinnerComponent />
    </>
  );
};
