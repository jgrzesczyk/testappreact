import { FC, FormEventHandler, HTMLAttributes, useContext } from 'react';
import { ResultText, SearchBarButton, SearchBarStyled, SearchInput } from './SearchBar.style.ts';
import { UsersReposContext } from '../../contexts/UsersRepos.ts';
import { useGetUsers } from '../../queries/useGetUsers/useGetUsers.ts';

export const SearchBar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { phrase, setPhrase, resetUserOpened, isSomeUserOpened } = useContext(UsersReposContext);
  const { isFetching } = useGetUsers(phrase);

  // i dont know whether isSomeUserOpened is needed, layouts are implemented in this way
  const isResultTextDisplayed = !isFetching && !!phrase && !isSomeUserOpened;

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const { phrase: newPhrase } = Object.fromEntries(formData) as { phrase: string };
    setPhrase(newPhrase);
    resetUserOpened();
  };

  return (
    <SearchBarStyled {...props}>
      <form className="searchbar__form" onSubmit={handleSubmitForm}>
        <SearchInput label="Enter username" variant="outlined" size="small" name="phrase" />
        <SearchBarButton type="submit" variant="contained">
          Search
        </SearchBarButton>
      </form>
      {isResultTextDisplayed && <ResultText>{`Showing results for ${phrase}`}</ResultText>}
    </SearchBarStyled>
  );
};
