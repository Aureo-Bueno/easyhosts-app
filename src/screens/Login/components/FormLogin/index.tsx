import { useContext } from 'react';
import { useLoginMutation } from '../../../../service/mutations/auth/login';
import * as S from './styles';
import { IFormLogin } from './types';
import { AuthContext } from '../../../../context/AuthContext';
import { IUserRole } from '../../../../service/@types/user';
import { Alert } from 'react-native';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

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
          const result = userData.role.find(x => x === 'Manager');

          if(result === 'Manager' || result === 'Employe') {
            setUser(userData);
            navigation.navigate('Manager')
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
      <Input placeholder='Digite seu e-mail' onChangeText={(text) => setEmail(text)} />
      <S.Title>Senha</S.Title>
      <Input placeholder='Digite sua senha' secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
      <Button title='Entrar' onPress={handleLogin} loading={isLoading} colorBackground='#04091D' size='lg' />
    </S.ContainerForms>
  );
}

export default FormLogin;
