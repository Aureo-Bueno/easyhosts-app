import { Button, Card } from '@rneui/themed';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
       <Card>
        <Text>Teste</Text>
        <Button 
          size='md'
          type='outline'
        >
          Teste
        </Button>
       </Card>
    </SafeAreaView>
  );
}
