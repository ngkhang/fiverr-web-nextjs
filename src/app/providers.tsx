'use client';

import ThemeProvider from '@/components/theme-provider';
import { isDevelopment } from '@/config/env.client';
import { createQueryClient } from '@/lib/tanstack-query/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const [queryClientInstance] = useState(() => createQueryClient());

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClientInstance}>
        {children}

        {isDevelopment && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </ThemeProvider>
  );
};
