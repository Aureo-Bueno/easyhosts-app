import * as React from 'react';
import { View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './src/routes';
import Bedroom from './src/screens/Bedroom';

const queryClient = new QueryClient()

export default function App() {
  return (
    <View>
      <QueryClientProvider client={queryClient}>
        {/* <Routes /> */}
        <Bedroom />
      </QueryClientProvider>
    </View>
  );
}
