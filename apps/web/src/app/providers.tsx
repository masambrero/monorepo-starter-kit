'use client';

import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from '@tanstack/react-query';
import { AxiosError, isAxiosError } from 'axios';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // @ts-ignore err: unknown -> err: AxiosError
      retry: (failureCount, err: AxiosError) => {
        if (err.response?.status === 401 || err.response?.status === 403) {
          return false;
        }

        // otherwise, restore default
        const defaultRetry = new QueryClient().getDefaultOptions().queries
          ?.retry;

        return typeof defaultRetry === 'number'
          ? failureCount < defaultRetry
          : false;
      },
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (isAxiosError(error)) {
        if (error.response?.status === 401 || error.response?.status === 403) {
          window.location.href = '/login';
        }
      }
    },
  }),
});

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
