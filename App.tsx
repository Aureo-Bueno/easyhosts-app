import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthRoutes from './src/routes';

const query = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={query}>
        <NavigationContainer>
          <AuthRoutes />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
);
}
