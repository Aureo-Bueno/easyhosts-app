import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthRoutes from './src/routes';
import { AuthProvider } from './src/context/AuthProvider';

const query = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={query}>
        <AuthProvider>
          <NavigationContainer>
            <AuthRoutes />
          </NavigationContainer>
        </AuthProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
);
}
