import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../queryKeys.ts';
import { GITHUB_API_URL, MAX_USERS } from '../../constants.ts';
import { GetUsersResponse } from './types.ts';

export const useGetUsers = (phrase: string) => {
  const fetchUsers = async () => {
    const res = await fetch(`${GITHUB_API_URL}/search/users?q=${phrase}&per_page=${MAX_USERS}`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  };

  return useQuery<GetUsersResponse, unknown, GetUsersResponse['items']>({
    queryKey: QUERY_KEYS.USERS(phrase),
    queryFn: fetchUsers,
    enabled: !!phrase,
    select: (data) => data.items
  });
};
