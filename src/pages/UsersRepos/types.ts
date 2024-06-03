import { UsersReposContextProps } from '../../contexts/types.ts';
import { GetUsersResponse } from '../../queries/useGetUsers/types.ts';

export type UseUsersReposProps = UsersReposContextProps & {
  isFetching: boolean;
  usersData?: GetUsersResponse['items'];
  isError: boolean;
  isUserOpened: Record<string, boolean>;
  toggleUserOpened: (id: string) => void;
};
