import { Dispatch, SetStateAction } from 'react';

export type UsersReposContextProps = {
  phrase: string;
  setPhrase: Dispatch<SetStateAction<string>>;
  resetUserOpened: () => void;
  isSomeUserOpened: boolean;
};
