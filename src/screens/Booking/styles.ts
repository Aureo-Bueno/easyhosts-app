import styled from 'styled-components/native';
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

export const HeaderTextContainer = styled.View`
  background-color: #04091d;
  padding-bottom: 30px;
  align-items: center;
`;

export const MenuIcon = styled(Ionicons)`
  color: #fff;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 130px;
`;

export const ContentContainer = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const ContainerView = styled.View`
  padding: 20px;
`;

ContainerView;
export const HeaderText = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;

export const Card = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: #04091d;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const InfoText = styled.Text`
  color: #04091d;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
