import { Alert, View } from 'react-native';
import { Text, Input, Button } from '@rneui/themed';
import { styles } from './styles';
import React from 'react';
import { INavigation } from '../../@types';
import { login, useLoginMutation } from '../../service/auth/login';

function Login ({ navigation }: INavigation) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { isError, mutate, isLoading } = useLoginMutation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {isError && (
        <Text>Ocorreu um erro</Text>
      )}
      <View style={styles.form}>
        <Input
          style={styles.input}
          placeholder='Digite seu e-mail'
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          style={styles.input}
          placeholder='Digite sua senha'
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={styles.button}
          title='Acessar'
          onPress={() => mutate({ email, password } , {
            onSuccess: () => {
              navigation.navigate('Auth');
            },
            onError: () => {
              Alert.alert('Erro ao fazer Login!', 'Tente novamente mais tarde!', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
            }
          })}
          disabled={!email || !password}
          loading={isLoading}
        />
      </View>
    </View>
  );
};

export default Login;
