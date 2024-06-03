import { createContext } from 'react';
import { UsersReposContextProps } from './types.ts';

export const UsersReposContext = createContext<UsersReposContextProps>({
  phrase: '',
  setPhrase: () => null,
  resetUserOpened: () => null,
  isSomeUserOpened: false
});
