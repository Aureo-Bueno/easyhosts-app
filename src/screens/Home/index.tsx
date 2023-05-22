import Menu from '../../components/Menu';
import { View } from 'react-native';
import { Text } from '@rneui/themed';

function Home() {

  return (
    <View>
      <Menu headerText="Início" />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
