import React from 'react';
import { View } from 'react-native';
import * as S from './styles';
import { IMenu } from './types';
import logoEasyHosts from '../../assets/logo.jpg';

function Menu({ headerText }: IMenu) {
  return (
    <View>
      <S.Header>
        <S.Logo source={logoEasyHosts} />
      </S.Header>
      <S.HeaderTextContainer>
        <S.HeaderText>{headerText}</S.HeaderText>
      </S.HeaderTextContainer>
    </View>
  );
}

export default Menu;
