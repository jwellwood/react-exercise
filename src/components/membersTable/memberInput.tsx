import React from 'react';
import { TextField, Button, Paper } from '@material-ui/core';

interface Props {
  loadMembers: () => void;
  onChange: (e) => typeof e;
  organizationName: string;
}

export const MemberInput: React.FC<Props> = ({
  loadMembers,
  onChange,
  organizationName,
}) => {
  return (
    <Paper style={{ margin: '10px auto', padding: '10px' }}>
      <TextField type='text' value={organizationName} onChange={onChange} />
      <Button onClick={loadMembers} variant='contained' color='secondary'>
        Load
      </Button>
    </Paper>
  );
};
