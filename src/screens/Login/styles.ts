import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { Input as InputRnui } from '@rneui/themed';

export const Container = styled(Animatable.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #04091d;
`;

export const ContainerHeader = styled(Animatable.View)``;

export const Message = styled.Text`
  margin-bottom: 25px;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;

export const ContainerForms = styled(Animatable.View)`
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
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
