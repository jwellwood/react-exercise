import React from 'react';
import { MemberEntity } from '../../model/member';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';
import { MemberInput } from './memberInput';
import {
  Table,
  TableHead,
  TableBody,
  Typography,
  Container,
  Paper,
  TableContainer,
  Grid,
} from '@material-ui/core';
import { useLoadMembers } from '../../hooks/useLoadMembers';
import { PaginationComponent } from '../pagination/paginationComponent';
import { usePagination } from '../../hooks/usePagination';

export const MembersTableComponent: React.FC = () => {
  const {
    loadMembers,
    onChange,
    members,
    organizationName,
    error,
  } = useLoadMembers();
  const {
    currentMembers,
    currentPage,
    changePage,
    membersPerPage,
    changeMembersPerPage,
  } = usePagination(members);

  return (
    <Container maxWidth='md'>
      <Typography variant='h2'>Members Page</Typography>
      <Grid
        container
        direction='row'
        alignItems='center'
        justify='space-between'
      >
        <Grid item>
          <MemberInput
            onChange={onChange}
            loadMembers={loadMembers}
            organizationName={organizationName}
          />
        </Grid>
        <Grid item>
          <PaginationComponent
            totalMembers={members.length}
            membersPerPage={membersPerPage}
            changePage={changePage}
            changeMembersPerPage={changeMembersPerPage}
            currentPage={currentPage}
          />
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table style={{ marginTop: '10px' }}>
          <TableHead>
            <MemberHead />
          </TableHead>
          <TableBody>
            {currentMembers.map((member: MemberEntity) => (
              <MemberRow key={member.id} member={member} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {(!members.length || error) && (
        <Typography color='error'>Sorry, no members found!</Typography>
      )}
    </Container>
  );
};
