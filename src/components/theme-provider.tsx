'use client';

import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

const ThemeProvider = ({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) => {
  const options: ThemeProviderProps = {
    enableSystem: true,
    attribute: 'class',
    defaultTheme: 'system',
    themes: ['light', 'dark'],
    ...props,
  };

  return <NextThemesProvider {...options}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
