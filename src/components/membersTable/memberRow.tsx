import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { TableRow, TableCell, Avatar, Typography } from '@material-ui/core';
import { LinkButtonComponent } from '../buttons/linkButton';

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.FC<Props> = ({ member }) => {
  return (
    <TableRow>
      <TableCell>
        <Avatar src={member.avatar_url} />
      </TableCell>
      <TableCell>
        <Typography variant='body2'>{member.id}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant='body2'>{member.login}</Typography>
      </TableCell>
      <TableCell>
        <LinkButtonComponent link={`/${member.login}`}>
          Details
        </LinkButtonComponent>
      </TableCell>
    </TableRow>
  );
};
