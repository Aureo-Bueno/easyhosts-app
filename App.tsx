import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const query = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={query}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
);
}
