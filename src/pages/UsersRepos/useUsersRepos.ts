import { useState } from 'react';
import { useGetUsers } from '../../queries/useGetUsers/useGetUsers.ts';
import { UseUsersReposProps } from './types.ts';

export const useUsersRepos = (): UseUsersReposProps => {
  const [phrase, setPhrase] = useState('');
  const [isUserOpened, setIsUserOpened] = useState<Record<string, boolean>>({});

  const { isFetching, data: usersData, isError } = useGetUsers(phrase);

  const isSomeUserOpened = Object.values(isUserOpened).some((val) => val);

  const toggleUserOpened = (id: string) => {
    setIsUserOpened({ ...isUserOpened, [id]: !isUserOpened[id] });
  };

  const resetUserOpened = () => {
    setIsUserOpened({});
  };

  return {
    phrase,
    setPhrase,
    isFetching,
    usersData,
    isError,
    isUserOpened,
    toggleUserOpened,
    resetUserOpened,
    isSomeUserOpened
  };
};
