import { Alert } from 'react-native';
import { Text, Button } from '@rneui/themed';
import * as S from './styles';
import React, { useContext, useState } from 'react';
import { INavigation } from '../../@types';
import { useLoginMutation } from '../../service/mutations/auth/login';
import { AuthContext } from '../../context/AuthContext';
import { IUserRole } from '../../service/@types/user';

function Login({ navigation }: INavigation) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isLoading } = useLoginMutation();
  const { setUser } = useContext(AuthContext);

  const handleLogin = () => {
    mutate(
      {
        email,
        password,
      },
      {
        onSuccess: (userData: IUserRole) => {
          setUser(userData);
          navigation.navigate('Home');
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
        },
      }
    );
  };

  return (
    <S.Container>
      <S.ContainerHeader animation="fadeInLeft" delay={500}>
        <S.Message>Bem-vindo(a)</S.Message>
      </S.ContainerHeader>
      <S.ContainerForms animation="fadeInUp">
        <S.Title>Email</S.Title>
        <S.Input placeholder="Digite seu e-mail" onChangeText={(text) => setEmail(text)} />
        <S.Title>Senha</S.Title>
        <S.Input
          placeholder="Digite sua senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title="Entrar"
          titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
          buttonStyle={{
            backgroundColor: '#04091D',
            width: '100%',
            borderRadius: 5,
            marginTop: 25,
            paddingVertical: 18,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleLogin}
          loading={isLoading}
        />
      </S.ContainerForms>
    </S.Container>
  );
}

export default Login;
