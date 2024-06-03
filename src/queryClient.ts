import { QueryClient } from '@tanstack/react-query';
import { STALE_TIME_MS } from './constants.ts';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: STALE_TIME_MS
    }
  }
});
