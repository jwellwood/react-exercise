import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card } from '@material-ui/core';
import { useLoadMember } from '../../hooks/useLoadMember';
import { LinkButtonComponent } from '../buttons/linkButton';

export const MemberPageComponent: React.FC = () => {
  const { id } = useParams();
  const { member } = useLoadMember(id);

  const memberDetails = member ? (
    <Container maxWidth='xs'>
      <LinkButtonComponent link='/'>Back</LinkButtonComponent>
      <Card variant='elevation' style={{ padding: '4px' }}>
        <Typography variant='h3'>{member.login}</Typography>
        <img src={member.avatar_url} alt='member' style={{ width: '100%' }} />
        <Typography>id: {member.id}</Typography>
      </Card>
    </Container>
  ) : null;

  return memberDetails;
};
