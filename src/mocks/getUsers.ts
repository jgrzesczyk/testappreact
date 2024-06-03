import { GetUsersResponse } from '../queries/useGetUsers/types.ts';

export const getUsers: GetUsersResponse = {
  items: [
    { id: 12, login: 'user11' },
    { id: 121, login: 'user2' }
  ]
};
