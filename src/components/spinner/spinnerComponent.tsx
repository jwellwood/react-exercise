import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import { CircularProgress } from '@material-ui/core';

export const SpinnerComponent: React.FC = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color='secondary' variant='indeterminate' />
      </div>
    )
  );
};
