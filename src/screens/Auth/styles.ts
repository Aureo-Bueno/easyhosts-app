import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { Input as InputRnui} from '@rneui/themed';
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

export const MenuIcon = styled(Ionicons)`
  color: #FFF;
`;

export const MenuIconBlock = styled(Ionicons)`
  color: #FFF;
  text-align: center;
  color: #F8B100;
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
  background-color: #04091D;
  border-radius: 10px;
  padding: 20px;
  justify-content: center;
`;

export const BlockFat = styled.TouchableOpacity`
  width: 100%;
  height: 250px;
  background-color: #04091D;
  border-radius: 10px;
  padding: 20px;
  justify-content: center;
`;

export const BlockTextName = styled.Text`
  color: #FFF;
  font-size: 56px;
  font-weight: 100;
`;

export const BlockTextHotel = styled.Text`
  color: #FFF;
  font-size: 18px;
`;

export const CardBlockText = styled.Text`
  color: #FFF;
  margin-top: 15px;
  font-size: 16px;
  text-align: center;
`;
