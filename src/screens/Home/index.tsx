import { View } from 'react-native';
import { Text } from '@rneui/themed'
import { useGetBedroom } from '../../service/bedroom/queries';

function Home() {
  const { data, isLoading, isError } = useGetBedroom();
  return(
    <View>
      {isLoading &&
        <Text>Carregando</Text>
      }

      {isError &&
        <Text>Erro</Text>
      }
      <Text h2>Hello World</Text>
      {data?.map(user => (
        <Text>{user.name}</Text>
      ))}
    </View>
  );
}

export default Home;
