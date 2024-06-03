import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../queryKeys.ts';
import { GITHUB_API_URL } from '../../constants.ts';
import { GetUserReposResponse } from './types.ts';

export const useGetUserRepos = (id: string, isExpanded: boolean) => {
  const fetchUserRepos = async () => {
    const res = await fetch(`${GITHUB_API_URL}/users/${id}/repos`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  };

  return useQuery<GetUserReposResponse>({
    queryKey: QUERY_KEYS.USER_REPOS(id),
    queryFn: fetchUserRepos,
    enabled: isExpanded
  });
};
