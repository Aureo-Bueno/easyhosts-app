import { useContext } from 'react';
import { useLoginMutation } from '../../../../service/mutations/auth/login';
import * as S from './styles';
import { IFormLogin } from './types';
import { AuthContext } from '../../../../context/AuthContext';
import { IUserRole } from '../../../../service/@types/user';
import { Alert } from 'react-native';

function FormLogin({ setEmail, setPassword, email, password, navigation}:IFormLogin) {
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
          const result = userData.role.find(x => x === 'Employee');

          if(result === 'Employee') {
            setUser(userData);
            navigation.navigate('Configuration')
          }else{
            setUser(userData);
            navigation.navigate('Home')
          }
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
  return(
    <S.ContainerForms animation='fadeInUp'>
      <S.Title>Email</S.Title>
      <S.Input placeholder='Digite seu e-mail' onChangeText={(text) => setEmail(text)} />
      <S.Title>Senha</S.Title>
      <S.Input
        placeholder='Digite sua senha'
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <S.Button
        title='Entrar'
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
  );
}

export default FormLogin;
