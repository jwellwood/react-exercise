import { useState, useEffect } from 'react';
import { memberAPI } from '../api/memberAPI';

export const useLoadMember = (id: string) => {
  const [member, setMember]: any = useState();
  useEffect(() => {
    memberAPI.getMemberDetails(id).then((res) => {
      if (res) {
        setMember(res);
      }
    });
  }, [id]);

  return { member };
};
