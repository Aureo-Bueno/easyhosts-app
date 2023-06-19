import React, { useContext } from 'react';
import { View } from 'react-native';
import * as S from './styles';
import { IMenu } from './types';
import logoEasyHosts from '../../assets/logo.jpg';
import { NavigationStackProp } from 'react-navigation-stack';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { logout } from '../../service/queries/logout';

function Menu({ headerText }: IMenu) {
  const navigation = useNavigation<NavigationStackProp>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const { setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      logout
      setUser(null);
      navigation.push('Welcome');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <S.Header>
        {headerText != 'Início' ? (
          <S.MenuIcon name="arrow-back-outline" size={24} onPress={handleGoBack} />
        ) : (
          <S.MenuIcon name="home-outline" size={24} />
        )}
        <S.Logo source={logoEasyHosts} />
        <S.MenuIcon name="enter-outline" size={24} onPress={handleLogout}/>
      </S.Header>
      <S.HeaderTextContainer>
        <S.HeaderText>{headerText}</S.HeaderText>
      </S.HeaderTextContainer>
    </View>
  );
}

export default Menu;
function setAuth(arg0: { token: null; isAuthenticated: boolean; }) {
  throw new Error('Function not implemented.');
}

