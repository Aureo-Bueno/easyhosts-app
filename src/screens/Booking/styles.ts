import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #F4F4F4;
`;

export const Header = styled.View`
  background-color: #04091D;
  padding: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const ContentContainer = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderText = styled.Text`
  color: #FFF;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;

export const Card = styled.View`
  background-color: #FFF;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: #04091D;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const InfoText = styled.Text`
  color: #04091D;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  background-color: #04091D;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 17px;
`;