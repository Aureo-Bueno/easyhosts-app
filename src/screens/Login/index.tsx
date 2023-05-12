import { Alert, View } from 'react-native';
import { Text, Input, Button } from '@rneui/themed';
import { styles } from './styles';
import React from 'react';
import { INavigation } from '../../@types';
import { useLoginMutation } from '../../service/auth/login';
import * as Animatable from 'react-native-animatable';


function Login({ navigation }: INavigation) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { isError, mutate, isLoading } = useLoginMutation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      {isError && (
        <Text>Ocorreu um erro</Text>
      )}

      <Animatable.View animation="fadeInUp" style={styles.containerFormu}>
        <Text style={styles.title}>Email</Text>
        <Input
          style={styles.input}
          placeholder='Digite seu e-mail'
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.title}>Senha</Text>
        <Input
          style={styles.input}
          placeholder='Digite sua senha'
          onChangeText={(text) => setPassword(text)}
        />

        <Button
          title='Entrar'
          titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
          buttonStyle={{
            backgroundColor: '#04091D',
            width: '100%',
            borderRadius: 5,
            marginTop: 45,
            paddingVertical: 18,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => mutate({ email, password }, {
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
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ]);
            }
          })}
          loading={isLoading}
        />
      </Animatable.View>
    </View>
  );
};

export default Login;
