import { useState, ChangeEvent } from 'react';
import { MemberEntity } from '../model/member';
import { memberAPI } from '../api/memberAPI';

export const useLoadMembers = () => {
  const [organizationName, setOrganizationName] = useState('lemoncode'); // Hardcoded initial value
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [error, setError] = useState(null);

  const onChange = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement;
    setOrganizationName(element.value);
  };

  const loadMembers = () => {
    setError(null); // reset any previous error state
    memberAPI
      .getAllMembers(organizationName)
      .then((members) => setMembers(members))
      .catch((err) => setError(err));
  };

  return { loadMembers, members, onChange, organizationName, error };
};
