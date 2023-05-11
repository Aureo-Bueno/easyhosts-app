import { View } from 'react-native';
import { Text, Input, Button } from '@rneui/themed';
import { styles } from './styles';
import { useMutation } from 'react-query';
import React from 'react';
import { login } from '../../service/login';

const Login = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const mutation = useMutation(login, {
    onSuccess: () => {
      navigation.navigate('App');
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {mutation.isError && (
        <Text>Ocorreu um erro</Text>
      )}
      <View style={styles.form}>
        <Input
          style={styles.input}
          placeholder="Usuário"
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          style={styles.input}
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={styles.button}
          title="Acessar"
          onPress={() =>
            mutation.mutate({
              password
            })
          }
          disabled={!username || !password}
          loading={mutation.isLoading}
        />
      </View>
    </View>
  );
};

export default Login;
