import React from 'react';
import { Button, Select, MenuItem, Paper, Grid } from '@material-ui/core';

interface Props {
  totalMembers: number;
  membersPerPage: number;
  currentPage: number;
  changePage: (p) => void;
  changeMembersPerPage: (p) => typeof p;
}

export const PaginationComponent: React.FC<Props> = ({
  totalMembers,
  membersPerPage,
  currentPage,
  changePage,
  changeMembersPerPage,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalMembers / membersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Paper style={{ textAlign: 'right' }}>
      <Grid container justify='flex-end'>
        {pageNumbers.map((page) => (
          <Button
            color='secondary'
            variant={page === currentPage ? 'contained' : 'text'}
            key={page}
            onClick={() => changePage(page)}
          >
            {page}
          </Button>
        ))}

        <Select
          style={{ minWidth: '70px' }}
          value={membersPerPage}
          onChange={changeMembersPerPage}
        >
          <MenuItem disabled>Per page</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </Grid>
    </Paper>
  );
};
