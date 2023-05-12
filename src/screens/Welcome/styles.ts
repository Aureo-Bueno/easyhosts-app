import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  backgroundColor: '#04091D';
`;

export const ContainerLogo = styled.View`
  flex: 2;
  backgroundColor: '#04091D';
  justifyContent: 'center';
  alignItems: 'center';
`;

export const ContainerForm = styled(Animatable.View)`
  flex: 1;
  backgroundColor: '#FFF';
  borderTopLeftRadius: 25;
  borderTopRightRadius: 25;
  paddingHorizontal: '5%';
`;

export const Title = styled.Text`
  fontSize: 24;
  fontWeight: 'bold';
  marginTop: 28;
  marginBottom: 12;
`;

export const Text = styled.Text`
  color: '#a1a1a1';
  fontSize: 16;
`;
