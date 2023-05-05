import { FlatList, View } from 'react-native';
import { Text } from '@rneui/themed'
import { useGetBedroom } from '../../service/bedroom/queries';

function Home() {
  const { data, isLoading, isError } = useGetBedroom();
  return(
    <View>
      <Text h2>Hello World</Text>
      {isLoading &&
        <Text>Carregando</Text>
      }

      {isError &&
        <Text>Erro</Text>
      }
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </View>
  );
}

export default Home;
