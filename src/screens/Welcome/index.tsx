import { Button } from '@rneui/themed';
import * as S from './styles';
import React from 'react';
import { INavigation } from '../../@types';
import * as Animatable from 'react-native-animatable';

function Welcome({ navigation }: INavigation) {
  return (
    <S.Container>
      <S.ContainerLogo>
        <Animatable.Image animation="flipInY" source={require('../../assets/logo.jpg')} style={{ width: '100%' }} resizeMode="contain"></Animatable.Image>
      </S.ContainerLogo>
      <S.ContainerForm delay={600} animation="fadeInUp" >
        <S.Title>Realize reserva sem dor de cabeça!</S.Title>
        <S.Text >Faça o login para começar</S.Text>
        <Button
          title='Acessar'
          titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
          buttonStyle={{
            backgroundColor: '#04091D',
            width: '50%',
            borderRadius: 5,
            marginTop: 40,
            paddingVertical: 18,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Login')}
        />
      </S.ContainerForm>
    </S.Container>
  );
};

export default Welcome;
