import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { Input as InputRnui } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #f4f4f4;
`;

export const Header = styled.View`
  background-color: #04091d;
  padding: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuIcon = styled(Ionicons)`
  color: #fff;
`;

export const MenuIconBlock = styled(Ionicons)`
  color: #fff;
  text-align: center;
  color: #f8b100;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 130px;
`;

export const ContentContainer = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const BlockContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Block = styled.TouchableOpacity`
  width: 48%;
  height: 150px;
  background-color: #04091d;
  border-radius: 10px;
  padding: 20px;
  justify-content: center;
`;

export const BlockFat = styled.TouchableOpacity`
  width: 100%;
  height: 175px;
  background-color: #04091d;
  border-radius: 10px;
  padding: 20px;
  justify-content: center;
`;

export const BlockTextName = styled.Text`
  color: #fff;
  font-size: 36px;
  font-weight: 100;
`;

export const BlockTextHotel = styled.Text`
  color: #fff;
  margin-top: 10px;
  font-size: 18px;
`;

export const CardBlockText = styled.Text`
  color: #fff;
  margin-top: 15px;
  font-size: 16px;
  text-align: center;
`;
