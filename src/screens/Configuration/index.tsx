import { View, Text } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Configuration() {
  const { user } = useContext(AuthContext);
  return(
    <View>
      <Text>{ user?.user.userName }</Text>
      <Text>Ola Gerente</Text>
    </View>
  );
}

export default Configuration;
