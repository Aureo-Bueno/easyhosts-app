import * as React from 'react';
import { View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './src/routes';

const queryClient = new QueryClient()

export default function App() {
  return (
    <View>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </View>
  );
}
