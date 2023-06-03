import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';
import { Input as InputRnui, Button as ButtonRnui } from '@rneui/themed';

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

export const Button = styled(ButtonRnui)``;
