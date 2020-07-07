import * as React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

export const MemberHead = () => {
  const headData: string[] = ['Avatar', 'Id', 'Name', ''];

  return (
    <TableRow>
      {headData.map((text) => (
        <TableCell key={text} style={{ color: '#fff', fontWeight: 'bold' }}>
          {text}
        </TableCell>
      ))}
    </TableRow>
  );
};
