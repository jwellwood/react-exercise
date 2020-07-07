import { useState } from 'react';
import { MemberEntity } from '../model/member';

export const usePagination = (members: MemberEntity[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(5);

  const indexOfLastMember: number = currentPage * membersPerPage;
  const indexOfFirstMember: number = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const changePage = (page: number) => setCurrentPage(page);
  const changeMembersPerPage = (e) => {
    setMembersPerPage(e.target.value);
  };

  return {
    currentMembers,
    currentPage,
    changePage,
    membersPerPage,
    changeMembersPerPage,
  };
};
