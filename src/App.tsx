import { GlobalStyle } from './App.style.ts';
import { UsersRepos } from './pages/UsersRepos/UsersRepos.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './queryClient.ts';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersRepos />

      <GlobalStyle />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
