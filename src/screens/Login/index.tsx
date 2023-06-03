import * as S from './styles';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationStackProp } from 'react-navigation-stack';
import FormLogin from './components/FormLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationStackProp>();

  return (
    <S.Container>
      <S.ContainerHeader animation='fadeInLeft' delay={500}>
        <S.Message>Bem-vindo(a)</S.Message>
      </S.ContainerHeader>
      <FormLogin
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        navigation={navigation}
      />

    </S.Container>
  );
}

export default Login;
