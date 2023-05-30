import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { REACT_ROUTER } from './router/routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 60 * 1000, // 15 minutes
      refetchOnWindowFocus: false,
      retry: false,
      retryOnMount: false
    },
    mutations: {}
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={REACT_ROUTER} />
    </QueryClientProvider>
  </React.StrictMode>
);
