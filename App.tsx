import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './src/routes';

const queryClient = new QueryClient()

export default function App() {
  return (
    <SafeAreaView>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </SafeAreaView>
  );
}
