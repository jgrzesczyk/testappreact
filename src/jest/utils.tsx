import React, { ReactElement, ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { render, RenderResult } from '@testing-library/react';
import { queryClient } from '../queryClient.ts';

const AppWithProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const renderDOM = (ui: ReactElement, options?: unknown[]): RenderResult => {
  return render(ui, {
    wrapper: AppWithProviders,
    ...options
  });
};

export { renderDOM };
