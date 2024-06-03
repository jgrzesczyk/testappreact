import { FC } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar.tsx';
import { GithubUser } from '../../components/GithubUser/GithubUser.tsx';
import { CardContent, CircularProgress } from '@mui/material';
import { SpinnerContainer, UsersReposStyled } from './UsersRepos.style.ts';
import { UsersReposContext } from '../../contexts/UsersRepos.ts';
import { useUsersRepos } from './useUsersRepos.ts';

export const UsersRepos: FC = () => {
  const { isFetching, usersData, isError, isUserOpened, toggleUserOpened, ...contextProps } =
    useUsersRepos();

  const renderData = () => {
    if (isFetching) {
      return (
        <SpinnerContainer>
          <CircularProgress />
        </SpinnerContainer>
      );
    }

    if (isError) return 'Error occurred';
    return usersData?.map(({ id, login }) => (
      <GithubUser
        key={id}
        expanded={!!isUserOpened[login]}
        onClick={() => toggleUserOpened(login)}
        username={login}
      />
    ));
  };

  return (
    <UsersReposContext.Provider value={contextProps}>
      <UsersReposStyled>
        <CardContent>
          <SearchBar />
          {renderData()}
        </CardContent>
      </UsersReposStyled>
    </UsersReposContext.Provider>
  );
};
