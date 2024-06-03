import { GetUserReposResponse } from '../queries/useGetUserRepos/types.ts';

export const getUserRepos: GetUserReposResponse = [
  { id: 123, name: 'test1', full_name: 'user11/test1', description: 'Test 1 description' },
  { id: 124, name: 'test2', full_name: 'user11/test2', description: 'Test 2 description' },
  { id: 125, name: 'test3', full_name: 'user11/test3', description: 'Test 3 description' }
];
