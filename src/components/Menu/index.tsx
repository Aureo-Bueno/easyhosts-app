import React from 'react';
import { View } from 'react-native';
import * as S from './styles';

interface IMenu {
    headerText: string;
}

const Menu: React.FC<IMenu> = ({ headerText }) => {
    return (
        <View>
            <S.Header>
                <S.MenuIcon name="menu-outline" size={24} />
                <S.Logo source={require('../../assets/logo.jpg')} />
                <S.MenuIcon name="notifications-outline" size={24} />
            </S.Header>
            <S.HeaderTextContainer>
                <S.HeaderText>{headerText}</S.HeaderText>
            </S.HeaderTextContainer>
        </View>
    );
};

export default Menu;