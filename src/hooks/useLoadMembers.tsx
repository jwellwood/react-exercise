import { useState, ChangeEvent } from 'react';
import { MemberEntity } from '../model/member';
import { memberAPI } from '../api/memberAPI';

export const useLoadMembers = () => {
  const [organizationName, setOrganizationName] = useState('lemoncode'); // Hardcoded initial value
  const [members, setMembers] = useState<MemberEntity[]>([]);

  const onChange = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement;
    setOrganizationName(element.value);
  };

  const loadMembers = () => {
    memberAPI
      .getAllMembers(organizationName)
      .then((members) => setMembers(members));
  };

  return { loadMembers, members, onChange, organizationName };
};
