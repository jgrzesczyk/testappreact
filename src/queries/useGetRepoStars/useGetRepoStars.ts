import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../queryKeys.ts';
import { GITHUB_API_URL } from '../../constants.ts';
import { GetRepoStarsResponse } from './types.ts';

export const useGetRepoStars = (fullName: string) => {
  const fetchRepoStars = async () => {
    const res = await fetch(`${GITHUB_API_URL}/repos/${fullName}`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  };

  return useQuery<GetRepoStarsResponse, unknown, number>({
    queryKey: QUERY_KEYS.USER_REPO_STARS(fullName),
    queryFn: fetchRepoStars,
    enabled: !!fullName,
    select: ({ stargazers_count }) => stargazers_count
  });
};
