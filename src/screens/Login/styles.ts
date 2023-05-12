import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { Input as InputRnui} from '@rneui/themed';

export const Container = styled.View`
  flex: 1;
  background-color: #04091D;
`;

export const ContainerHeader = styled(Animatable.View)`
  margin-top: 20%;
  margin-bottom: 10%;
  padding-right: 5%;
`;

export const Message = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #FFF;
`;

export const ContainerForms = styled(Animatable.View)`
  background-color: #FFF;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 10px;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 28px;
`;

export const Input = styled(InputRnui)`
  border-bottom-width: 1px;
  height: 40px;
  font-size: 16px;
`;

