import { Alert } from 'react-native';
import { Text, Button } from '@rneui/themed';
import * as S from './styles';
import React from 'react';
import { INavigation } from '../../@types';
import { useLoginMutation } from '../../service/mutations/auth/login';

function Login({ navigation }: INavigation) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { isError, mutate, isLoading } = useLoginMutation();

  return (
    <S.Container>
      <S.ContainerHeader animation="fadeInLeft" delay={500}>
        <S.Message>Bem-vindo(a)</S.Message>
      </S.ContainerHeader>

      {isError && (
        <Text>Ocorreu um erro</Text>
      )}

      <S.ContainerForms animation="fadeInUp">
        <S.Title >Email</S.Title>
        <S.Input
          placeholder='Digite seu e-mail'
          onChangeText={(text) => setEmail(text)}
        />

        <S.Title>Senha</S.Title>
        <S.Input
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
      </S.ContainerForms>
    </S.Container>
  );
};

export default Login;
