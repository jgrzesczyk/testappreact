export const QUERY_KEYS = {
  USERS: (phrase: string) => ['users', phrase],
  USER_REPOS: (id: string) => ['users', id, 'repos'],
  USER_REPO_STARS: (id: string) => ['users', 'repos', id, 'stars']
};
