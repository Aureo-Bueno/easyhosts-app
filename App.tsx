import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes';
import { QueryClientProvider, QueryClient } from 'react-query';

const query = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={query}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
