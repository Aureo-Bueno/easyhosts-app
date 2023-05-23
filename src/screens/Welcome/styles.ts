import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  background-color: #04091d;
`;

export const ContainerLogo = styled.View`
  flex: 2;
  background-color: #04091d;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled(Animatable.View)`
  flex: 1;
  background-color: #fff;
  border-top-right-radius: 25px;
  border-top-right-radius: 25px;
  padding: 0 5% 0 5%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 28px;
  margin-bottom: 12px;
`;

export const Text = styled.Text`
  color: #a1a1a1;
  font-size: 16px;
`;
