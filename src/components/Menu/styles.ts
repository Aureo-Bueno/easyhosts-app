import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Header = styled.View`
  background-color: #04091D;
  padding: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderTextContainer = styled.View`
  background-color: #04091D;
  padding-bottom: 30px;
  align-items: center;
`;

export const MenuIcon = styled(Ionicons)`
  color: #FFF;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 130px;
`;

export const HeaderText = styled.Text`
  color: #FFF;
  font-size: 30px;
  text-align: center;
  margin-top: 10px;
`;
