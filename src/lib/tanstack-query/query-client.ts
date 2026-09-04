import { QueryClient } from '@tanstack/react-query';
import {
  QUERY_REFETCH_ON_WINDOW_FOCUS,
  QUERY_RETRY_COUNT,
  QUERY_STALE_TIME_MS,
} from './query-config';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: QUERY_STALE_TIME_MS,
        retry: QUERY_RETRY_COUNT,
        refetchOnWindowFocus: QUERY_REFETCH_ON_WINDOW_FOCUS,
      },
    },
  });
};
